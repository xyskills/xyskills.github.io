import * as THREE from 'three'
import { EffectRenderer, EffectPhase } from './EffectRenderer'
import { StreamLines } from '../StreamLines'
import vertexShader from '../shaders/energy-ball.vert.glsl'
import fragmentShader from '../shaders/energy-ball.frag.glsl'

/**
 * Blue orb — Cursed Technique Lapse: Blue.
 *
 * Spawn:   elastic pop from zero (gravitational singularity snapping into existence)
 * Idle:    gentle breathing pulse, inward energy flow, electric sparks
 * Dissipate: rapid implosion — collapses to a point and vanishes (gravity reclaims it)
 */

class SparkArc {
  readonly line: THREE.Line
  private positions: Float32Array
  fireTimer = 0
  cooldown  = Math.random() * 0.8

  constructor(color: THREE.Color) {
    const segs = 8
    this.positions = new Float32Array(segs * 3)
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(this.positions, 3))
    const mat = new THREE.LineBasicMaterial({
      color, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })
    this.line = new THREE.Line(geom, mat)
  }

  regenerate(): void {
    const angle  = Math.random() * Math.PI * 2
    const startR = 0.22 + Math.random() * 0.06
    const len    = 0.15 + Math.random() * 0.30
    const dx = Math.cos(angle), dy = Math.sin(angle)
    const px = -dy,             py = dx
    for (let i = 0; i < 8; i++) {
      const t = i / 7
      const r = startR + t * len
      const j = (Math.random() - 0.5) * 0.08 * Math.sin(t * Math.PI)
      this.positions[i * 3]     = dx * r + px * j
      this.positions[i * 3 + 1] = dy * r + py * j
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

export class BlueEffect extends EffectRenderer {
  private coreMesh: THREE.Mesh
  private coreMat:  THREE.ShaderMaterial
  private coreBlue:   THREE.Sprite
  private midBlue:    THREE.Sprite
  private outerBlue:  THREE.Sprite
  private atmosphere: THREE.Sprite
  private sparks: SparkArc[]
  private innerFlow: StreamLines
  private outerFlow: StreamLines
  private time = 0
  private depthScale = 1.0

  protected override spawnDur     = 0.55  // elastic animation needs time to play
  protected override dissipateDur = 0.35  // snappy implosion

  constructor() {
    super()
    this.distortionType = 1
    this.distortionStrength = 0

    this.coreMat = new THREE.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: {
        uTime:              { value: 0 },
        uColor:             { value: new THREE.Color(0.0, 0.08, 0.70) },
        uGlowColor:         { value: new THREE.Color(0.25, 0.65, 1.0) },
        uOpacity:           { value: 0 },
        uCenterDarkness:    { value: 0.50 },
        uIntensity:         { value: 4.5 },
        uDisplacementScale: { value: 0.55 },
      },
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    })
    this.coreMesh = new THREE.Mesh(new THREE.SphereGeometry(0.24, 64, 64), this.coreMat)
    this.group.add(this.coreMesh)

    this.coreBlue   = EffectRenderer.makeGlowSprite(new THREE.Color(0.20, 0.55, 1.0),  0.35)
    this.midBlue    = EffectRenderer.makeGlowSprite(new THREE.Color(0.08, 0.35, 0.95), 0.75)
    this.outerBlue  = EffectRenderer.makeGlowSprite(new THREE.Color(0.03, 0.18, 0.70), 1.40)
    this.atmosphere = EffectRenderer.makeGlowSprite(new THREE.Color(0.01, 0.06, 0.35), 2.60)
    for (const s of [this.coreBlue, this.midBlue, this.outerBlue, this.atmosphere]) {
      this.group.add(s)
    }

    this.sparks = []
    for (let i = 0; i < 10; i++) {
      const col = i < 4
        ? new THREE.Color(0.75, 0.95, 1.0)
        : new THREE.Color(0.25, 0.60, 1.0)
      const sp = new SparkArc(col)
      this.sparks.push(sp)
      this.group.add(sp.line)
    }

    this.innerFlow = new StreamLines({
      count: 65, color: new THREE.Color(0.20, 0.60, 1.0),
      speed: 0.55, radius: 0.55, lineLength: 0.25, opacity: 0.42, direction: 'inward',
    })
    this.outerFlow = new StreamLines({
      count: 45, color: new THREE.Color(0.08, 0.35, 0.85),
      speed: 0.40, radius: 0.95, lineLength: 0.35, opacity: 0.28, direction: 'inward',
    })
    this.group.add(this.innerFlow.getObject3D())
    this.group.add(this.outerFlow.getObject3D())
  }

  override spawn(): void {
    super.spawn()
    this.time = 0
  }

  update(dt: number): void {
    this.tickPhase(dt)
    this.time += dt
    this.coreMat.uniforms.uTime.value = this.time

    const sT = this.spawnT
    const dT = this.dissipateT

    // ── Scale envelope ──
    // Spawn: elastic pop from zero — singularity snaps into existence with overshoot
    // Dissipate: hard implosion — collapses rapidly to a point
    const spawnScale     = EffectRenderer.easeOutElastic(sT)
    const dissipateScale = 1 - 0.97 * EffectRenderer.easeIn(dT, 1.6)
    this.group.scale.setScalar(Math.max(0.001, spawnScale * dissipateScale * this.depthScale))

    // Idle breathing on just the sphere
    this.coreMesh.scale.setScalar(1 + 0.025 * Math.sin(this.time * 5))

    // ── Opacity envelope ──
    // Fast appear (most opacity gained in first 30% of spawn), rapid fade on dissipate
    const appear    = EffectRenderer.easeOut(sT, 0.35)
    const disappear = 1 - EffectRenderer.easeIn(dT, 0.7)
    const op        = appear * disappear

    // Brief spawn flash — bright white flare at birth that extinguishes quickly
    const spawnFlash = Math.max(0, 1 - sT * 5)

    this.coreMat.uniforms.uOpacity.value = op
    this.distortionStrength = op * 0.10

    ;(this.coreBlue.material   as THREE.SpriteMaterial).opacity = op * Math.min(0.60 + spawnFlash * 0.5, 1)
    ;(this.midBlue.material    as THREE.SpriteMaterial).opacity = op * Math.min(0.45 + spawnFlash * 0.3, 1)
    ;(this.outerBlue.material  as THREE.SpriteMaterial).opacity = op * 0.30
    ;(this.atmosphere.material as THREE.SpriteMaterial).opacity = op * 0.14

    // Sparks only fire once fully spawned (no sparks mid-implosion)
    const sparksOp = this.phase === EffectPhase.IDLE ? op : 0
    for (const sp of this.sparks) {
      if (sp.fireTimer > 0) {
        sp.fireTimer -= dt
        sp.regenerate()
        sp.setOpacity(sparksOp * (0.55 + Math.random() * 0.45))
      } else {
        sp.setOpacity(0)
        sp.cooldown -= dt
        if (sp.cooldown <= 0 && Math.random() < 0.16) {
          sp.fireTimer = 0.04 + Math.random() * 0.07
          sp.cooldown  = 0.10 + Math.random() * 0.45
          sp.regenerate()
        }
      }
    }

    this.innerFlow.setOpacity(op * 0.42)
    this.outerFlow.setOpacity(op * 0.28)
    this.innerFlow.update(dt)
    this.outerFlow.update(dt)
  }

  setPosition(pos: THREE.Vector3): void { this.group.position.copy(pos) }
  override setScale(s: number): void { this.depthScale = s }

  dispose(): void {
    this.coreMesh.geometry.dispose()
    this.coreMat.dispose()
    this.innerFlow.dispose()
    this.outerFlow.dispose()
    for (const s of this.sparks) s.dispose()
    for (const sp of [this.coreBlue, this.midBlue, this.outerBlue, this.atmosphere]) {
      ;(sp.material as THREE.SpriteMaterial).map?.dispose()
      ;(sp.material as THREE.SpriteMaterial).dispose()
    }
  }
}
