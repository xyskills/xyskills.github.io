import * as THREE from 'three'
import { AbilityState } from '@/types/ability'
import type { AbilityConfig } from '@/types/ability'
import type { LandmarkPoint } from '@/types/hand'
import type { EffectRenderer } from '@/rendering/effects/EffectRenderer'

export abstract class Ability {
  readonly config: AbilityConfig
  state: AbilityState = AbilityState.INACTIVE
  protected position = new THREE.Vector3()
  protected shootDirection = new THREE.Vector3()
  normalizedAnchor: LandmarkPoint = { x: 0.5, y: 0.5, z: 0 }

  constructor(config: AbilityConfig) {
    this.config = config
  }

  abstract getEffect(): EffectRenderer

  onSpawn(_anchorPosition: LandmarkPoint): void {
    this.state = AbilityState.SPAWNING
    this.getEffect().spawn()
    this.state = AbilityState.IDLE
  }

  onIdle(anchorPosition: LandmarkPoint, worldPos: THREE.Vector3): void {
    this.state = AbilityState.IDLE
    this.normalizedAnchor = { ...anchorPosition }
    this.position.copy(worldPos)
    this.getEffect().setPosition(worldPos)
    // Mirror X, flip Y: landmark y=0 is top, shader UV y=0 is bottom
    this.getEffect().normalizedPosition = { x: 1.0 - anchorPosition.x, y: 1.0 - anchorPosition.y }
  }

  onShoot(direction: THREE.Vector3): void {
    this.state = AbilityState.SHOOTING
    this.shootDirection.copy(direction).normalize().multiplyScalar(3)
  }

  async onDissipate(): Promise<void> {
    this.state = AbilityState.DISSIPATING
    await this.getEffect().dissipate()
    this.state = AbilityState.INACTIVE
  }

  update(deltaTime: number): void {
    if (this.state === AbilityState.SHOOTING) {
      this.position.add(this.shootDirection.clone().multiplyScalar(deltaTime))
      this.getEffect().setPosition(this.position)
    }
    this.getEffect().update(deltaTime)
  }
}
