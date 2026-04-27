import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { HandLandmark } from '@/types/hand'
import { getHandByType, countExtendedFingers } from '@/utils/landmark-utils'

const THRUST_DZ     = -0.06   // how much z must drop over the window (negative = closer)
const WINDOW        = 4       // frames to measure over
const COOLDOWN_MS   = 1200

/**
 * Open palm pushed toward camera — fires the orb on that side.
 *
 * Requires ≥4 fingers extended (open palm) + sudden forward wrist motion
 * (wrist z decreases by ≥THRUST_DZ over the last WINDOW detection frames).
 */
export class PalmThrustGesture extends Gesture {
  readonly type: GestureType
  readonly name: string

  private readonly side: 'Left' | 'Right'
  private zHistory: number[]     = []
  private cooldownUntil          = 0

  constructor(side: 'Left' | 'Right') {
    super()
    this.side = side
    this.type = side === 'Left' ? GestureType.PALM_THRUST_LEFT : GestureType.PALM_THRUST_RIGHT
    this.name = `Palm Thrust ${side}`
  }

  detect(hands: HandData[], _dt: number): GestureEvent | null {
    const hand = getHandByType(hands, this.side)
    if (!hand) { this.zHistory = []; return null }

    // Open palm: need at least 4 fingers extended
    if (countExtendedFingers(hand.landmarks) < 4) { this.zHistory = []; return null }

    const wristZ = hand.landmarks[HandLandmark.WRIST].z
    this.zHistory.push(wristZ)
    if (this.zHistory.length > WINDOW) this.zHistory.shift()
    if (this.zHistory.length < WINDOW) return null

    const dz  = this.zHistory[this.zHistory.length - 1] - this.zHistory[0]
    const now = performance.now()
    if (dz < THRUST_DZ && now > this.cooldownUntil) {
      this.cooldownUntil = now + COOLDOWN_MS
      this.zHistory      = []
      return {
        type:           this.type,
        confidence:     1.0,
        timestamp:      now,
        handData:       hand,
        anchorPosition: hand.landmarks[HandLandmark.WRIST],
      }
    }

    return null
  }
}
