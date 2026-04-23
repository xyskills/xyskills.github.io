import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'
import { StreamLines } from '../StreamLines'
import vertexShader from '../shaders/energy-ball.vert.glsl'
import fragmentShader from '../shaders/energy-ball.frag.glsl'

// Short electric discharge arc — the "bright spots"
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
  // Blue-dominant glow layers
  private coreBlue:   THREE.Sprite
  private midBlue:    THREE.Sprite
  private outerBlue:  THREE.Sprite
  private atmosphere: THREE.Sprite
  private sparks: SparkArc[]
  // Energy flowing inward toward the orb
  private innerFlow: StreamLines
  private outerFlow: StreamLines
  private time = 0
  private targetOpacity  = 1
  private currentOpacity = 0

  constructor() {
    super()
    this.distortionType = 1
    this.distortionStrength = 0

    // Blue-dominant sphere — darker center, blue color, not white-hot
    this.coreMat = new THREE.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: {
        uTime:              { value: 0 },
        uColor:             { value: new THREE.Color(0.0, 0.08, 0.70) },   // deep blue
        uGlowColor:         { value: new THREE.Color(0.25, 0.65, 1.0) },   // blue rim, not cyan-white
        uOpacity:           { value: 0 },
        uCenterDarkness:    { value: 0.50 },   // darker blue center, not white
        uIntensity:         { value: 4.5 },
        uDisplacementScale: { value: 0.55 },
      },
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    })
    this.coreMesh = new THREE.Mesh(new THREE.SphereGeometry(0.24, 64, 64), this.coreMat)
    this.group.add(this.coreMesh)

    // Blue-toned glow layers — no white, just blue shades
    this.coreBlue   = this.makeGlow(new THREE.Color(0.20, 0.55, 1.0),  0.35)   // bright blue core
    this.midBlue    = this.makeGlow(new THREE.Color(0.08, 0.35, 0.95), 0.75)   // medium blue
    this.outerBlue  = this.makeGlow(new THREE.Color(0.03, 0.18, 0.70), 1.40)   // wide blue glow
    this.atmosphere = this.makeGlow(new THREE.Color(0.01, 0.06, 0.35), 2.60)   // deep blue atmosphere
    for (const s of [this.coreBlue, this.midBlue, this.outerBlue, this.atmosphere]) {
      this.group.add(s)
    }

    // Electric sparks — these are the "bright spots" that pop against the darker blue
    this.sparks = []
    for (let i = 0; i < 10; i++) {
      const col = i < 4
        ? new THREE.Color(0.75, 0.95, 1.0)   // bright white-cyan highlights
        : new THREE.Color(0.25, 0.60, 1.0)   // blue sparks
      const sp = new SparkArc(col)
      this.sparks.push(sp)
      this.group.add(sp.line)
    }

    // Energy flowing inward toward the orb
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

  private makeGlow(color: THREE.Color, scale: number): THREE.Sprite {
    const s = 256
    const cv = document.createElement('canvas'); cv.width = s; cv.height = s
    const ctx = cv.getContext('2d')!
    const g = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2)
    const [r, gv, b] = [color.r, color.g, color.b].map(v => Math.floor(v * 255))
    g.addColorStop(0,    `rgba(${r},${gv},${b},1)`)
    g.addColorStop(0.15, `rgba(${r},${gv},${b},0.75)`)
    g.addColorStop(0.40, `rgba(${r},${gv},${b},0.30)`)
    g.addColorStop(0.70, `rgba(${r},${gv},${b},0.07)`)
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

    this.coreMesh.scale.setScalar(1 + 0.025 * Math.sin(this.time * 5))

    // Blue glow layers — darker overall
    ;(this.coreBlue.material   as THREE.SpriteMaterial).opacity = op * 0.60
    ;(this.midBlue.material    as THREE.SpriteMaterial).opacity = op * 0.45
    ;(this.outerBlue.material  as THREE.SpriteMaterial).opacity = op * 0.30
    ;(this.atmosphere.material as THREE.SpriteMaterial).opacity = op * 0.14

    // Bright-spot sparks — the occasional highlights that pop
    for (const sp of this.sparks) {
      if (sp.fireTimer > 0) {
        sp.fireTimer -= dt
        sp.regenerate()
        sp.setOpacity(op * (0.55 + Math.random() * 0.45))
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

    // Inward energy flow
    this.innerFlow.setOpacity(op * 0.42)
    this.outerFlow.setOpacity(op * 0.28)
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
    for (const s of this.sparks) s.dispose()
    for (const sp of [this.coreBlue, this.midBlue, this.outerBlue, this.atmosphere]) {
      ;(sp.material as THREE.SpriteMaterial).map?.dispose()
      ;(sp.material as THREE.SpriteMaterial).dispose()
    }
  }
}
