import * as THREE from 'three'
import type { ForceField } from './ForceField'

const PARTICLE_COUNT  = 80
const RETURN_STRENGTH = 0.8    // spring pull back to base position (units/s²)
const DRAG            = 0.92   // velocity multiplier per frame (exponential decay)
const MAX_SPEED       = 3.5    // clamp velocity magnitude (units/s)

interface Particle {
  pos:     THREE.Vector3
  vel:     THREE.Vector3
  basePos: THREE.Vector3
  phase:   number   // random phase offset for gentle idle drift
}

/**
 * 80 small glowing debris particles drifting in the scene.
 * Blue orbs attract them; Red orbs repel them.
 * Particles drift back to their base positions when no forces act.
 */
export class AmbientDebris {
  private readonly particles: Particle[]
  private readonly geom:      THREE.BufferGeometry
  private readonly points:    THREE.Points
  private readonly posAttr:   THREE.Float32BufferAttribute
  private readonly colAttr:   THREE.Float32BufferAttribute
  private time = 0

  constructor(frustumWidth: number, frustumHeight: number) {
    this.particles = []

    const posArr = new Float32Array(PARTICLE_COUNT * 3)
    const colArr = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * frustumWidth  * 0.85
      const y = (Math.random() - 0.5) * frustumHeight * 0.85
      const base = new THREE.Vector3(x, y, 0)
      this.particles.push({
        pos:     base.clone(),
        vel:     new THREE.Vector3(),
        basePos: base,
        phase:   Math.random() * Math.PI * 2,
      })
      posArr[i * 3]     = x
      posArr[i * 3 + 1] = y
      posArr[i * 3 + 2] = 0

      // Neutral colour: soft blue-white mix
      const t = Math.random()
      colArr[i * 3]     = 0.4 + t * 0.3
      colArr[i * 3 + 1] = 0.5 + t * 0.2
      colArr[i * 3 + 2] = 0.8 + t * 0.2
    }

    this.posAttr = new THREE.Float32BufferAttribute(posArr, 3)
    this.colAttr = new THREE.Float32BufferAttribute(colArr, 3)

    this.geom = new THREE.BufferGeometry()
    this.geom.setAttribute('position', this.posAttr)
    this.geom.setAttribute('color',    this.colAttr)

    this.points = new THREE.Points(this.geom, new THREE.PointsMaterial({
      size:          0.022,
      vertexColors:  true,
      transparent:   true,
      opacity:       0.28,
      blending:      THREE.AdditiveBlending,
      depthWrite:    false,
      sizeAttenuation: true,
    }))
  }

  getObject3D(): THREE.Points { return this.points }

  update(dt: number, fields: ForceField[]): void {
    this.time += dt
    const hasPurple = fields.length > 1   // rough proxy: both Blue + Red active = purple forming

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = this.particles[i]

      // Gentle idle drift (sine-based) — makes the scene feel alive
      const driftAmp = 0.03
      const driftX = Math.sin(this.time * 0.6 + p.phase) * driftAmp
      const driftY = Math.cos(this.time * 0.5 + p.phase * 1.3) * driftAmp
      p.vel.x += driftX * dt
      p.vel.y += driftY * dt

      // Force field contribution
      let anyField = false
      for (const field of fields) {
        const dx    = field.position.x - p.pos.x
        const dy    = field.position.y - p.pos.y
        const dist  = Math.sqrt(dx * dx + dy * dy)
        if (dist > field.radius || dist < 0.001) continue

        anyField = true
        const falloff = 1 - dist / field.radius           // linear falloff, 1 at centre
        const accel   = field.sign * field.strength * falloff * dt
        p.vel.x += (dx / dist) * accel
        p.vel.y += (dy / dist) * accel
      }

      // Spring return to base when no forces pulling
      if (!anyField) {
        const bx    = p.basePos.x - p.pos.x
        const by    = p.basePos.y - p.pos.y
        p.vel.x += bx * RETURN_STRENGTH * dt
        p.vel.y += by * RETURN_STRENGTH * dt
      }

      // Drag + speed clamp
      p.vel.multiplyScalar(DRAG)
      const spd = p.vel.length()
      if (spd > MAX_SPEED) p.vel.multiplyScalar(MAX_SPEED / spd)

      // Euler integrate
      p.pos.x += p.vel.x * dt
      p.pos.y += p.vel.y * dt

      // Update buffer
      this.posAttr.array[i * 3]     = p.pos.x
      this.posAttr.array[i * 3 + 1] = p.pos.y
      this.posAttr.array[i * 3 + 2] = 0

      // Colour shift: blue field → cyan, red field → orange, purple forming → white
      let cr = 0.4, cg = 0.5, cb = 0.9
      if (hasPurple) {
        cr = 0.85; cg = 0.7; cb = 1.0
      } else if (fields.length === 1) {
        if (fields[0].sign === 1) {        // Blue attract
          cr = 0.2; cg = 0.6; cb = 1.0
        } else {                           // Red repel
          cr = 1.0; cg = 0.3; cb = 0.15
        }
      }
      // Interpolate toward target colour — smooth transition
      const t = Math.min(dt * 3, 1)
      this.colAttr.array[i * 3]     += (cr - this.colAttr.array[i * 3])     * t
      this.colAttr.array[i * 3 + 1] += (cg - this.colAttr.array[i * 3 + 1]) * t
      this.colAttr.array[i * 3 + 2] += (cb - this.colAttr.array[i * 3 + 2]) * t
    }

    this.posAttr.needsUpdate = true
    this.colAttr.needsUpdate = true

    // Opacity scales with how many fields are active
    ;(this.points.material as THREE.PointsMaterial).opacity =
      fields.length === 0 ? 0.18 : 0.28 + fields.length * 0.08
  }

  dispose(): void {
    this.geom.dispose()
    ;(this.points.material as THREE.Material).dispose()
  }
}
