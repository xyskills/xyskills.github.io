import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { HandLandmark } from '@/types/hand'
import { getHandByType, getHighestFingerTip, countExtendedFingers } from '@/utils/landmark-utils'

const SPAWN_STABLE_FRAMES = 8  // ~260ms at 30fps before first spawn

export class HandRaisedGesture extends Gesture {
  readonly type: GestureType
  readonly name: string
  private handSide: 'Left' | 'Right'
  private stableFrames = 0
  private spawned = false

  constructor(handSide: 'Left' | 'Right') {
    super()
    this.handSide = handSide
    this.type = handSide === 'Left' ? GestureType.LEFT_HAND_RAISED : GestureType.RIGHT_HAND_RAISED
    this.name = `${handSide} Hand Raised`
  }

  detect(hands: HandData[], _deltaTime: number): GestureEvent | null {
    const hand = getHandByType(hands, this.handSide)
    if (!hand) {
      this.stableFrames = 0
      this.spawned = false
      return null
    }

    const lm = hand.landmarks

    // Suppress when holding the domain expansion pose:
    // index + middle UP, ring + pinky DOWN, fingers close together.
    const indexUp   = lm[HandLandmark.INDEX_FINGER_TIP].y  < lm[HandLandmark.INDEX_FINGER_PIP].y
    const middleUp  = lm[HandLandmark.MIDDLE_FINGER_TIP].y < lm[HandLandmark.MIDDLE_FINGER_PIP].y
    const ringDown  = lm[HandLandmark.RING_FINGER_TIP].y   >= lm[HandLandmark.RING_FINGER_PIP].y
    const pinkyDown = lm[HandLandmark.PINKY_TIP].y         >= lm[HandLandmark.PINKY_PIP].y
    if (indexUp && middleUp && ringDown && pinkyDown) {
      this.stableFrames = 0
      this.spawned = false
      return null
    }

    // Any finger lifted counts
    const extendedCount = countExtendedFingers(lm)
    if (extendedCount < 1) {
      this.stableFrames = 0
      this.spawned = false
      return null
    }

    this.stableFrames = Math.min(this.stableFrames + 1, 60)

    const tip = getHighestFingerTip(lm)
    const anchorPosition = { x: tip.x, y: tip.y - 0.07, z: tip.z }

    // During the stability window: emit a charging event so the UI can show buildup
    if (!this.spawned) {
      if (this.stableFrames < SPAWN_STABLE_FRAMES) {
        return {
          type: this.type,
          confidence: this.stableFrames / SPAWN_STABLE_FRAMES,
          timestamp: performance.now(),
          handData: hand,
          anchorPosition,
          charging: true,
        }
      }
      this.spawned = true
    }

    return {
      type: this.type,
      confidence: Math.min(extendedCount / 3, 1),
      timestamp: performance.now(),
      handData: hand,
      anchorPosition,
    }
  }
}
