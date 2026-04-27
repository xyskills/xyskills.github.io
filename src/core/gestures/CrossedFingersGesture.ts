import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import { HandLandmark } from '@/types/hand'

/**
 * Two-finger-up pose (index + middle raised, ring + pinky folded).
 *
 * When domain is NOT active: hold 3 s → emit DOMAIN_EXPANSION
 * When domain IS active:     hold 1 s → emit DOMAIN_EXIT
 *
 * AbilityManager calls setDomainActive() whenever domain state changes.
 */

const ENTER_HOLD_MS = 3000
const EXIT_HOLD_MS  = 1000
const COOLDOWN_MS   = 5000

export class CrossedFingersGesture extends Gesture {
  readonly type = GestureType.DOMAIN_EXPANSION
  readonly name = 'Domain Expansion'

  private holdStartTime  = 0
  private holding        = false
  private wasFired       = false
  private lastFireTime   = 0
  private domainIsActive = false

  /** AbilityManager calls this when domain state changes. */
  setDomainActive(active: boolean): void {
    // Reset hold state when mode flips so we don't carry over a partial hold
    if (active !== this.domainIsActive) {
      this.holding       = false
      this.wasFired      = false
      this.holdStartTime = 0
    }
    this.domainIsActive = active
  }

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

    const holdMs    = this.domainIsActive ? EXIT_HOLD_MS  : ENTER_HOLD_MS
    const fireType  = this.domainIsActive ? GestureType.DOMAIN_EXIT : GestureType.DOMAIN_EXPANSION
    const held      = now - this.holdStartTime

    if (held >= holdMs && !this.wasFired && now - this.lastFireTime > COOLDOWN_MS) {
      this.wasFired     = true
      this.lastFireTime = now
      return {
        type:           fireType,
        confidence:     1.0,
        timestamp:      now,
        handData:       hand,
        anchorPosition: lm[HandLandmark.WRIST],
      }
    }

    return null
  }

  /** 0–1 progress through current hold (enter or exit). Useful for charge ring in HUD. */
  getHoldProgress(): number {
    if (!this.holding || this.wasFired) return 0
    const holdMs = this.domainIsActive ? EXIT_HOLD_MS : ENTER_HOLD_MS
    return Math.min((performance.now() - this.holdStartTime) / holdMs, 1)
  }

  private reset(): void {
    this.holding       = false
    this.wasFired      = false
    this.holdStartTime = 0
  }
}
