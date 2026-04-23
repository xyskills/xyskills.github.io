import * as THREE from 'three'
import type { EventBus } from './EventBus'
import type { SceneManager } from '@/rendering/SceneManager'
import type { Ability } from './abilities/Ability'
import { AbilityState } from '@/types/ability'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { ShootEffect } from '@/rendering/effects/ShootEffect'
import { HollowPurpleEffect } from '@/rendering/effects/HollowPurpleEffect'
import { InfiniteVoidEffect } from '@/rendering/effects/InfiniteVoidEffect'
import { MergeBeam } from '@/rendering/effects/MergeBeam'
import { SoundManager } from '@/core/SoundManager'
import {
  getPinchMidpoint, getNormalizedPinchDistance,
  getHandByType, getHighestFingerTip,
} from '@/utils/landmark-utils'

const GRACE_PERIOD_MS     = 400
const POST_SHOOT_BLOCK_MS = 2800
const FLICK_COOLDOWN_MS   = 400
const DOMAIN_DURATION_S   = 10.0   // seconds the Infinite Void stays active

// ── Normalized pinch flick detection ──
const PINCH_THRESHOLD  = 0.28
const OPEN_THRESHOLD   = 0.50
const FLICK_VELOCITY   = 2.5    // raised: requires more deliberate release
const MIN_PINCH_FRAMES = 5      // raised: must hold pinch longer

export interface FlickDebugState {
  normalizedPinch: number
  velocity: number
  pinchHeld: boolean
  pinchFrames: number
  flickCooldown: boolean
}

export interface AbilityDebugState {
  activeAbilities: string[]
  mergeProgress: number
  flickState: FlickDebugState
  recentEvents: { label: string; t: number }[]
  domainActive: boolean
  domainProgress: number   // 0..1
}

export class AbilityManager {
  private registry: Map<GestureType, () => Ability> = new Map()
  private activeAbilities: Map<GestureType, Ability> = new Map()
  private lastSeenTime: Map<GestureType, number> = new Map()
  private projectiles: ShootEffect[] = []
  private eventBus: EventBus
  private sceneManager: SceneManager
  private soundManager: SoundManager
  private latestHands: HandData[] = []
  private postShootBlockUntil = 0
  private mergeBeam: MergeBeam | null = null
  private mergeContactTimer = 0

  // Normalized flick detection state
  private pinchHeldFrames = 0
  private pinchWasHeld    = false
  private lastFlickTime   = 0
  private prevNormPinch   = 0
  private normPinchHistory: number[] = []
  private lastNormPinch = 0
  private lastVelocity  = 0

  // Domain expansion state
  private domainActive = false
  private domainEffect: InfiniteVoidEffect | null = null
  private domainTimer  = 0

  // Debug event log (last 8)
  private debugEvents: { label: string; t: number }[] = []

  private readonly ATTRACTION_RANGE = 2.2
  private readonly MERGE_TOUCH_DIST = 0.28  // must nearly overlap before fusing
  private readonly MERGE_HOLD_TIME  = 0.9

  constructor(eventBus: EventBus, sceneManager: SceneManager) {
    this.eventBus = eventBus
    this.sceneManager = sceneManager
    this.soundManager = new SoundManager()
    this.eventBus.on('gestureDetected', (event) => this.onGesture(event))
    this.eventBus.on('handUpdate', (hands) => { this.latestHands = hands })
  }

  addAnimation(gestureTrigger: GestureType, abilityFactory: () => Ability): void {
    this.registry.set(gestureTrigger, abilityFactory)
  }

  getDebugState(): AbilityDebugState {
    return {
      activeAbilities: [...this.activeAbilities.keys()],
      mergeProgress: this.MERGE_HOLD_TIME > 0
        ? Math.min(this.mergeContactTimer / this.MERGE_HOLD_TIME, 1)
        : 0,
      flickState: {
        normalizedPinch: this.lastNormPinch,
        velocity: this.lastVelocity,
        pinchHeld: this.pinchWasHeld,
        pinchFrames: this.pinchHeldFrames,
        flickCooldown: performance.now() < this.lastFlickTime + FLICK_COOLDOWN_MS,
      },
      recentEvents: [...this.debugEvents],
      domainActive:   this.domainActive,
      domainProgress: this.domainActive ? Math.min(this.domainTimer / DOMAIN_DURATION_S, 1) : 0,
    }
  }

  private logEvent(label: string): void {
    // Skip consecutive duplicate labels
    if (this.debugEvents.length > 0 && this.debugEvents[0].label === label) return
    this.debugEvents.unshift({ label, t: performance.now() })
    if (this.debugEvents.length > 8) this.debugEvents.pop()
  }

  private onGesture(event: GestureEvent): void {
    this.logEvent(`gesture:${event.type} (${(event.confidence * 100).toFixed(0)}%)`)

    if (event.type === GestureType.FINGER_FLICK_LEFT || event.type === GestureType.FINGER_FLICK_RIGHT) {
      this.handleFlick()
      return
    }

    if (event.type === GestureType.DOMAIN_EXPANSION) {
      this.activateDomain()
      return
    }

    // Block all ability gestures while domain is active
    if (this.domainActive) return

    if (event.type === GestureType.HANDS_MERGED) return
    if (this.activeAbilities.has(GestureType.HANDS_MERGED)) return
    if (performance.now() < this.postShootBlockUntil) return
    this.handleAbilityGesture(event)
  }

  private activateDomain(): void {
    if (this.domainActive) return

    // Clear all current abilities
    for (const [key, ability] of this.activeAbilities) {
      this.sceneManager.removeEffect(ability.getEffect())
      this.activeAbilities.delete(key)
      this.lastSeenTime.delete(key)
    }
    this.clearMergeBeam()
    this.pinchHeldFrames  = 0
    this.pinchWasHeld     = false
    this.normPinchHistory = []

    this.domainActive = true
    this.domainTimer  = 0
    this.domainEffect = new InfiniteVoidEffect()
    this.sceneManager.addEffect(this.domainEffect)
    this.domainEffect.spawn()
    this.soundManager.play('domain')
    this.logEvent('DOMAIN EXPANSION: Infinite Void')
  }

  private deactivateDomain(): void {
    if (!this.domainActive) return
    if (this.domainEffect) {
      this.sceneManager.removeEffect(this.domainEffect)
      this.domainEffect = null
    }
    this.domainActive = false
    this.domainTimer  = 0
    this.logEvent('Domain: dissipated')
  }

  private handleAbilityGesture(event: GestureEvent): void {
    const factory = this.registry.get(event.type)
    if (!factory || !event.anchorPosition) return

    this.lastSeenTime.set(event.type, performance.now())
    let ability = this.activeAbilities.get(event.type)

    const handedness = event.type === GestureType.LEFT_HAND_RAISED ? 'Left' : 'Right'
    const hand = getHandByType(this.latestHands, handedness)
    let anchorPoint = event.anchorPosition
    if (hand) {
      const tip = getHighestFingerTip(hand.landmarks)
      anchorPoint = { x: tip.x, y: tip.y - 0.07, z: tip.z }
    }

    const worldPos = this.sceneManager.landmarkToWorld(anchorPoint)

    if (!ability) {
      ability = factory()
      this.activeAbilities.set(event.type, ability)
      this.sceneManager.addEffect(ability.getEffect())
      ability.onSpawn(anchorPoint)

      if (event.type === GestureType.LEFT_HAND_RAISED) {
        this.soundManager.play('blue')
        this.logEvent('SPAWN Blue')
      } else if (event.type === GestureType.RIGHT_HAND_RAISED) {
        this.soundManager.play('red')
        this.logEvent('SPAWN Red')
      }
    }

    ability.onIdle(anchorPoint, worldPos)
  }

  private updateMerge(dt: number): void {
    const blue = this.activeAbilities.get(GestureType.LEFT_HAND_RAISED)
    const red  = this.activeAbilities.get(GestureType.RIGHT_HAND_RAISED)

    if (!blue || !red || this.activeAbilities.has(GestureType.HANDS_MERGED)
        || performance.now() < this.postShootBlockUntil) {
      this.mergeContactTimer = 0
      this.clearMergeBeam()
      return
    }

    const bPos = blue.getEffect().getObject3D().position
    const rPos = red.getEffect().getObject3D().position
    const dist = bPos.distanceTo(rPos)

    if (dist < this.ATTRACTION_RANGE) {
      const intensity = 1 - dist / this.ATTRACTION_RANGE
      if (!this.mergeBeam) {
        this.mergeBeam = new MergeBeam()
        this.sceneManager.addEffect(this.mergeBeam)
        this.mergeBeam.spawn()
        this.logEvent('Merge beam START')
      }
      this.mergeBeam.setEndpoints(bPos, rPos, intensity)
      this.mergeBeam.update(dt)
    } else {
      this.clearMergeBeam()
    }

    if (dist < this.MERGE_TOUCH_DIST) {
      this.mergeContactTimer += dt
      if (this.mergeContactTimer >= this.MERGE_HOLD_TIME) {
        this.mergeContactTimer = 0
        this.doMerge()
      }
    } else {
      this.mergeContactTimer = 0
    }
  }

  private clearMergeBeam(): void {
    if (this.mergeBeam) {
      this.sceneManager.removeEffect(this.mergeBeam)
      this.mergeBeam.dispose()
      this.mergeBeam = null
    }
  }

  private doMerge(): void {
    for (const key of [GestureType.LEFT_HAND_RAISED, GestureType.RIGHT_HAND_RAISED]) {
      const ab = this.activeAbilities.get(key)
      if (ab) {
        this.sceneManager.removeEffect(ab.getEffect())
        this.activeAbilities.delete(key)
        this.lastSeenTime.delete(key)
      }
    }
    this.clearMergeBeam()

    const factory = this.registry.get(GestureType.HANDS_MERGED)
    if (!factory) return

    const purple = factory()
    this.activeAbilities.set(GestureType.HANDS_MERGED, purple)
    this.sceneManager.addEffect(purple.getEffect())
    purple.onSpawn({ x: 0.5, y: 0.5, z: 0 })
    this.soundManager.play('purple')
    this.logEvent('MERGE → Hollow Purple')
    this.pinchHeldFrames = 0
    this.pinchWasHeld    = false
    this.normPinchHistory = []
  }

  private handleFlick(): void {
    const purple = this.activeAbilities.get(GestureType.HANDS_MERGED)
    if (!purple) return

    this.activeAbilities.delete(GestureType.HANDS_MERGED)
    this.lastSeenTime.delete(GestureType.HANDS_MERGED)
    this.pinchHeldFrames  = 0
    this.pinchWasHeld     = false
    this.normPinchHistory = []
    this.lastFlickTime    = performance.now()

    const shootColor = purple.config.color.clone()
    const shootGlow  = purple.config.glowColor.clone()

    const shootEffect = new ShootEffect(shootColor, shootGlow, true)
    shootEffect.setPosition(purple.getEffect().getObject3D().position.clone())
    shootEffect.setVelocity(new THREE.Vector3(0, 0, 0))
    shootEffect.spawn()
    this.sceneManager.addEffect(shootEffect)
    this.projectiles.push(shootEffect)

    this.sceneManager.removeEffect(purple.getEffect())
    this.soundManager.play('shoot')
    this.logEvent('FLICK → SHOOT!')
    this.postShootBlockUntil = performance.now() + POST_SHOOT_BLOCK_MS
  }

  update(deltaTime: number): void {
    // ── Domain expansion takes over everything ──
    if (this.domainActive) {
      this.domainTimer += deltaTime
      if (this.domainTimer >= DOMAIN_DURATION_S) {
        this.deactivateDomain()
      }
      // Still tick projectiles in case any were in-flight before domain
      for (let i = this.projectiles.length - 1; i >= 0; i--) {
        const proj = this.projectiles[i]
        proj.update(deltaTime)
        if (proj.isExpired()) {
          this.sceneManager.removeEffect(proj)
          this.projectiles.splice(i, 1)
        }
      }
      return
    }

    this.updateMerge(deltaTime)

    const purple = this.activeAbilities.get(GestureType.HANDS_MERGED)

    if (purple && purple.state === AbilityState.IDLE && this.latestHands.length > 0) {
      const lm = this.latestHands[0].landmarks
      const pinch = getPinchMidpoint(lm)
      const anchor = { x: pinch.x, y: pinch.y - 0.06, z: pinch.z }
      purple.onIdle(anchor, this.sceneManager.landmarkToWorld(anchor))
      this.lastSeenTime.set(GestureType.HANDS_MERGED, performance.now())

      // ── Normalized pinch flick detection ──
      const rawNorm = getNormalizedPinchDistance(lm)

      // 3-frame moving average to smooth MediaPipe jitter
      this.normPinchHistory.push(rawNorm)
      if (this.normPinchHistory.length > 3) this.normPinchHistory.shift()
      const normPinch = this.normPinchHistory.reduce((s, v) => s + v, 0) / this.normPinchHistory.length

      // Velocity = change per second
      const velocity = deltaTime > 0 ? (normPinch - this.prevNormPinch) / deltaTime : 0
      this.prevNormPinch = normPinch
      this.lastNormPinch = normPinch
      this.lastVelocity  = velocity

      const inCooldown = performance.now() < this.lastFlickTime + FLICK_COOLDOWN_MS

      if (!inCooldown) {
        if (normPinch < PINCH_THRESHOLD) {
          this.pinchHeldFrames = Math.min(this.pinchHeldFrames + 1, 60)
          if (this.pinchHeldFrames >= MIN_PINCH_FRAMES) this.pinchWasHeld = true
        } else if (normPinch > OPEN_THRESHOLD && this.pinchWasHeld && velocity > FLICK_VELOCITY) {
          this.logEvent(`flick detected v=${velocity.toFixed(2)}`)
          this.handleFlick()
          return
        } else if (normPinch > OPEN_THRESHOLD) {
          // Slowly release without fast motion → reset pinch
          this.pinchHeldFrames = 0
          this.pinchWasHeld    = false
        }
      }

      ;(purple.getEffect() as HollowPurpleEffect).setFlickReady(this.pinchWasHeld)
    } else if (!purple) {
      this.pinchHeldFrames  = 0
      this.pinchWasHeld     = false
      this.normPinchHistory = []
      this.prevNormPinch    = 0
    }

    for (const [, ability] of this.activeAbilities) {
      ability.update(deltaTime)
    }

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i]
      proj.update(deltaTime)
      if (proj.isExpired()) {
        this.sceneManager.removeEffect(proj)
        this.projectiles.splice(i, 1)
      }
    }
  }

  removeAbilitiesForMissingHands(detectedGestures: Set<GestureType>): void {
    if (this.domainActive) return  // domain blocks all ability tracking
    const now = performance.now()
    for (const [type, ability] of this.activeAbilities) {
      if (type === GestureType.HANDS_MERGED) continue
      if (detectedGestures.has(type)) {
        this.lastSeenTime.set(type, now)
        continue
      }
      const lastSeen = this.lastSeenTime.get(type) ?? 0
      if (now - lastSeen > GRACE_PERIOD_MS && ability.state === AbilityState.IDLE) {
        ability.onDissipate()
        this.sceneManager.removeEffect(ability.getEffect())
        this.activeAbilities.delete(type)
        this.lastSeenTime.delete(type)
        this.logEvent(`dissipate:${type}`)
      }
    }
  }
}
