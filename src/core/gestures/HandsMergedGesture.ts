import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { getPalmCenter } from '@/utils/landmark-utils'
import { distance2D, midpoint } from '@/utils/math'

const MERGE_DISTANCE_THRESHOLD = 0.22
const DEBOUNCE_MS = 300

export class HandsMergedGesture extends Gesture {
  readonly type = GestureType.HANDS_MERGED
  readonly name = 'Hands Merged'
  private mergeStartTime = 0
  private wasMerged = false

  detect(hands: HandData[], _deltaTime: number): GestureEvent | null {
    if (hands.length < 2) {
      this.wasMerged = false
      this.mergeStartTime = 0
      return null
    }

    const palm0 = getPalmCenter(hands[0].landmarks)
    const palm1 = getPalmCenter(hands[1].landmarks)
    const dist = distance2D(palm0, palm1)

    if (dist > MERGE_DISTANCE_THRESHOLD) {
      this.wasMerged = false
      this.mergeStartTime = 0
      return null
    }

    const now = performance.now()
    if (!this.wasMerged) {
      this.wasMerged = true
      this.mergeStartTime = now
    }

    if (now - this.mergeStartTime < DEBOUNCE_MS) return null

    const center = midpoint(palm0, palm1)
    return {
      type: this.type,
      confidence: 1 - dist / MERGE_DISTANCE_THRESHOLD,
      timestamp: now,
      anchorPosition: { x: center.x, y: center.y - 0.05, z: center.z },
    }
  }
}
