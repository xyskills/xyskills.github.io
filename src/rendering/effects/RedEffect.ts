import * as THREE from 'three'
import { EffectRenderer, EffectPhase } from './EffectRenderer'
import { StreamLines } from '../StreamLines'
import vertexShader from '../shaders/energy-ball.vert.glsl'
import fragmentShader from '../shaders/energy-ball.frag.glsl'

/**
 * Red orb — Cursed Technique Reversal: Red.
 *
 * Spawn:    slam-in — materialises huge and smashes inward to size (reversal: repels itself into existence)
 * Idle:     menacing pulse, spiralling energy, deep red atmosphere
 * Dissipate: explosive burst outward — repulsion energy releases violently
 */
export class RedEffect extends EffectRenderer {
  private coreMesh: THREE.Mesh
  private coreMat:  THREE.ShaderMaterial
  private rimGlow:    THREE.Sprite
  private redAura:    THREE.Sprite
  private atmosphere: THREE.Sprite
  private darkWash:   THREE.Sprite
  private innerFlow: StreamLines
  private outerFlow: StreamLines
  private time = 0

  protected override spawnDur     = 0.38  // fast slam-in
  protected override dissipateDur = 0.32  // violent burst

  constructor() {
    super()
    this.distortionType = -1
    this.distortionStrength = 0

    this.coreMat = new THREE.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: {
        uTime:              { value: 0 },
        uColor:             { value: new THREE.Color(0.32, 0.0, 0.0) },
        uGlowColor:         { value: new THREE.Color(1.0,  0.0, 0.0) },
        uOpacity:           { value: 0 },
        uCenterDarkness:    { value: 0.92 },
        uIntensity:         { value: 4.8 },
        uDisplacementScale: { value: 0.30 },
      },
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    })
    this.coreMesh = new THREE.Mesh(new THREE.SphereGeometry(0.22, 64, 64), this.coreMat)
    this.group.add(this.coreMesh)

    this.rimGlow    = EffectRenderer.makeGlowSprite(new THREE.Color(1.0,  0.08, 0.0), 0.32)
    this.redAura    = EffectRenderer.makeGlowSprite(new THREE.Color(0.90, 0.0,  0.0), 0.85)
    this.atmosphere = EffectRenderer.makeGlowSprite(new THREE.Color(0.55, 0.0,  0.0), 2.00)
    this.darkWash   = EffectRenderer.makeGlowSprite(new THREE.Color(0.22, 0.0,  0.0), 3.80)
    for (const s of [this.rimGlow, this.redAura, this.atmosphere, this.darkWash]) {
      this.group.add(s)
    }

    this.innerFlow = new StreamLines({
      count: 90, color: new THREE.Color(1.0, 0.06, 0.0),
      speed: 0.70, radius: 0.55, lineLength: 0.32, opacity: 0.55, direction: 'spiral',
    })
    this.outerFlow = new StreamLines({
      count: 60, color: new THREE.Color(0.65, 0.0, 0.0),
      speed: 0.50, radius: 1.10, lineLength: 0.45, opacity: 0.35, direction: 'spiral',
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
    // Spawn: starts at 2.5x and slams inward — easeOutBack makes it slightly undershoot
    //        then snap back, giving a physical weight to the impact
    // Dissipate: explodes outward — repulsion energy violently releases
    const spawnScale     = THREE.MathUtils.lerp(2.5, 1.0, EffectRenderer.easeOutBack(sT, 1.4))
    const dissipateScale = 1 + 1.8 * EffectRenderer.easeIn(dT, 0.5)
    this.group.scale.setScalar(Math.max(0.001, spawnScale * dissipateScale))

    // Idle menacing pulse
    this.coreMesh.scale.setScalar(1 + 0.025 * Math.sin(this.time * 7))

    // ── Opacity envelope ──
    // Spawn: near-instant — snaps in with the impact (suits "reversal" — it just appears)
    // Dissipate: fast fade as it explodes outward
    const appear    = EffectRenderer.easeOut(sT, 0.2)  // very fast appear
    const disappear = 1 - EffectRenderer.easeIn(dT, 0.6)
    const op        = appear * disappear

    this.coreMat.uniforms.uOpacity.value = op
    this.distortionStrength = op * 0.10

    ;(this.rimGlow.material    as THREE.SpriteMaterial).opacity = op * (0.65 + 0.15 * Math.sin(this.time * 5))
    ;(this.redAura.material    as THREE.SpriteMaterial).opacity = op * 0.55
    ;(this.atmosphere.material as THREE.SpriteMaterial).opacity = op * 0.30
    ;(this.darkWash.material   as THREE.SpriteMaterial).opacity = op * 0.14

    // Streams only in idle — no spirals mid-explosion
    const flowOp = this.phase === EffectPhase.DISSIPATING ? 0 : op
    this.innerFlow.setOpacity(flowOp * 0.50)
    this.outerFlow.setOpacity(flowOp * 0.32)
    this.innerFlow.update(dt)
    this.outerFlow.update(dt)
  }

  setPosition(pos: THREE.Vector3): void { this.group.position.copy(pos) }

  dispose(): void {
    this.coreMesh.geometry.dispose()
    this.coreMat.dispose()
    this.innerFlow.dispose()
    this.outerFlow.dispose()
    for (const s of [this.rimGlow, this.redAura, this.atmosphere, this.darkWash]) {
      ;(s.material as THREE.SpriteMaterial).map?.dispose()
      ;(s.material as THREE.SpriteMaterial).dispose()
    }
  }
}
