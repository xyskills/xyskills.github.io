import type { LandmarkPoint } from './hand'

export interface FaceData {
  /** 478 normalised face mesh landmarks (x,y in [0,1] image space, z = depth). */
  landmarks:   LandmarkPoint[]
  /** Blendshape scores, e.g. eyeWideLeft, eyeBlinkLeft, jawOpen. Values 0–1. */
  blendshapes: Record<string, number>
  /** Left-eye centre in normalised image coordinates. */
  leftEye:  { x: number; y: number }
  /** Right-eye centre in normalised image coordinates. */
  rightEye: { x: number; y: number }
}
