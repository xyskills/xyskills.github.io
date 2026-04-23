import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { HandLandmark } from '@/types/hand'
import { getHandByType, getHighestFingerTip, countExtendedFingers } from '@/utils/landmark-utils'

export class HandRaisedGesture extends Gesture {
  readonly type: GestureType
  readonly name: string
  private handSide: 'Left' | 'Right'

  constructor(handSide: 'Left' | 'Right') {
    super()
    this.handSide = handSide
    this.type = handSide === 'Left' ? GestureType.LEFT_HAND_RAISED : GestureType.RIGHT_HAND_RAISED
    this.name = `${handSide} Hand Raised`
  }

  detect(hands: HandData[], _deltaTime: number): GestureEvent | null {
    const hand = getHandByType(hands, this.handSide)
    if (!hand) return null

    const lm = hand.landmarks

    // Suppress when index+middle are crossed (domain expansion pose)
    const mcpSign = lm[HandLandmark.INDEX_FINGER_MCP].x - lm[HandLandmark.MIDDLE_FINGER_MCP].x
    const tipSign = lm[HandLandmark.INDEX_FINGER_TIP].x - lm[HandLandmark.MIDDLE_FINGER_TIP].x
    const handWidth = Math.abs(lm[HandLandmark.INDEX_FINGER_MCP].x - lm[HandLandmark.PINKY_MCP].x)
    const crossDepth = Math.abs(lm[HandLandmark.INDEX_FINGER_TIP].x - lm[HandLandmark.MIDDLE_FINGER_TIP].x)
    if (
      mcpSign * tipSign < 0 &&
      lm[HandLandmark.INDEX_FINGER_TIP].y < lm[HandLandmark.INDEX_FINGER_PIP].y &&
      lm[HandLandmark.MIDDLE_FINGER_TIP].y < lm[HandLandmark.MIDDLE_FINGER_PIP].y &&
      crossDepth > handWidth * 0.08
    ) {
      return null
    }

    // Suppress when index+middle up, ring+pinky down → domain expansion pose
    const indexUp  = lm[HandLandmark.INDEX_FINGER_TIP].y  < lm[HandLandmark.INDEX_FINGER_PIP].y
    const middleUp = lm[HandLandmark.MIDDLE_FINGER_TIP].y < lm[HandLandmark.MIDDLE_FINGER_PIP].y
    const ringDown  = lm[HandLandmark.RING_FINGER_TIP].y  >= lm[HandLandmark.RING_FINGER_PIP].y
    const pinkyDown = lm[HandLandmark.PINKY_TIP].y        >= lm[HandLandmark.PINKY_PIP].y
    if (indexUp && middleUp && ringDown && pinkyDown) return null

    // Any finger lifted counts
    const extendedCount = countExtendedFingers(lm)
    if (extendedCount < 1) return null

    // Use whichever finger is highest (topmost in frame)
    const tip = getHighestFingerTip(lm)
    return {
      type: this.type,
      confidence: Math.min(extendedCount / 3, 1),
      timestamp: performance.now(),
      handData: hand,
      anchorPosition: { x: tip.x, y: tip.y - 0.07, z: tip.z },
    }
  }
}
