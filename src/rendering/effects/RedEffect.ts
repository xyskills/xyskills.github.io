import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'
import { StreamLines } from '../StreamLines'
import vertexShader from '../shaders/energy-ball.vert.glsl'
import fragmentShader from '../shaders/energy-ball.frag.glsl'

export class RedEffect extends EffectRenderer {
  private coreMesh: THREE.Mesh
  private coreMat:  THREE.ShaderMaterial
  private rimGlow:        THREE.Sprite
  private redAura:        THREE.Sprite
  private atmosphere:     THREE.Sprite
  private darkWash:       THREE.Sprite
  // Energy flowing inward toward the pull point
  private innerFlow: StreamLines
  private outerFlow: StreamLines
  private time = 0
  private targetOpacity  = 1
  private currentOpacity = 0

  constructor() {
    super()
    this.distortionType = -1
    this.distortionStrength = 0

    // Dark void sphere — very dark center, pure red rim
    this.coreMat = new THREE.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: {
        uTime:              { value: 0 },
        uColor:             { value: new THREE.Color(0.32, 0.0, 0.0) },   // dark crimson center
        uGlowColor:         { value: new THREE.Color(1.0,  0.0, 0.0) },   // pure red rim
        uOpacity:           { value: 0 },
        uCenterDarkness:    { value: 0.92 },  // near-void center
        uIntensity:         { value: 4.8 },
        uDisplacementScale: { value: 0.30 },  // subtle — stays recognisably spherical
      },
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    })
    this.coreMesh = new THREE.Mesh(new THREE.SphereGeometry(0.22, 64, 64), this.coreMat)
    this.group.add(this.coreMesh)

    // Layered red atmosphere — creates the blood-red aura from the reference image
    this.rimGlow    = this.makeGlow(new THREE.Color(1.0,  0.08, 0.0), 0.32)   // hot rim, tight
    this.redAura    = this.makeGlow(new THREE.Color(0.90, 0.0,  0.0), 0.85)   // medium red aura
    this.atmosphere = this.makeGlow(new THREE.Color(0.55, 0.0,  0.0), 2.00)   // wide red wash
    this.darkWash   = this.makeGlow(new THREE.Color(0.22, 0.0,  0.0), 3.80)   // massive dark-red fill
    for (const s of [this.rimGlow, this.redAura, this.atmosphere, this.darkWash]) {
      this.group.add(s)
    }

    // Spiralling energy drawn toward the orb — curved, dramatic
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

  private makeGlow(color: THREE.Color, scale: number): THREE.Sprite {
    const s = 256
    const cv = document.createElement('canvas'); cv.width = s; cv.height = s
    const ctx = cv.getContext('2d')!
    const g = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2)
    const [r, gv, b] = [color.r, color.g, color.b].map(v => Math.floor(v * 255))
    g.addColorStop(0,    `rgba(${r},${gv},${b},1)`)
    g.addColorStop(0.15, `rgba(${r},${gv},${b},0.80)`)
    g.addColorStop(0.40, `rgba(${r},${gv},${b},0.35)`)
    g.addColorStop(0.70, `rgba(${r},${gv},${b},0.08)`)
    g.addColorStop(1,    'rgba(0,0,0,0)')
    ctx.fillStyle = g; ctx.fillRect(0, 0, s, s)
    const mat = new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(cv), transparent: true,
      blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0,
    })
    const sp = new THREE.Sprite(mat)
    sp.scale.set(scale, scale, 1)
    return sp
  }

  spawn(): void { this.targetOpacity = 1; this.currentOpacity = 0 }

  update(dt: number): void {
    this.time += dt
    this.coreMat.uniforms.uTime.value = this.time
    this.currentOpacity += (this.targetOpacity - this.currentOpacity) * Math.min(dt * 4, 1)
    this.coreMat.uniforms.uOpacity.value = this.currentOpacity
    this.distortionStrength = this.currentOpacity * 0.10

    const op = this.currentOpacity

    // Subtle menacing pulse
    this.coreMesh.scale.setScalar(1 + 0.025 * Math.sin(this.time * 7))

    // Glow opacities — wide atmosphere fills surrounding area with red
    ;(this.rimGlow.material    as THREE.SpriteMaterial).opacity = op * (0.65 + 0.15 * Math.sin(this.time * 5))
    ;(this.redAura.material    as THREE.SpriteMaterial).opacity = op * 0.55
    ;(this.atmosphere.material as THREE.SpriteMaterial).opacity = op * 0.30
    ;(this.darkWash.material   as THREE.SpriteMaterial).opacity = op * 0.14

    this.innerFlow.setOpacity(op * 0.50)
    this.outerFlow.setOpacity(op * 0.32)
    this.innerFlow.update(dt)
    this.outerFlow.update(dt)
  }

  setPosition(pos: THREE.Vector3): void { this.group.position.copy(pos) }

  async dissipate(): Promise<void> {
    this.targetOpacity = 0
    await new Promise<void>(res => {
      const c = () => this.currentOpacity < 0.01 ? res() : requestAnimationFrame(c); c()
    })
  }

  dispose(): void {
    this.coreMesh.geometry.dispose(); this.coreMat.dispose()
    this.innerFlow.dispose(); this.outerFlow.dispose()
    for (const s of [this.rimGlow, this.redAura, this.atmosphere, this.darkWash]) {
      ;(s.material as THREE.SpriteMaterial).map?.dispose()
      ;(s.material as THREE.SpriteMaterial).dispose()
    }
  }
}
