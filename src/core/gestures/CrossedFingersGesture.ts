import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { HandLandmark } from '@/types/hand'

/**
 * Domain Expansion gesture: index finger crossed over middle finger.
 *
 * Detection logic (2D, camera-angle robust):
 *  - Both index and middle fingers must be extended (tips above PIPs)
 *  - Index tip x-position has crossed to the other side of middle tip x-position,
 *    relative to their natural order at the MCP knuckles
 *  - The crossing offset must exceed a threshold normalized by hand width
 *    to avoid noise triggering it
 *  - Must hold for MIN_HOLD_FRAMES to confirm intent (not a passing cross)
 *  - Emits once on entry, then requires uncrossing before firing again
 */

const MIN_HOLD_FRAMES = 8     // must hold cross for this many frames
const CROSS_THRESHOLD = 0.08  // index tip must cross past middle tip by this much (normalized)
const COOLDOWN_MS     = 1500

export class CrossedFingersGesture extends Gesture {
  readonly type = GestureType.DOMAIN_EXPANSION
  readonly name = 'Domain Expansion'

  private holdFrames   = 0
  private wasCrossed   = false   // prevents re-firing while still crossed
  private lastFireTime = 0

  detect(hands: HandData[], _deltaTime: number): GestureEvent | null {
    // Accept either hand — whichever is visible
    const hand = hands[0]
    if (!hand) {
      this.holdFrames = 0
      this.wasCrossed = false
      return null
    }

    const lm = hand.landmarks

    // Both fingers must be extended (tip y < pip y in screen coords where y increases downward)
    const indexExtended = lm[HandLandmark.INDEX_FINGER_TIP].y < lm[HandLandmark.INDEX_FINGER_PIP].y
    const middleExtended = lm[HandLandmark.MIDDLE_FINGER_TIP].y < lm[HandLandmark.MIDDLE_FINGER_PIP].y
    if (!indexExtended || !middleExtended) {
      this.holdFrames = 0
      this.wasCrossed = false
      return null
    }

    // Hand width as normalizer (index MCP to pinky MCP)
    const handWidth = Math.abs(
      lm[HandLandmark.INDEX_FINGER_MCP].x - lm[HandLandmark.PINKY_MCP].x
    )
    if (handWidth < 0.01) return null

    // Natural order: index MCP is to one side of middle MCP
    // If index tip has crossed to the other side of middle tip, fingers are crossed
    const indexMcpX  = lm[HandLandmark.INDEX_FINGER_MCP].x
    const middleMcpX = lm[HandLandmark.MIDDLE_FINGER_MCP].x
    const naturalSign = Math.sign(indexMcpX - middleMcpX)  // +1 or -1 based on hand orientation

    const indexTipX  = lm[HandLandmark.INDEX_FINGER_TIP].x
    const middleTipX = lm[HandLandmark.MIDDLE_FINGER_TIP].x
    const currentSign = Math.sign(indexTipX - middleTipX)

    // Crossed = tips are on opposite side from their MCPs
    const crossed = currentSign !== naturalSign

    // Require the crossing to be significant (not just touching)
    const crossMagnitude = Math.abs(indexTipX - middleTipX) / handWidth
    const significantCross = crossed && crossMagnitude > CROSS_THRESHOLD

    if (significantCross) {
      this.holdFrames++
    } else {
      this.holdFrames = 0
      if (!significantCross) this.wasCrossed = false
    }

    // Fire once when hold threshold met, then wait for uncross
    if (this.holdFrames >= MIN_HOLD_FRAMES && !this.wasCrossed) {
      const now = performance.now()
      if (now - this.lastFireTime > COOLDOWN_MS) {
        this.wasCrossed  = true
        this.lastFireTime = now
        return {
          type:          GestureType.DOMAIN_EXPANSION,
          confidence:    Math.min(crossMagnitude / (CROSS_THRESHOLD * 3), 1),
          timestamp:     now,
          handData:      hand,
          anchorPosition: lm[HandLandmark.WRIST],
        }
      }
    }

    return null
  }
}
