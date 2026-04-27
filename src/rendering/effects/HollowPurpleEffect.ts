import * as THREE from 'three'
import { EffectRenderer, EffectPhase } from './EffectRenderer'
import { StreamLines } from '../StreamLines'

// Thick ribbon bolt — real quad geometry, not 1px lines
class ThickBolt {
  readonly mesh: THREE.Mesh
  private posAttr: THREE.Float32BufferAttribute
  private readonly pts: number
  fireTimer = 0
  cooldown  = Math.random() * 2.0
  angle     = 0
  length    = 0

  constructor(pts: number, color: THREE.Color) {
    this.pts = pts
    // pts path points → (pts-1) quad segments → (pts-1)*6 indices, pts*2 verts
    const verts = new Float32Array(pts * 2 * 3)
    const idx: number[] = []
    for (let i = 0; i < pts - 1; i++) {
      const b = i * 2
      idx.push(b, b + 2, b + 1, b + 2, b + 3, b + 1)
    }
    const geom = new THREE.BufferGeometry()
    this.posAttr = new THREE.Float32BufferAttribute(verts, 3)
    geom.setAttribute('position', this.posAttr)
    geom.setIndex(idx)
    const mat = new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    })
    this.mesh = new THREE.Mesh(geom, mat)
  }

  regenerate(jitter: number, width: number): void {
    const dx = Math.cos(this.angle), dy = Math.sin(this.angle)
    const nx = -dy, ny = dx     // perpendicular to bolt direction
    const hw = width * 0.5

    for (let i = 0; i < this.pts; i++) {
      const t  = i / (this.pts - 1)
      const d  = (t - 0.5) * this.length
      const j  = (Math.random() - 0.5) * jitter * Math.sin(t * Math.PI)
      const cx = dx * d + nx * j
      const cy = dy * d + ny * j
      const b  = i * 6
      // left vertex
      this.posAttr.array[b + 0] = cx + nx * hw
      this.posAttr.array[b + 1] = cy + ny * hw
      this.posAttr.array[b + 2] = 0
      // right vertex
      this.posAttr.array[b + 3] = cx - nx * hw
      this.posAttr.array[b + 4] = cy - ny * hw
      this.posAttr.array[b + 5] = 0
    }
    this.posAttr.needsUpdate = true
  }

  setOpacity(o: number): void {
    ;(this.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, Math.min(1, o))
  }

  dispose(): void {
    this.mesh.geometry.dispose()
    ;(this.mesh.material as THREE.Material).dispose()
  }
}

// Thin 1px jitter line — background shimmer
class ThinBolt {
  readonly line: THREE.Line
  private positions: Float32Array
  private readonly segments: number
  fireTimer = 0
  cooldown  = Math.random() * 2.0
  angle     = 0
  length    = 0

  constructor(segments: number, color: THREE.Color) {
    this.segments = segments
    this.positions = new Float32Array(segments * 3)
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(this.positions, 3))
    const mat = new THREE.LineBasicMaterial({
      color, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })
    this.line = new THREE.Line(geom, mat)
  }

  regenerate(jitter: number): void {
    const dx = Math.cos(this.angle), dy = Math.sin(this.angle)
    const px = -dy, py = dx
    for (let i = 0; i < this.segments; i++) {
      const t = i / (this.segments - 1)
      const d = (t - 0.5) * this.length
      const j = (Math.random() - 0.5) * jitter * Math.sin(t * Math.PI)
      this.positions[i * 3]     = dx * d + px * j
      this.positions[i * 3 + 1] = dy * d + py * j
      this.positions[i * 3 + 2] = 0
    }
    this.line.geometry.attributes.position.needsUpdate = true
  }

  setOpacity(o: number): void {
    ;(this.line.material as THREE.LineBasicMaterial).opacity = Math.max(0, Math.min(1, o))
  }

  dispose(): void {
    this.line.geometry.dispose()
    ;(this.line.material as THREE.Material).dispose()
  }
}

export class HollowPurpleEffect extends EffectRenderer {
  private thickBolts: ThickBolt[]     // main dramatic thick ribbon bolts
  private thinBolts: ThinBolt[]       // background shimmer lines
  private fieldLines: StreamLines
  private whiteCore: THREE.Sprite
  private purpleCore: THREE.Sprite
  private innerGlow: THREE.Sprite
  private outerGlow: THREE.Sprite

  private time = 0
  private flickReady = false
  private flashIntensity = 0
  private depthScale = 1.0

  protected override spawnDur     = 0.70  // slow energy build-up
  protected override dissipateDur = 0.50  // dramatic chaos + fade

  constructor() {
    super()
    this.distortionType = 0
    this.distortionStrength = 0
    this.darkenBackground = true

    this.thickBolts = []
    this.thinBolts  = []

    // --- 4 thick white-hot ribbon bolts: the main dramatic strikes ---
    const thickWhiteColors = [
      new THREE.Color(1.0,  0.95, 1.0),
      new THREE.Color(1.0,  0.95, 1.0),
      new THREE.Color(0.88, 0.50, 1.0),
      new THREE.Color(0.88, 0.50, 1.0),
    ]
    for (const col of thickWhiteColors) {
      const b = new ThickBolt(14, col)
      b.angle   = Math.random() * Math.PI
      b.length  = 4.0 + Math.random() * 2.0
      b.cooldown = 0.4 + Math.random() * 1.2
      this.thickBolts.push(b)
      this.group.add(b.mesh)
    }

    // --- 3 thick deep-purple ribbon bolts: slower, longer, dramatic ---
    for (let i = 0; i < 3; i++) {
      const b = new ThickBolt(18, new THREE.Color(0.60, 0.05, 1.0))
      b.angle   = Math.random() * Math.PI * 2
      b.length  = 5.0 + Math.random() * 2.5
      b.cooldown = 1.0 + Math.random() * 2.0
      this.thickBolts.push(b)
      this.group.add(b.mesh)
    }

    // --- 8 thin bright shimmer lines ---
    for (let i = 0; i < 8; i++) {
      const b = new ThinBolt(10, new THREE.Color(0.95, 0.75, 1.0))
      b.angle   = (i / 8) * Math.PI
      b.length  = 3.5 + Math.random() * 1.5
      b.cooldown = Math.random() * 1.5
      this.thinBolts.push(b)
      this.group.add(b.line)
    }

    // --- 12 thin deep-purple arcs ---
    for (let i = 0; i < 12; i++) {
      const color = i < 6
        ? new THREE.Color(0.88, 0.35, 1.0)
        : new THREE.Color(0.55, 0.05, 1.0)
      const b = new ThinBolt(16, color)
      b.angle   = Math.random() * Math.PI * 2
      b.length  = 4.5 + Math.random() * 2.5
      b.cooldown = Math.random() * 2.5
      this.thinBolts.push(b)
      this.group.add(b.line)
    }

    this.fieldLines = new StreamLines({
      count: 55, color: new THREE.Color(0.75, 0.25, 1.0),
      speed: 0.50, radius: 0.12, lineLength: 0.05, opacity: 0.55, direction: 'orbital',
    })
    this.group.add(this.fieldLines.getObject3D())

    this.whiteCore  = EffectRenderer.makeGlowSprite(new THREE.Color(1.0,  0.97, 1.0),  0.35)
    this.purpleCore = EffectRenderer.makeGlowSprite(new THREE.Color(0.80, 0.15, 1.0),  0.80)
    this.innerGlow  = EffectRenderer.makeGlowSprite(new THREE.Color(0.55, 0.02, 0.90), 1.50)
    this.outerGlow  = EffectRenderer.makeGlowSprite(new THREE.Color(0.22, 0.0,  0.55), 2.80)
    for (const s of [this.whiteCore, this.purpleCore, this.innerGlow, this.outerGlow]) {
      this.group.add(s)
    }
  }

  setFlickReady(ready: boolean): void { this.flickReady = ready }

  override spawn(): void {
    super.spawn()
    this.time = 0
    this.flickReady = false
    this.flashIntensity = 0
  }

  override beginDissipate(): void {
    super.beginDissipate()
    this.darkenBackground = false  // stop darkness/flicker the moment it's shot
    this.flashIntensity   = 0
  }

  update(dt: number): void {
    this.tickPhase(dt)
    this.time += dt

    const sT = this.spawnT
    const dT = this.dissipateT

    this.flashIntensity = Math.max(0, this.flashIntensity - dt * 4)

    const charged = this.flickReady

    // ── Scale envelope ──
    // Spawn: easeOutBack overshoot — coalesces with slight overreach then settles
    // Dissipate: expands outward as the energy disperses
    const spawnScale     = EffectRenderer.easeOutBack(sT, 1.2)
    const dissipateScale = 1 + 0.6 * EffectRenderer.easeIn(dT, 0.8)
    this.group.scale.setScalar(Math.max(0.001, spawnScale * dissipateScale * this.depthScale))

    // ── Opacity envelope ──
    const appear    = EffectRenderer.easeOut(sT, 0.6)
    const disappear = 1 - EffectRenderer.easeIn(dT, 0.9)
    const op        = appear * disappear

    // During spawn: slightly boosted activity as energy builds
    const spawnBoltMul    = this.phase === EffectPhase.SPAWNING ? 1.0 + (1 - sT) * 0.8 : 1.0
    // During dissipate: no new bolts fire — just fade out gracefully
    const dissipateBoltMul = this.phase === EffectPhase.DISSIPATING ? 0 : 1.0
    const activityMul = spawnBoltMul * dissipateBoltMul

    // --- Thick bolts ---
    for (let i = 0; i < 4; i++) {
      const b = this.thickBolts[i]
      if (b.fireTimer > 0) {
        b.fireTimer -= dt
        b.regenerate(charged ? 0.16 : 0.10, 0.018 + Math.random() * 0.008)
        b.setOpacity(op * 0.85 * (charged ? 1.3 : 1.0))
      } else {
        b.setOpacity(0)
        b.cooldown -= dt
        const chance = (charged ? 0.18 : 0.08) * activityMul
        if (b.cooldown <= 0 && Math.random() < chance) {
          b.angle    = Math.random() * Math.PI
          b.length   = 4.0 + Math.random() * 2.5
          b.fireTimer = (charged ? 0.14 : 0.10) * (0.5 + Math.random())
          b.cooldown  = 0.3 + Math.random() * 1.0
          b.regenerate(0.10, 0.018)
        }
      }
    }

    for (let i = 4; i < 7; i++) {
      const b = this.thickBolts[i]
      if (b.fireTimer > 0) {
        b.fireTimer -= dt
        b.regenerate(charged ? 0.30 : 0.20, 0.014 + Math.random() * 0.006)
        b.setOpacity(op * 0.75 * (charged ? 1.2 : 1.0))
      } else {
        b.setOpacity(0)
        b.cooldown -= dt
        const chance = (charged ? 0.10 : 0.04) * activityMul
        if (b.cooldown <= 0 && Math.random() < chance) {
          b.angle    = Math.random() * Math.PI * 2
          b.length   = charged ? 6.0 + Math.random() * 2.0 : 5.0 + Math.random() * 2.0
          b.fireTimer = (charged ? 0.22 : 0.16) * (0.6 + Math.random() * 0.4)
          b.cooldown  = 0.6 + Math.random() * 2.0
          b.regenerate(0.20, 0.014)
          this.flashIntensity = Math.min(1, this.flashIntensity + 0.50)
        }
      }
    }

    const brightFire     = (charged ? 0.16 : 0.07) * activityMul
    const brightDuration = charged ? 0.16 : 0.10
    for (let i = 0; i < 8; i++) {
      const b = this.thinBolts[i]
      if (b.fireTimer > 0) {
        b.fireTimer -= dt
        b.regenerate(charged ? 0.12 : 0.08)
        b.setOpacity(op * 0.80 * (charged ? 1.3 : 1.0))
      } else {
        b.setOpacity(0)
        b.cooldown -= dt
        if (b.cooldown <= 0 && Math.random() < brightFire) {
          b.angle    = Math.random() * Math.PI
          b.length   = 3.5 + Math.random() * 1.5
          b.fireTimer = brightDuration * (0.5 + Math.random() * 0.5)
          b.cooldown  = 0.2 + Math.random() * 1.0
          b.regenerate(0.08)
        }
      }
    }

    const deepFire = (charged ? 0.10 : 0.04) * activityMul
    for (let i = 8; i < this.thinBolts.length; i++) {
      const b = this.thinBolts[i]
      if (b.fireTimer > 0) {
        b.fireTimer -= dt
        b.regenerate(charged ? 0.28 : 0.18)
        b.setOpacity(op * Math.min(0.80 * (charged ? 1.25 : 1.0), 1.0))
      } else {
        b.setOpacity(0)
        b.cooldown -= dt
        if (b.cooldown <= 0 && Math.random() < deepFire) {
          b.angle    = Math.random() * Math.PI * 2
          b.length   = charged ? 5.5 + Math.random() * 2.0 : 4.5 + Math.random() * 2.0
          b.fireTimer = (charged ? 0.24 : 0.16) * (0.6 + Math.random() * 0.4)
          b.cooldown  = 0.4 + Math.random() * 2.0
          b.regenerate(0.18)
        }
      }
    }

    this.fieldLines.setOpacity(op * (charged ? 0.72 : 0.50))
    this.fieldLines.update(dt)

    const whitePulse = 0.55 + 0.30 * Math.sin(this.time * 6.5) + this.flashIntensity * 0.5
    const chargedMul = charged ? 1.4 : 1.0
    ;(this.whiteCore.material  as THREE.SpriteMaterial).opacity = op * Math.min(whitePulse * chargedMul, 1.0)
    ;(this.purpleCore.material as THREE.SpriteMaterial).opacity = op * (0.82 + this.flashIntensity * 0.28) * chargedMul
    ;(this.innerGlow.material  as THREE.SpriteMaterial).opacity = op * (0.68 + this.flashIntensity * 0.22) * chargedMul
    ;(this.outerGlow.material  as THREE.SpriteMaterial).opacity = op * (0.38 + this.flashIntensity * 0.12) * chargedMul
  }

  setPosition(pos: THREE.Vector3): void { this.group.position.copy(pos) }
  override setScale(s: number): void { this.depthScale = s }

  dispose(): void {
    for (const b of this.thickBolts) b.dispose()
    for (const b of this.thinBolts)  b.dispose()
    this.fieldLines.dispose()
    for (const s of [this.whiteCore, this.purpleCore, this.innerGlow, this.outerGlow]) {
      ;(s.material as THREE.SpriteMaterial).map?.dispose()
      ;(s.material as THREE.SpriteMaterial).dispose()
    }
  }
}
