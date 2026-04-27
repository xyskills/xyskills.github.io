import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'
import type { FaceData } from '@/types/face'

/**
 * Six Eyes visual — two subtle cyan glow sprites at Gojo's eye positions.
 * Driven by face landmark data from FaceTracker.
 * Glows brighter when eyes are wide open; fades when eyes are closed.
 */
export class SixEyesEffect extends EffectRenderer {
  private leftGlow:   THREE.Sprite
  private rightGlow:  THREE.Sprite
  private leftShine:  THREE.Sprite
  private rightShine: THREE.Sprite
  private visible = false
  private targetOpacity = 0
  private currentOpacity = 0

  constructor() {
    super()
    const eyeColor   = new THREE.Color(0.45, 0.90, 1.0)   // cyan
    const shineColor = new THREE.Color(0.85, 0.97, 1.0)   // bright white-blue

    this.leftGlow   = EffectRenderer.makeGlowSprite(eyeColor,   0.28)
    this.rightGlow  = EffectRenderer.makeGlowSprite(eyeColor,   0.28)
    this.leftShine  = EffectRenderer.makeGlowSprite(shineColor, 0.10)
    this.rightShine = EffectRenderer.makeGlowSprite(shineColor, 0.10)

    for (const s of [this.leftGlow, this.rightGlow, this.leftShine, this.rightShine]) {
      this.group.add(s)
    }
  }

  /** Called each frame by SceneManager (via update). */
  update(dt: number): void {
    // Smooth opacity transition
    this.currentOpacity += (this.targetOpacity - this.currentOpacity) * Math.min(dt * 5, 1)
    const op = this.currentOpacity

    ;(this.leftGlow.material   as THREE.SpriteMaterial).opacity = op * 0.55
    ;(this.rightGlow.material  as THREE.SpriteMaterial).opacity = op * 0.55
    ;(this.leftShine.material  as THREE.SpriteMaterial).opacity = op * 0.85
    ;(this.rightShine.material as THREE.SpriteMaterial).opacity = op * 0.85
  }

  /** Feed the latest face data. Pass null when no face detected. */
  setFaceData(face: FaceData | null, frustumWidth: number, frustumHeight: number): void {
    if (!face) {
      this.targetOpacity = 0
      return
    }

    // Map normalised image coords → world space (mirrored to match video)
    const lx = -(face.leftEye.x  - 0.5) * frustumWidth
    const ly = -(face.leftEye.y  - 0.5) * frustumHeight
    const rx = -(face.rightEye.x - 0.5) * frustumWidth
    const ry = -(face.rightEye.y - 0.5) * frustumHeight

    this.leftGlow.position.set(lx, ly, 0.1)
    this.leftShine.position.set(lx, ly, 0.1)
    this.rightGlow.position.set(rx, ry, 0.1)
    this.rightShine.position.set(rx, ry, 0.1)

    // Glow intensity based on eye openness (1 = wide open, 0 = closed)
    const eyeOpen = 1 - Math.max(
      face.blendshapes['eyeBlinkLeft']  ?? 0,
      face.blendshapes['eyeBlinkRight'] ?? 0,
    )
    const wide = Math.max(
      face.blendshapes['eyeWideLeft']  ?? 0,
      face.blendshapes['eyeWideRight'] ?? 0,
    )
    this.targetOpacity = Math.max(0.3, eyeOpen * (0.7 + wide * 0.5))
  }

  setPosition(_pos: THREE.Vector3): void { /* controlled by setFaceData */ }

  dispose(): void {
    for (const s of [this.leftGlow, this.rightGlow, this.leftShine, this.rightShine]) {
      ;(s.material as THREE.SpriteMaterial).map?.dispose()
      ;(s.material as THREE.SpriteMaterial).dispose()
    }
  }
}
