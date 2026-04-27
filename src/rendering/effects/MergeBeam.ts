import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'

interface StreamParticle {
  pos: THREE.Vector3
  vel: THREE.Vector3
  life: number
  maxLife: number
  color: THREE.Color
  isClash: boolean   // spawned at the boundary, not from an orb
}

export class MergeBeam extends EffectRenderer {
  private blueGlow:   THREE.Sprite
  private redGlow:    THREE.Sprite
  private midGlow:    THREE.Sprite
  private clashGlow:  THREE.Sprite   // bright strobe at the fighting edge
  private clashRing:  THREE.Sprite   // wide soft halo at boundary

  private particles: StreamParticle[] = []
  private particleGeom: THREE.BufferGeometry
  private particleMesh: THREE.Points

  private start = new THREE.Vector3()
  private end   = new THREE.Vector3()
  private intensity = 0
  private time = 0
  private clashFlash = 0

  private readonly MAX_PARTICLES = 400

  constructor() {
    super()

    this.blueGlow  = EffectRenderer.makeGlowSprite(new THREE.Color(0.25, 0.65, 1.0),  0.40)
    this.redGlow   = EffectRenderer.makeGlowSprite(new THREE.Color(1.00, 0.08, 0.0),  0.40)
    this.midGlow   = EffectRenderer.makeGlowSprite(new THREE.Color(0.65, 0.10, 0.90), 0.50)
    this.clashRing = EffectRenderer.makeGlowSprite(new THREE.Color(1.00, 0.80, 0.90), 0.70)
    this.clashGlow = EffectRenderer.makeGlowSprite(new THREE.Color(1.00, 0.96, 1.00), 0.25)

    for (const s of [this.midGlow, this.clashRing, this.clashGlow, this.blueGlow, this.redGlow]) {
      this.group.add(s)
    }

    const maxP = this.MAX_PARTICLES
    this.particleGeom = new THREE.BufferGeometry()
    this.particleGeom.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(maxP * 3), 3))
    this.particleGeom.setAttribute('color',    new THREE.Float32BufferAttribute(new Float32Array(maxP * 3), 3))
    this.particleGeom.setAttribute('size',     new THREE.Float32BufferAttribute(new Float32Array(maxP),     1))

    this.particleMesh = new THREE.Points(this.particleGeom, new THREE.PointsMaterial({
      size: 0.016, vertexColors: true, transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: false,
    }))
    this.group.add(this.particleMesh)
  }

  setEndpoints(start: THREE.Vector3, end: THREE.Vector3, intensity: number): void {
    this.start.copy(start)
    this.end.copy(end)
    this.intensity = Math.max(0, Math.min(1, intensity))
  }

  update(dt: number): void {
    this.time += dt
    const I = this.intensity
    if (I <= 0) return

    const mid  = this.start.clone().add(this.end).multiplyScalar(0.5)
    // Axis from blue → red, and perpendicular (the clash plane)
    const axis = this.end.clone().sub(this.start)
    const axisLen = axis.length()
    if (axisLen < 0.001) return
    axis.divideScalar(axisLen)
    const perp = new THREE.Vector3(-axis.y, axis.x, 0)

    // ── Orb-streaming particles: blue and red flow toward clash boundary ──
    const streamCount = Math.floor(I * 10)
    for (let i = 0; i < streamCount && this.particles.length < this.MAX_PARTICLES; i++) {
      const fromBlue = Math.random() < 0.5
      const origin   = fromBlue ? this.start.clone() : this.end.clone()

      // Spread around orb surface
      const spread = 0.03 + (1 - I) * 0.05
      origin.x += (Math.random() - 0.5) * spread
      origin.y += (Math.random() - 0.5) * spread

      // Drive toward the boundary (midpoint), not past it
      const toMid = mid.clone().sub(origin).normalize()
      const speed = 0.20 + I * 0.30 + Math.random() * 0.15
      const swirl = (Math.random() - 0.5) * 0.12 * I

      this.particles.push({
        pos: origin,
        vel: new THREE.Vector3(
          toMid.x * speed + perp.x * swirl,
          toMid.y * speed + perp.y * swirl,
          0,
        ),
        life: 0,
        maxLife: 0.25 + Math.random() * 0.40,
        color: fromBlue
          ? new THREE.Color(0.15 + Math.random() * 0.2, 0.55 + Math.random() * 0.3, 1.0)
          : new THREE.Color(1.0, 0.08 + Math.random() * 0.18, 0.02),
        isClash: false,
      })
    }

    // ── Clash-edge particles: spawn at the boundary, shoot PERPENDICULAR ──
    // These represent the neutralization — energy repelled sideways from the contact edge
    const clashCount = Math.floor(I * I * 18)
    for (let i = 0; i < clashCount && this.particles.length < this.MAX_PARTICLES; i++) {
      // Spawn right at the midpoint boundary with perpendicular spread
      const clashOrigin = mid.clone()
      clashOrigin.x += perp.x * (Math.random() - 0.5) * 0.06
      clashOrigin.y += perp.y * (Math.random() - 0.5) * 0.06

      // Shoot outward perpendicular to the orb axis — like sparks off a grinder edge
      const perpSign  = Math.random() < 0.5 ? 1 : -1
      const clashSpeed = 0.25 + I * 0.55 + Math.random() * 0.30
      // Small axis-direction kick so some fly back toward their source
      const backKick  = (Math.random() - 0.5) * 0.15

      // Color: mix of blue+red → hot white/pink at the boundary
      const mixT = Math.random()
      const clashColor = new THREE.Color(
        0.8 + mixT * 0.2,
        0.3 * (1 - mixT),
        0.6 + (1 - mixT) * 0.4,
      )

      this.particles.push({
        pos: clashOrigin,
        vel: new THREE.Vector3(
          perp.x * perpSign * clashSpeed + axis.x * backKick,
          perp.y * perpSign * clashSpeed + axis.y * backKick,
          0,
        ),
        life: 0,
        maxLife: 0.12 + Math.random() * 0.22,
        color: clashColor,
        isClash: true,
      })
    }

    // ── Update all particles ──
    const posArr  = this.particleGeom.attributes.position.array as Float32Array
    const colArr  = this.particleGeom.attributes.color.array as Float32Array
    const sizeArr = this.particleGeom.attributes.size.array as Float32Array

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i]
      p.life += dt
      if (p.life >= p.maxLife) { this.particles.splice(i, 1); continue }

      if (!p.isClash) {
        // Stream particles: pulled toward midpoint, stop at boundary
        const toMid = mid.clone().sub(p.pos)
        const toMidLen = toMid.length()
        if (toMidLen > 0.01) {
          const pull = toMid.normalize().multiplyScalar(dt * (0.3 + (p.life / p.maxLife) * 0.6) * I)
          p.vel.add(pull)
          // Prevent crossing the midpoint — check if we'd overshoot
          const dotAxis = p.pos.clone().sub(mid).dot(axis)
          const fromBlueHalf = p.color.b > 0.5   // blue particles stay on blue side
          if (fromBlueHalf && dotAxis > 0.01) {
            // Blue particle crossed to red side — bounce it back
            p.vel.x -= axis.x * p.vel.dot(axis) * 1.8
            p.vel.y -= axis.y * p.vel.dot(axis) * 1.8
          } else if (!fromBlueHalf && dotAxis < -0.01) {
            p.vel.x -= axis.x * p.vel.dot(axis) * 1.8
            p.vel.y -= axis.y * p.vel.dot(axis) * 1.8
          }
        }
        p.vel.multiplyScalar(0.94)
      } else {
        // Clash particles: decelerate quickly, drift outward
        p.vel.multiplyScalar(0.88)
      }

      p.pos.add(p.vel.clone().multiplyScalar(dt))
    }

    const alive = this.particles.length
    for (let i = 0; i < this.MAX_PARTICLES; i++) {
      if (i < alive) {
        const p = this.particles[i]
        const t = p.life / p.maxLife
        const fade = t < 0.1 ? t / 0.1 : t > 0.65 ? (1 - t) / 0.35 : 1
        posArr[i * 3]     = p.pos.x
        posArr[i * 3 + 1] = p.pos.y
        posArr[i * 3 + 2] = 0
        colArr[i * 3]     = p.color.r * fade
        colArr[i * 3 + 1] = p.color.g * fade
        colArr[i * 3 + 2] = p.color.b * fade
        sizeArr[i] = p.isClash
          ? 0.006 + fade * 0.018 * I
          : 0.007 + fade * 0.012 * (1 + I * 0.4)
      } else {
        posArr[i * 3] = posArr[i * 3 + 1] = posArr[i * 3 + 2] = 0
        colArr[i * 3] = colArr[i * 3 + 1] = colArr[i * 3 + 2] = 0
        sizeArr[i] = 0
      }
    }
    this.particleGeom.attributes.position.needsUpdate = true
    this.particleGeom.attributes.color.needsUpdate    = true
    this.particleGeom.attributes.size.needsUpdate     = true
    this.particleGeom.setDrawRange(0, alive)

    // ── Glow sprites ──
    const bloom = I * I

    ;(this.blueGlow.material as THREE.SpriteMaterial).opacity = I * 0.65
    this.blueGlow.scale.setScalar(0.22 + I * 0.28)
    this.blueGlow.position.copy(this.start)

    ;(this.redGlow.material as THREE.SpriteMaterial).opacity = I * 0.65
    this.redGlow.scale.setScalar(0.22 + I * 0.28)
    this.redGlow.position.copy(this.end)

    // Purple midpoint bloom — only when very close
    ;(this.midGlow.material as THREE.SpriteMaterial).opacity = bloom * 0.75
    this.midGlow.scale.setScalar(0.12 + bloom * 0.55)
    this.midGlow.position.copy(mid)

    // Fighting-edge strobe: rapid random flash at the boundary
    this.clashFlash = Math.max(0, this.clashFlash - dt * 8)
    if (I > 0.35 && Math.random() < I * 0.45) {
      this.clashFlash = 0.55 + Math.random() * 0.55
    }
    const edgeFlash = this.clashFlash * I

    // Wide soft ring showing the clash plane
    ;(this.clashRing.material as THREE.SpriteMaterial).opacity = bloom * 0.55 + edgeFlash * 0.30
    this.clashRing.scale.setScalar(0.06 + bloom * 0.28 + edgeFlash * 0.12)
    this.clashRing.position.copy(mid)

    // Tight bright strobe at contact point
    ;(this.clashGlow.material as THREE.SpriteMaterial).opacity = edgeFlash * 0.95
    this.clashGlow.scale.setScalar(0.05 + edgeFlash * 0.20)
    this.clashGlow.position.copy(mid)
  }

  spawn(): void  { this.group.visible = true }
  async dissipate(): Promise<void> { this.group.visible = false }
  setPosition(_pos: THREE.Vector3): void { /* tracks endpoints */ }

  dispose(): void {
    for (const s of [this.blueGlow, this.redGlow, this.midGlow, this.clashRing, this.clashGlow]) {
      ;(s.material as THREE.SpriteMaterial).map?.dispose()
      ;(s.material as THREE.SpriteMaterial).dispose()
    }
    this.particleGeom.dispose()
    ;(this.particleMesh.material as THREE.Material).dispose()
  }
}
