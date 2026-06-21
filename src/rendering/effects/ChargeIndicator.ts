import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'

/**
 * Pre-spawn charge buildup indicator.
 * Shown during the HandRaisedGesture stability window (0→1 charge).
 * A small, dimmed glow that grows as confidence rises, then vanishes on actual spawn.
 */
export class ChargeIndicator extends EffectRenderer {
  private glow: THREE.Sprite
  private charge = 0

  constructor(color: THREE.Color) {
    super()
    this.glow = EffectRenderer.makeGlowSprite(color, 0.40)
    this.group.add(this.glow)
  }

  /** Called each frame with the current charge progress (0→1). */
  setCharge(progress: number): void {
    this.charge = Math.max(0, Math.min(1, progress))
    ;(this.glow.material as THREE.SpriteMaterial).opacity = this.charge * 0.50
    const s = 0.2 + this.charge * 0.6
    this.glow.scale.setScalar(s)
    this.group.visible = this.charge > 0
  }

  update(_dt: number): void { /* driven externally via setCharge */ }
  setPosition(pos: THREE.Vector3): void { this.group.position.copy(pos) }
  dispose(): void {
    ;(this.glow.material as THREE.SpriteMaterial).map?.dispose()
    ;(this.glow.material as THREE.SpriteMaterial).dispose()
  }
}
