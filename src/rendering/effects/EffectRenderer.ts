import * as THREE from 'three'

export abstract class EffectRenderer {
  protected group: THREE.Group
  // Distortion info for camera warping
  distortionType: number = 0  // 0=none, 1=push(blue), -1=pull(red), 2=purple
  distortionStrength: number = 0
  normalizedPosition = { x: 0.5, y: 0.5 }
  /** When true, SceneManager darkens the background video to a cinematic black */
  darkenBackground: boolean = false

  constructor() {
    this.group = new THREE.Group()
  }

  abstract update(deltaTime: number): void
  abstract setPosition(pos: THREE.Vector3): void
  abstract spawn(): void
  abstract dissipate(): Promise<void>

  getObject3D(): THREE.Group {
    return this.group
  }

  abstract dispose(): void
}
