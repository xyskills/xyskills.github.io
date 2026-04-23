import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { HandLandmark } from '@/types/hand'

/**
 * Domain Expansion gesture: index + middle fingers pointing up, ring + pinky folded down.
 * This is the classic two-finger gesture Gojo uses before "Infinite Void".
 *
 * Detection:
 *  - Index tip above index PIP (extended)
 *  - Middle tip above middle PIP (extended)
 *  - Ring tip at or below ring PIP (folded)
 *  - Pinky tip at or below pinky PIP (folded)
 *  - Hold for MIN_HOLD_FRAMES frames to confirm intent
 *  - Fires once on entry, requires release before re-firing
 */

const MIN_HOLD_FRAMES = 6
const COOLDOWN_MS     = 3000

export class CrossedFingersGesture extends Gesture {
  readonly type = GestureType.DOMAIN_EXPANSION
  readonly name = 'Domain Expansion'

  private holdFrames   = 0
  private wasFired     = false
  private lastFireTime = 0

  detect(hands: HandData[], _deltaTime: number): GestureEvent | null {
    const hand = hands[0]
    if (!hand) {
      this.holdFrames = 0
      this.wasFired   = false
      return null
    }

    const lm = hand.landmarks

    const indexUp  = lm[HandLandmark.INDEX_FINGER_TIP].y  < lm[HandLandmark.INDEX_FINGER_PIP].y
    const middleUp = lm[HandLandmark.MIDDLE_FINGER_TIP].y < lm[HandLandmark.MIDDLE_FINGER_PIP].y
    const ringDown  = lm[HandLandmark.RING_FINGER_TIP].y  >= lm[HandLandmark.RING_FINGER_PIP].y
    const pinkyDown = lm[HandLandmark.PINKY_TIP].y        >= lm[HandLandmark.PINKY_PIP].y

    if (indexUp && middleUp && ringDown && pinkyDown) {
      this.holdFrames++
    } else {
      this.holdFrames = 0
      this.wasFired   = false
      return null
    }

    if (this.holdFrames >= MIN_HOLD_FRAMES && !this.wasFired) {
      const now = performance.now()
      if (now - this.lastFireTime > COOLDOWN_MS) {
        this.wasFired    = true
        this.lastFireTime = now
        return {
          type:           GestureType.DOMAIN_EXPANSION,
          confidence:     1.0,
          timestamp:      now,
          handData:       hand,
          anchorPosition: lm[HandLandmark.WRIST],
        }
      }
    }

    return null
  }
}
