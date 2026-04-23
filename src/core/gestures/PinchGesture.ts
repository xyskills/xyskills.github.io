import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { HandLandmark } from '@/types/hand'
import { getPinchDistance, getPinchMidpoint, isFingerExtended } from '@/utils/landmark-utils'

const PINCH_THRESHOLD = 0.075
const DEBOUNCE_MS = 200

export class PinchGesture extends Gesture {
  readonly type = GestureType.HANDS_MERGED
  readonly name = 'Pinch'
  private wasPinching = false
  private pinchStartTime = 0

  detect(hands: HandData[], _deltaTime: number): GestureEvent | null {
    for (const hand of hands) {
      const lm = hand.landmarks
      const dist = getPinchDistance(lm)
      if (dist > PINCH_THRESHOLD) continue

      // Require middle + ring + pinky extended (3 fingers up = Gojo Blue pose)
      const mid   = isFingerExtended(lm, HandLandmark.MIDDLE_FINGER_TIP, HandLandmark.MIDDLE_FINGER_PIP)
      const ring  = isFingerExtended(lm, HandLandmark.RING_FINGER_TIP,   HandLandmark.RING_FINGER_PIP)
      const pinky = isFingerExtended(lm, HandLandmark.PINKY_TIP,         HandLandmark.PINKY_PIP)
      // Require at least 2 of 3 to be tolerant of detection errors
      if ((mid ? 1 : 0) + (ring ? 1 : 0) + (pinky ? 1 : 0) < 2) {
        this.wasPinching = false
        this.pinchStartTime = 0
        continue
      }

      const now = performance.now()
      if (!this.wasPinching) {
        this.wasPinching = true
        this.pinchStartTime = now
      }
      if (now - this.pinchStartTime < DEBOUNCE_MS) return null

      return {
        type: this.type,
        confidence: 1 - dist / PINCH_THRESHOLD,
        timestamp: now,
        handData: hand,
        anchorPosition: getPinchMidpoint(lm),
      }
    }
    this.wasPinching = false
    this.pinchStartTime = 0
    return null
  }
}
