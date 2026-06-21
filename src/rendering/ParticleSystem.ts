import * as THREE from 'three'

export interface ParticleConfig {
  count: number
  color: THREE.Color
  size: number
  speed: number
  radius: number
  direction: 'inward' | 'outward' | 'orbital'
  opacity: number
  sizeVariation?: number
  speedVariation?: number
}

export class ParticleSystem {
  private geometry: THREE.BufferGeometry
  private material: THREE.PointsMaterial
  private points: THREE.Points
  private particleCount: number
  private positions: Float32Array
  private velocities: Float32Array
  private lifetimes: Float32Array
  private config: ParticleConfig

  constructor(config: ParticleConfig) {
    this.config = config
    this.particleCount = config.count
    this.positions = new Float32Array(this.particleCount * 3)
    this.velocities = new Float32Array(this.particleCount * 3)
    this.lifetimes = new Float32Array(this.particleCount)

    this.initializeParticles()

    this.geometry = new THREE.BufferGeometry()
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3))

    this.material = new THREE.PointsMaterial({
      color: config.color,
      size: config.size,
      transparent: true,
      opacity: config.opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })

    this.points = new THREE.Points(this.geometry, this.material)
  }

  private initializeParticles(): void {
    for (let i = 0; i < this.particleCount; i++) {
      this.resetParticle(i)
    }
  }

  private resetParticle(index: number): void {
    const i3 = index * 3
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const sizeVar = this.config.sizeVariation ?? 0.5
    const r = this.config.radius * (sizeVar + Math.random() * (1 - sizeVar))

    this.positions[i3] = Math.sin(phi) * Math.cos(theta) * r
    this.positions[i3 + 1] = Math.sin(phi) * Math.sin(theta) * r
    this.positions[i3 + 2] = Math.cos(phi) * r

    const speedVar = this.config.speedVariation ?? 0.5
    const speed = this.config.speed * (speedVar + Math.random() * (1 - speedVar))

    if (this.config.direction === 'inward') {
      this.velocities[i3] = -this.positions[i3] * speed
      this.velocities[i3 + 1] = -this.positions[i3 + 1] * speed
      this.velocities[i3 + 2] = -this.positions[i3 + 2] * speed
    } else if (this.config.direction === 'outward') {
      this.velocities[i3] = this.positions[i3] * speed
      this.velocities[i3 + 1] = this.positions[i3 + 1] * speed
      this.velocities[i3 + 2] = this.positions[i3 + 2] * speed
    } else {
      // Orbital
      this.velocities[i3] = -this.positions[i3 + 1] * speed
      this.velocities[i3 + 1] = this.positions[i3] * speed
      this.velocities[i3 + 2] = (Math.random() - 0.5) * speed * 0.3
    }

    this.lifetimes[index] = 0.5 + Math.random() * 0.5
  }

  update(deltaTime: number): void {
    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3
      this.lifetimes[i] -= deltaTime * 0.4
      if (this.lifetimes[i] <= 0) {
        this.resetParticle(i)
        continue
      }

      this.positions[i3] += this.velocities[i3] * deltaTime
      this.positions[i3 + 1] += this.velocities[i3 + 1] * deltaTime
      this.positions[i3 + 2] += this.velocities[i3 + 2] * deltaTime
    }

    this.geometry.attributes.position.needsUpdate = true
  }

  getObject3D(): THREE.Points {
    return this.points
  }

  setOpacity(opacity: number): void {
    this.material.opacity = opacity
  }

  dispose(): void {
    this.geometry.dispose()
    this.material.dispose()
  }
}
