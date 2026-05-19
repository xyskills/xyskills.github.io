import * as THREE from 'three'
import type { EventBus } from './EventBus'
import type { SceneManager } from '@/rendering/SceneManager'
import type { Ability } from './abilities/Ability'
import { OrbAbility } from './abilities/OrbAbility'
import { AbilityState } from '@/types/ability'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { HandLandmark } from '@/types/hand'
import { ShootEffect } from '@/rendering/effects/ShootEffect'
import { HollowPurpleEffect } from '@/rendering/effects/HollowPurpleEffect'
import { InfiniteVoidEffect } from '@/rendering/effects/InfiniteVoidEffect'
import { MergeBeam } from '@/rendering/effects/MergeBeam'
import { ChargeIndicator } from '@/rendering/effects/ChargeIndicator'
import { SoundManager } from '@/core/SoundManager'
import type { EventLog } from '@/core/EventLog'
import type { CrossedFingersGesture } from './gestures/CrossedFingersGesture'
import type { ForceField } from '@/rendering/ForceField'
import {
  getNormalizedPinchDistance,
  getHandByType, getHighestFingerTip,
} from '@/utils/landmark-utils'

const GRACE_PERIOD_MS     = 700
const POST_SHOOT_BLOCK_MS = 2800
const FLICK_COOLDOWN_MS   = 400
const DOMAIN_DURATION_S   = 10.0   // seconds the Infinite Void stays active

// ── Normalized pinch flick detection ──
const PINCH_THRESHOLD  = 0.28
const OPEN_THRESHOLD   = 0.50
const MIN_PINCH_FRAMES = 3      // frames of closed pinch required before a flick counts

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
  domainHoldProgress: number  // 0..1 — how far through the 2-finger hold gesture
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

  // Pre-spawn charge indicators (one per hand side)
  private chargeBlue: ChargeIndicator
  private chargeRed:  ChargeIndicator

  // Domain expansion state
  private domainActive = false
  private domainEffect: InfiniteVoidEffect | null = null
  private domainTimer  = 0

  // Debug event log (last 8)
  private debugEvents: { label: string; t: number }[] = []

  // Optional event log for offline composite
  private eventLog: EventLog | null = null

  // Reference to CrossedFingersGesture so we can toggle its domain mode
  private domainGesture: CrossedFingersGesture | null = null

  private readonly ATTRACTION_RANGE = 2.2
  private readonly MERGE_TOUCH_DIST = 0.28  // must nearly overlap before fusing
  private readonly MERGE_HOLD_TIME  = 0.9

  constructor(eventBus: EventBus, sceneManager: SceneManager) {
    this.eventBus = eventBus
    this.sceneManager = sceneManager
    this.soundManager = new SoundManager()

    this.chargeBlue = new ChargeIndicator(new THREE.Color(0.20, 0.55, 1.0))
    this.chargeRed  = new ChargeIndicator(new THREE.Color(1.0,  0.08, 0.0))
    this.sceneManager.addEffect(this.chargeBlue)
    this.sceneManager.addEffect(this.chargeRed)

    this.eventBus.on('gestureDetected', (event) => this.onGesture(event))
    this.eventBus.on('handUpdate', (hands) => { this.latestHands = hands })
  }

  addAnimation(gestureTrigger: GestureType, abilityFactory: () => Ability): void {
    this.registry.set(gestureTrigger, abilityFactory)
  }

  /** Pass the CrossedFingersGesture so AbilityManager can toggle its enter/exit mode. */
  setDomainGesture(g: CrossedFingersGesture): void { this.domainGesture = g }

  setEventLog(log: EventLog | null): void { this.eventLog = log }

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
      domainActive:      this.domainActive,
      domainProgress:    this.domainActive ? Math.min(this.domainTimer / DOMAIN_DURATION_S, 1) : 0,
      domainHoldProgress: this.domainGesture?.getHoldProgress() ?? 0,
    }
  }

  private logEvent(label: string): void {
    // Skip consecutive duplicate labels
    if (this.debugEvents.length > 0 && this.debugEvents[0].label === label) return
    this.debugEvents.unshift({ label, t: performance.now() })
    if (this.debugEvents.length > 8) this.debugEvents.pop()
  }

  private onGesture(event: GestureEvent): void {

    if (event.type === GestureType.FINGER_FLICK_LEFT || event.type === GestureType.FINGER_FLICK_RIGHT) {
      this.handleFlick(event)
      return
    }

    if (event.type === GestureType.DOMAIN_EXPANSION) {
      this.activateDomain()
      return
    }

    if (event.type === GestureType.DOMAIN_EXIT) {
      this.deactivateDomain()
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
    this.domainGesture?.setDomainActive(true)

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
    this.soundManager.haptic([200, 60, 200, 60, 300])
    this.eventLog?.logDomain(true)
    this.logEvent('DOMAIN EXPANSION: Infinite Void')
  }

  private deactivateDomain(): void {
    if (!this.domainActive) return
    this.domainGesture?.setDomainActive(false)
    if (this.domainEffect) {
      this.sceneManager.removeEffect(this.domainEffect)
      this.domainEffect = null
    }
    this.domainActive = false
    this.domainTimer  = 0
    this.eventLog?.logDomain(false)
    this.logEvent('Domain: dissipated')
  }

  private handleAbilityGesture(event: GestureEvent): void {
    const factory = this.registry.get(event.type)
    if (!factory || !event.anchorPosition) return

    this.lastSeenTime.set(event.type, performance.now())

    const handedness = event.type === GestureType.LEFT_HAND_RAISED ? 'Left' : 'Right'
    const hand = getHandByType(this.latestHands, handedness)
    let anchorPoint = event.anchorPosition
    if (hand) {
      const tip = getHighestFingerTip(hand.landmarks)
      anchorPoint = { x: tip.x, y: tip.y - 0.07, z: tip.z }
    }

    // Charging: show buildup indicator, don't spawn yet
    const indicator = event.type === GestureType.LEFT_HAND_RAISED ? this.chargeBlue : this.chargeRed
    if (event.charging) {
      const worldPos = this.sceneManager.landmarkToWorld(anchorPoint)
      indicator.setCharge(event.confidence)
      indicator.setPosition(worldPos)
      return
    }
    // Full spawn: hide the charge indicator
    indicator.setCharge(0)

    let ability = this.activeAbilities.get(event.type)
    const worldPos = this.sceneManager.landmarkToWorld(anchorPoint)

    if (!ability) {
      ability = factory()
      this.activeAbilities.set(event.type, ability)
      this.sceneManager.addEffect(ability.getEffect())
      ability.onSpawn(anchorPoint)

      if (event.type === GestureType.LEFT_HAND_RAISED) {
        this.soundManager.play('blue')
        this.soundManager.haptic([60])
        this.eventLog?.logSpawn('blue', anchorPoint.x, anchorPoint.y, anchorPoint.z ?? 0)
        this.logEvent('SPAWN Blue')
      } else if (event.type === GestureType.RIGHT_HAND_RAISED) {
        this.soundManager.play('red')
        this.soundManager.haptic([60])
        this.eventLog?.logSpawn('red', anchorPoint.x, anchorPoint.y, anchorPoint.z ?? 0)
        this.logEvent('SPAWN Red')
      }
    }

    // Depth-aware scaling: wrist z is negative when hand is close, positive when far
    // Map z ≈ [-0.2, +0.1] → scale [1.4, 0.65]
    let depthScale = 1.0
    if (hand) {
      const wristZ = hand.landmarks[HandLandmark.WRIST].z
      depthScale = Math.max(0.5, Math.min(1.6, 1.0 - wristZ * 4.0))
    }

    if (event.type === GestureType.LEFT_HAND_RAISED) {
      this.eventLog?.logPosition('blue', anchorPoint.x, anchorPoint.y, anchorPoint.z ?? 0, depthScale)
    } else if (event.type === GestureType.RIGHT_HAND_RAISED) {
      this.eventLog?.logPosition('red', anchorPoint.x, anchorPoint.y, anchorPoint.z ?? 0, depthScale)
    }

    ability.onIdle(anchorPoint, worldPos, depthScale)
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
      this.sceneManager.killEffect(this.mergeBeam)
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
    this.soundManager.haptic([100, 40, 100])
    this.eventLog?.logSpawn('purple', 0.5, 0.5, 0)
    this.logEvent('MERGE → Hollow Purple')
    this.pinchHeldFrames = 0
    this.pinchWasHeld    = false
    this.normPinchHistory = []
  }

  private handleFlick(event?: GestureEvent): void {
    // Purple always takes priority — the pinch+flick gesture fires purple
    const purple = this.activeAbilities.get(GestureType.HANDS_MERGED)
    if (purple) {
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
      this.sceneManager.clearDarkState()
      this.soundManager.play('shoot')
      this.soundManager.haptic([80])
      this.eventLog?.logDissipate('purple')
      this.eventLog?.logShoot(0.5, 0.5)
      this.logEvent('FLICK → SHOOT!')
      this.postShootBlockUntil = performance.now() + POST_SHOOT_BLOCK_MS
      return
    }

    // Individual Blue / Red shoot: flick while holding a single orb launches it
    if (!event || performance.now() < this.postShootBlockUntil) return
    const abilityType = event.type === GestureType.FINGER_FLICK_LEFT
      ? GestureType.LEFT_HAND_RAISED
      : GestureType.RIGHT_HAND_RAISED
    const ability = this.activeAbilities.get(abilityType)
    if (!ability || ability.state !== AbilityState.IDLE) return

    this.activeAbilities.delete(abilityType)
    this.lastSeenTime.delete(abilityType)
    this.lastFlickTime = performance.now()

    const shootColor = ability.config.color.clone()
    const shootGlow  = ability.config.glowColor.clone()

    const shootEffect = new ShootEffect(shootColor, shootGlow, false)
    shootEffect.setPosition(ability.getEffect().getObject3D().position.clone())
    shootEffect.setVelocity(new THREE.Vector3(0, 0, 0))
    shootEffect.spawn()
    this.sceneManager.addEffect(shootEffect)
    this.projectiles.push(shootEffect)

    this.sceneManager.removeEffect(ability.getEffect())
    this.soundManager.play('shoot')
    this.soundManager.haptic([80])
    const label = abilityType === GestureType.LEFT_HAND_RAISED ? 'blue' : 'red'
    this.eventLog?.logDissipate(label)
    this.logEvent(`FLICK → SHOOT ${label.toUpperCase()}!`)
    this.postShootBlockUntil = performance.now() + 1000  // shorter cooldown than purple
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
        if (proj.isExpired()) {
          this.sceneManager.killEffect(proj)
          this.projectiles.splice(i, 1)
        }
      }
      return
    }

    this.updateMerge(deltaTime)

    const purple = this.activeAbilities.get(GestureType.HANDS_MERGED)

    if (purple && purple.state === AbilityState.IDLE && this.latestHands.length > 0) {
      // Average both hands' fingertip positions + wrist depths for accurate purple tracking
      let ax = 0, ay = 0, az = 0, wz = 0
      for (const hand of this.latestHands) {
        const tip = getHighestFingerTip(hand.landmarks)
        ax += tip.x; ay += tip.y; az += (tip.z ?? 0)
        wz += hand.landmarks[HandLandmark.WRIST].z
      }
      const n = this.latestHands.length
      const anchor = { x: ax / n, y: ay / n - 0.06, z: az / n }
      const purpleDepth = Math.max(0.5, Math.min(1.6, 1.0 - (wz / n) * 4.0))
      purple.onIdle(anchor, this.sceneManager.landmarkToWorld(anchor), purpleDepth)
      this.lastSeenTime.set(GestureType.HANDS_MERGED, performance.now())

      // ── Normalized pinch flick detection (use first available hand) ──
      const rawNorm = getNormalizedPinchDistance(this.latestHands[0].landmarks)

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
        } else if (normPinch > OPEN_THRESHOLD && this.pinchWasHeld) {
          // Held pinch then opened past threshold — that's the flick, no velocity gate needed
          this.logEvent(`flick v=${velocity.toFixed(2)}`)
          this.handleFlick()
          return
        } else if (normPinch > OPEN_THRESHOLD) {
          // Opened without holding — reset
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

    // Collect force fields from active OrbAbilities → push to debris physics
    const fields: ForceField[] = []
    for (const [, ability] of this.activeAbilities) {
      ability.update(deltaTime)
      if (ability instanceof OrbAbility) {
        const ff = ability.getForceField()
        if (ff) fields.push(ff)
      }
    }
    this.sceneManager.setForceFields(fields)

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i]
      // effect.update() is called by SceneManager — only check expiry here
      if (proj.isExpired()) {
        this.sceneManager.killEffect(proj)
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
        // removeEffect triggers the dissipate animation; effect auto-disposes when done
        this.sceneManager.removeEffect(ability.getEffect())
        this.activeAbilities.delete(type)
        this.lastSeenTime.delete(type)
        if (type === GestureType.LEFT_HAND_RAISED)  this.eventLog?.logDissipate('blue')
        if (type === GestureType.RIGHT_HAND_RAISED) this.eventLog?.logDissipate('red')
        this.logEvent(`dissipate:${type}`)
      }
    }
    // Reset charge indicators for any hand not currently gesturing
    for (const type of [GestureType.LEFT_HAND_RAISED, GestureType.RIGHT_HAND_RAISED]) {
      if (!detectedGestures.has(type) && !this.activeAbilities.has(type)) {
        const ind = type === GestureType.LEFT_HAND_RAISED ? this.chargeBlue : this.chargeRed
        ind.setCharge(0)
      }
    }
  }
}
