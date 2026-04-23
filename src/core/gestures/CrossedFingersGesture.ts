import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { HandLandmark } from '@/types/hand'

/**
 * Domain Expansion gesture: index + middle raised, ring + pinky folded, held 3 seconds.
 * Any 2-finger-up pose works — no crossing or specific spacing required.
 */

const HOLD_TIME_MS = 3000
const COOLDOWN_MS  = 5000

export class CrossedFingersGesture extends Gesture {
  readonly type = GestureType.DOMAIN_EXPANSION
  readonly name = 'Domain Expansion'

  private holdStartTime = 0
  private holding       = false
  private wasFired      = false
  private lastFireTime  = 0

  detect(hands: HandData[], _deltaTime: number): GestureEvent | null {
    const hand = hands[0]
    if (!hand) { this.reset(); return null }

    const lm = hand.landmarks

    const indexUp   = lm[HandLandmark.INDEX_FINGER_TIP].y  < lm[HandLandmark.INDEX_FINGER_PIP].y
    const middleUp  = lm[HandLandmark.MIDDLE_FINGER_TIP].y < lm[HandLandmark.MIDDLE_FINGER_PIP].y
    const ringDown  = lm[HandLandmark.RING_FINGER_TIP].y   >= lm[HandLandmark.RING_FINGER_PIP].y
    const pinkyDown = lm[HandLandmark.PINKY_TIP].y         >= lm[HandLandmark.PINKY_PIP].y

    if (!(indexUp && middleUp && ringDown && pinkyDown)) {
      this.reset()
      return null
    }

    const now = performance.now()
    if (!this.holding) {
      this.holding       = true
      this.holdStartTime = now
    }

    const held = now - this.holdStartTime
    if (held >= HOLD_TIME_MS && !this.wasFired && now - this.lastFireTime > COOLDOWN_MS) {
      this.wasFired     = true
      this.lastFireTime = now
      return {
        type:           GestureType.DOMAIN_EXPANSION,
        confidence:     1.0,
        timestamp:      now,
        handData:       hand,
        anchorPosition: lm[HandLandmark.WRIST],
      }
    }

    return null
  }

  /** How far through the 3-second hold (0–1). Useful for a charge indicator. */
  getHoldProgress(): number {
    if (!this.holding || this.wasFired) return 0
    return Math.min((performance.now() - this.holdStartTime) / HOLD_TIME_MS, 1)
  }

  private reset(): void {
    this.holding       = false
    this.wasFired      = false
    this.holdStartTime = 0
  }
}
