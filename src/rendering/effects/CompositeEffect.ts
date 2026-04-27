import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'

/**
 * Wraps a primary EffectRenderer (procedural) with an optional overlay (VideoEffectLayer).
 *
 * - SceneManager sees exactly ONE Object3D (our group) containing both children.
 * - If the overlay video doesn't exist, it silently does nothing — the procedural
 *   effect is the baseline that always runs.
 * - All scene properties (distortion, darkenBackground, normalizedPosition) are
 *   delegated to the primary effect.
 */
export class CompositeEffect extends EffectRenderer {
  private primary: EffectRenderer
  private overlay: EffectRenderer

  constructor(primary: EffectRenderer, overlay: EffectRenderer) {
    super()
    this.primary = primary
    this.overlay = overlay
    // Both groups are children of our group → single Object3D for SceneManager
    this.group.add(primary.getObject3D())
    this.group.add(overlay.getObject3D())
  }

  spawn(): void {
    this.primary.spawn()
    this.overlay.spawn()
  }

  override beginDissipate(): void {
    this.primary.beginDissipate()
    this.overlay.beginDissipate()
  }

  override get isDone(): boolean {
    return this.primary.isDone && this.overlay.isDone
  }

  update(dt: number): void {
    this.primary.update(dt)
    this.overlay.update(dt)
    // Propagate distortion / scene properties from the primary so SceneManager
    // can apply background distortion and darkening correctly
    this.distortionType     = this.primary.distortionType
    this.distortionStrength = this.primary.distortionStrength
    this.darkenBackground   = this.primary.darkenBackground
    this.normalizedPosition = this.primary.normalizedPosition
  }

  setPosition(pos: THREE.Vector3): void {
    this.primary.setPosition(pos)
    this.overlay.setPosition(pos)
  }

  dispose(): void {
    this.primary.dispose()
    this.overlay.dispose()
  }
}
