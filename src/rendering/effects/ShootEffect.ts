import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'
import { ParticleSystem } from '../ParticleSystem'

export class ShootEffect extends EffectRenderer {
  private particles: ParticleSystem
  private trailParticles: ParticleSystem
  private coreGlow: THREE.Sprite
  private outerGlow: THREE.Sprite
  private flashSprite: THREE.Sprite
  private whiteFlash: THREE.Sprite
  private impactFlash: THREE.Sprite   // second flash at moment of impact
  private shockwave: THREE.Sprite
  private velocity = new THREE.Vector3()
  private lifetime = 0
  private maxLifetime: number
  private opacity = 1
  private isPurple: boolean

  constructor(color: THREE.Color, glowColor: THREE.Color, isPurple = false) {
    super()
    this.isPurple = isPurple
    this.maxLifetime = isPurple ? 2.8 : 1.4

    this.distortionType = 0
    this.distortionStrength = 0

    this.particles = new ParticleSystem({
      count: isPurple ? 600 : 150,
      color,
      size: isPurple ? 0.022 : 0.007,
      speed: isPurple ? 0.7 : 0.25,
      radius: isPurple ? 0.14 : 0.02,
      direction: 'outward',
      opacity: 0.9,
    })
    this.group.add(this.particles.getObject3D())

    this.trailParticles = new ParticleSystem({
      count: isPurple ? 400 : 100,
      color: glowColor,
      size: isPurple ? 0.016 : 0.005,
      speed: isPurple ? 0.30 : 0.08,
      radius: isPurple ? 0.22 : 0.03,
      direction: 'orbital',
      opacity: 0.65,
    })
    this.group.add(this.trailParticles.getObject3D())

    this.coreGlow  = EffectRenderer.makeGlowSprite(color,      isPurple ? 0.7 : 0.1)
    this.group.add(this.coreGlow)
    this.outerGlow = EffectRenderer.makeGlowSprite(glowColor,   isPurple ? 1.4 : 0.18)
    this.group.add(this.outerGlow)

    // Purple blast layers
    this.flashSprite = EffectRenderer.makeGlowSprite(new THREE.Color(0.75, 0.15, 1.0), isPurple ? 6.0 : 0)
    this.group.add(this.flashSprite)

    // Firing flash — initial release burst
    this.whiteFlash  = EffectRenderer.makeGlowSprite(new THREE.Color(1.0, 0.97, 1.0), isPurple ? 10.0 : 0)
    this.group.add(this.whiteFlash)

    // Impact flash — when it hits the camera
    this.impactFlash = EffectRenderer.makeGlowSprite(new THREE.Color(0.95, 0.8, 1.0), isPurple ? 14.0 : 0)
    this.group.add(this.impactFlash)

    // Shockwave ring at medium time
    this.shockwave   = EffectRenderer.makeGlowSprite(new THREE.Color(0.9, 0.55, 1.0), isPurple ? 3.5 : 0)
    this.group.add(this.shockwave)
  }

  setVelocity(vel: THREE.Vector3): void { this.velocity.copy(vel) }

  spawn(): void {
    this.lifetime = 0
    this.opacity  = 1
  }

  update(deltaTime: number): void {
    this.lifetime += deltaTime
    const progress = this.lifetime / this.maxLifetime

    // Opacity: full, then fade over last 15%
    this.opacity = progress < 0.85
      ? 1.0
      : Math.max(0, 1 - (progress - 0.85) / 0.15)

    this.group.position.add(this.velocity.clone().multiplyScalar(deltaTime))
    this.particles.update(deltaTime)
    this.trailParticles.update(deltaTime)
    this.particles.setOpacity(this.opacity * 0.9)
    this.trailParticles.setOpacity(this.opacity * 0.65)
    ;(this.coreGlow.material  as THREE.SpriteMaterial).opacity = this.opacity
    ;(this.outerGlow.material as THREE.SpriteMaterial).opacity = this.opacity * 0.85

    if (this.isPurple) {
      // Scale curve:
      // 0–15%  : hangs in space, barely grows (1x → 1.5x) — firing moment
      // 15–65% : steady approach growing 1.5x → 14x — ball flying toward you
      // 65–85% : exponential rush 14x → 55x — it's RIGHT in your face
      // 85–100%: still huge, fading out
      let scale: number
      if (progress < 0.15) {
        scale = 1 + (progress / 0.15) * 0.5           // 1x → 1.5x
      } else if (progress < 0.65) {
        const t = (progress - 0.15) / 0.50
        scale = 1.5 + t * 12.5                        // 1.5x → 14x linear
      } else {
        const t = (progress - 0.65) / 0.35
        scale = 14 + t * t * t * 41                   // 14x → 55x cubic rush
      }
      this.group.scale.setScalar(scale)

      // FIRING FLASH: peaks at 8%, gone by 20% — initial release burst
      const firingFlash = Math.max(0, 1 - progress / 0.20) * (progress < 0.08 ? progress / 0.08 : 1)
      ;(this.whiteFlash.material as THREE.SpriteMaterial).opacity = firingFlash * 0.95

      // IMPACT FLASH: spikes sharply at 80% — the moment it hits you
      const impactT = Math.max(0, 1 - Math.abs(progress - 0.80) / 0.10)
      const impactPeak = impactT * impactT  // sharper peak
      ;(this.impactFlash.material as THREE.SpriteMaterial).opacity = impactPeak * 0.98

      // PURPLE GLOW: sin arc peaks around 45%, stays strong through approach
      const flashPeak = Math.sin(Math.min(progress / 0.85, 1) * Math.PI)
      ;(this.flashSprite.material as THREE.SpriteMaterial).opacity = flashPeak * 0.90

      // SHOCKWAVE: tight burst at 30% then fades
      const shockPeak = Math.max(0, Math.sin((progress - 0.18) * Math.PI / 0.35))
      ;(this.shockwave.material as THREE.SpriteMaterial).opacity = shockPeak * 0.80

    } else {
      const scale = 1 + progress * 0.4
      this.group.scale.setScalar(scale)
      ;(this.flashSprite.material  as THREE.SpriteMaterial).opacity = 0
      ;(this.whiteFlash.material   as THREE.SpriteMaterial).opacity = 0
      ;(this.impactFlash.material  as THREE.SpriteMaterial).opacity = 0
      ;(this.shockwave.material    as THREE.SpriteMaterial).opacity = 0
    }
  }

  isExpired(): boolean { return this.lifetime >= this.maxLifetime }

  setPosition(pos: THREE.Vector3): void { this.group.position.copy(pos) }

  async dissipate(): Promise<void> { this.opacity = 0 }

  dispose(): void {
    this.particles.dispose()
    this.trailParticles.dispose()
    for (const s of [this.coreGlow, this.outerGlow, this.flashSprite, this.whiteFlash, this.impactFlash, this.shockwave]) {
      ;(s.material as THREE.SpriteMaterial).map?.dispose()
      ;(s.material as THREE.SpriteMaterial).dispose()
    }
  }
}
