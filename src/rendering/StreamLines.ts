import * as THREE from 'three'

export interface StreamLinesConfig {
  count: number
  color: THREE.Color
  speed: number
  radius: number
  lineLength: number
  opacity: number
  direction: 'inward' | 'outward' | 'orbital' | 'spiral'
}

export class StreamLines {
  private geom: THREE.BufferGeometry
  private mat: THREE.LineBasicMaterial
  private mesh: THREE.LineSegments
  private pos: Float32Array   // count * 6 (head xyz, tail xyz)
  private vel: Float32Array   // count * 3
  private life: Float32Array
  private maxLife: Float32Array
  private config: StreamLinesConfig

  constructor(config: StreamLinesConfig) {
    this.config = config
    const n = config.count
    this.pos = new Float32Array(n * 6)
    this.vel = new Float32Array(n * 3)
    this.life = new Float32Array(n)
    this.maxLife = new Float32Array(n)

    for (let i = 0; i < n; i++) this.reset(i, true)

    this.geom = new THREE.BufferGeometry()
    this.geom.setAttribute('position', new THREE.BufferAttribute(this.pos, 3))

    this.mat = new THREE.LineBasicMaterial({
      color: config.color,
      transparent: true,
      opacity: config.opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    this.mesh = new THREE.LineSegments(this.geom, this.mat)
  }

  private reset(i: number, randomOffset = false): void {
    const cfg = this.config
    const theta = Math.random() * Math.PI * 2
    const r = cfg.radius * (0.8 + Math.random() * 0.2)
    const x = Math.cos(theta) * r
    const y = Math.sin(theta) * r
    const z = (Math.random() - 0.5) * r * 0.15
    const mag = Math.sqrt(x * x + y * y + z * z)
    const speed = cfg.speed * (0.6 + Math.random() * 0.4)

    let vx = 0, vy = 0, vz = 0
    if (cfg.direction === 'inward') {
      vx = -x / mag * speed; vy = -y / mag * speed; vz = -z / mag * speed
    } else if (cfg.direction === 'outward') {
      vx = x / mag * speed; vy = y / mag * speed; vz = z / mag * speed
    } else if (cfg.direction === 'spiral') {
      // Inward pull + tangential swirl = beautiful vortex curving into center
      const inward = 0.55
      const swirl  = 0.90
      const rawVx = (-x / mag * inward) + (-Math.sin(theta) * swirl)
      const rawVy = (-y / mag * inward) + ( Math.cos(theta) * swirl)
      const vMag  = Math.sqrt(rawVx * rawVx + rawVy * rawVy)
      vx = rawVx / vMag * speed
      vy = rawVy / vMag * speed
      vz = 0
    } else {
      // orbital — tangential in XY
      vx = -Math.sin(theta) * speed; vy = Math.cos(theta) * speed; vz = 0
    }

    this.pos[i * 6 + 0] = x
    this.pos[i * 6 + 1] = y
    this.pos[i * 6 + 2] = z
    const vMag = Math.sqrt(vx * vx + vy * vy + vz * vz)
    const t = cfg.lineLength / vMag
    this.pos[i * 6 + 3] = x - vx * t
    this.pos[i * 6 + 4] = y - vy * t
    this.pos[i * 6 + 5] = z - vz * t

    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz

    const ml = 0.5 + Math.random() * 0.7
    this.maxLife[i] = ml
    this.life[i] = randomOffset ? Math.random() * ml : ml
  }

  update(dt: number): void {
    for (let i = 0; i < this.config.count; i++) {
      this.life[i] -= dt
      if (this.life[i] <= 0) { this.reset(i); continue }

      this.pos[i * 6] += this.vel[i * 3] * dt
      this.pos[i * 6 + 1] += this.vel[i * 3 + 1] * dt
      this.pos[i * 6 + 2] += this.vel[i * 3 + 2] * dt

      const vx = this.vel[i * 3], vy = this.vel[i * 3 + 1], vz = this.vel[i * 3 + 2]
      const vMag = Math.sqrt(vx * vx + vy * vy + vz * vz)
      const t = this.config.lineLength / vMag
      this.pos[i * 6 + 3] = this.pos[i * 6] - vx * t
      this.pos[i * 6 + 4] = this.pos[i * 6 + 1] - vy * t
      this.pos[i * 6 + 5] = this.pos[i * 6 + 2] - vz * t
    }
    this.geom.attributes.position.needsUpdate = true
  }

  setOpacity(o: number): void { this.mat.opacity = Math.max(0, Math.min(1, o)) }
  getObject3D(): THREE.LineSegments { return this.mesh }
  dispose(): void { this.geom.dispose(); this.mat.dispose() }
}
