import { Gesture } from './Gesture'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData, LandmarkPoint } from '@/types/hand'
import { HandLandmark } from '@/types/hand'
import { getHandByType, getHighestFingerTip, getNormalizedPinchDistance } from '@/utils/landmark-utils'

/**
 * Three-gate shoot gesture (research-validated, false-positive resistant):
 *
 * Gate 1  IDLE → PINCH_HELD
 *   normalizedPinch < 0.25 for >= 4 frames
 *
 * Gate 2  PINCH_HELD → THROWING
 *   wrist speed (screen-space, 3-frame smoothed) > 0.40 units/s
 *
 * Gate 3  THROWING → FIRE (must happen within 200ms)
 *   finger spread ratio > 1.8× the spread recorded at pinch entry
 *   AND spread direction aligns with wrist motion (dot > 0.5)
 *
 * Eliminates:
 *   - Hand open while stationary     → fails Gate 2
 *   - Fast wave without pinch first  → fails Gate 1
 *   - Pinch + fast move, fingers stay curled → fails Gate 3 spread ratio
 *   - Pinch + fast move + fingers open sideways → fails alignment dot
 */

type FlickState = 'IDLE' | 'PINCH_HELD' | 'THROWING'

const PINCH_NORM_THRESHOLD  = 0.25
const MIN_PINCH_FRAMES       = 4
const WRIST_SPEED_THRESHOLD  = 0.40
const SPREAD_RATIO_THRESHOLD = 1.8
const ALIGNMENT_DOT_MIN      = 0.50
const THROW_WINDOW_MS        = 200
const COOLDOWN_MS            = 600
const VEL_SMOOTH_FRAMES      = 3
const WRIST_BUFFER_SIZE      = 6

export class FingerFlickGesture extends Gesture {
  readonly type: GestureType
  readonly name: string
  private handSide: 'Left' | 'Right'

  private state: FlickState = 'IDLE'
  private pinchFrames   = 0
  private throwingAt    = 0          // performance.now() when entered THROWING
  private lastFireTime  = 0

  // Snapshot recorded at the moment pinch was confirmed
  private pinchSpread    = 0
  private pinchIndexTip  = { x: 0, y: 0 }

  // Wrist ring buffer for smoothed velocity
  private wristBuffer: LandmarkPoint[] = []
  private velHistory: { x: number; y: number }[] = []

  constructor(handSide: 'Left' | 'Right') {
    super()
    this.handSide = handSide
    this.type = handSide === 'Left' ? GestureType.FINGER_FLICK_LEFT : GestureType.FINGER_FLICK_RIGHT
    this.name = `${handSide} Finger Flick`
  }

  detect(hands: HandData[], deltaTime: number): GestureEvent | null {
    const hand = getHandByType(hands, this.handSide)
    if (!hand) { this._reset(); return null }

    const lm  = hand.landmarks    // screen-space for 2D motion
    const wlm = hand.worldLandmarks  // metric-space for pose measurements
    const dt  = deltaTime > 0 ? deltaTime : 1 / 60

    // ── Wrist ring buffer + smoothed velocity ──
    const wrist = lm[HandLandmark.WRIST]
    this.wristBuffer.push({ ...wrist })
    if (this.wristBuffer.length > WRIST_BUFFER_SIZE) this.wristBuffer.shift()

    if (this.wristBuffer.length >= 2) {
      const prev = this.wristBuffer[this.wristBuffer.length - 2]
      const cur  = this.wristBuffer[this.wristBuffer.length - 1]
      this.velHistory.push({ x: (cur.x - prev.x) / dt, y: (cur.y - prev.y) / dt })
      if (this.velHistory.length > VEL_SMOOTH_FRAMES) this.velHistory.shift()
    }

    // Smoothed velocity = average of last N velocity vectors
    const smoothVel = { x: 0, y: 0 }
    for (const v of this.velHistory) { smoothVel.x += v.x; smoothVel.y += v.y }
    if (this.velHistory.length > 0) {
      smoothVel.x /= this.velHistory.length
      smoothVel.y /= this.velHistory.length
    }
    const wristSpeed = Math.sqrt(smoothVel.x ** 2 + smoothVel.y ** 2)

    // Finger spread: avg distance of 4 finger tips from palm center (world landmarks)
    const palmCenter = wlm[HandLandmark.MIDDLE_FINGER_MCP]
    const tipIds     = [HandLandmark.INDEX_FINGER_TIP, HandLandmark.MIDDLE_FINGER_TIP,
                        HandLandmark.RING_FINGER_TIP,  HandLandmark.PINKY_TIP]
    let spread = 0
    for (const id of tipIds) {
      const t = wlm[id]
      const dx = t.x - palmCenter.x, dy = t.y - palmCenter.y, dz = t.z - palmCenter.z
      spread += Math.sqrt(dx * dx + dy * dy + dz * dz)
    }
    spread /= tipIds.length

    // Normalized pinch distance (camera-distance agnostic)
    const normPinch = getNormalizedPinchDistance(lm)

    // ════════════════════════════════════
    //  State machine
    // ════════════════════════════════════

    switch (this.state) {

      case 'IDLE':
        if (normPinch < PINCH_NORM_THRESHOLD) {
          this.pinchFrames++
          if (this.pinchFrames >= MIN_PINCH_FRAMES) {
            // Gate 1 passed — record pose snapshot and advance
            this.state       = 'PINCH_HELD'
            this.pinchSpread = spread
            this.pinchIndexTip = { x: lm[HandLandmark.INDEX_FINGER_TIP].x,
                                    y: lm[HandLandmark.INDEX_FINGER_TIP].y }
          }
        } else {
          this.pinchFrames = 0
        }
        break

      case 'PINCH_HELD':
        if (normPinch < PINCH_NORM_THRESHOLD + 0.05) {
          // Still pinched — update snapshot
          this.pinchSpread   = spread
          this.pinchIndexTip = { x: lm[HandLandmark.INDEX_FINGER_TIP].x,
                                  y: lm[HandLandmark.INDEX_FINGER_TIP].y }
        }

        if (wristSpeed > WRIST_SPEED_THRESHOLD) {
          // Gate 2 passed — hand is moving, enter throwing window
          this.state      = 'THROWING'
          this.throwingAt = performance.now()
        } else if (normPinch >= PINCH_NORM_THRESHOLD + 0.10) {
          // Quietly released without throwing — back to idle
          this._resetState()
        }
        break

      case 'THROWING': {
        const elapsed = performance.now() - this.throwingAt

        if (elapsed > THROW_WINDOW_MS) {
          // Window expired without firing — reset
          this._resetState()
          break
        }

        const spreadRatio = this.pinchSpread > 0 ? spread / this.pinchSpread : 0

        if (spreadRatio > SPREAD_RATIO_THRESHOLD) {
          // Check alignment: finger extension direction vs wrist motion direction
          const extDx = lm[HandLandmark.INDEX_FINGER_TIP].x - this.pinchIndexTip.x
          const extDy = lm[HandLandmark.INDEX_FINGER_TIP].y - this.pinchIndexTip.y
          const extLen = Math.sqrt(extDx ** 2 + extDy ** 2)

          const velLen = Math.sqrt(smoothVel.x ** 2 + smoothVel.y ** 2)
          let dot = 0
          if (extLen > 0.001 && velLen > 0.001) {
            dot = (extDx / extLen) * (smoothVel.x / velLen)
                + (extDy / extLen) * (smoothVel.y / velLen)
          }

          if (dot > ALIGNMENT_DOT_MIN) {
            const now = performance.now()
            if (now - this.lastFireTime > COOLDOWN_MS) {
              this.lastFireTime = now
              this._reset()
              return {
                type:          this.type,
                confidence:    Math.min(spreadRatio / (SPREAD_RATIO_THRESHOLD * 1.5), 1),
                timestamp:     now,
                handData:      hand,
                anchorPosition: getHighestFingerTip(lm),
                direction:     { x: smoothVel.x / velLen, y: smoothVel.y / velLen, z: 0 },
              }
            }
          }
        }
        break
      }
    }

    return null
  }

  private _resetState(): void {
    this.state       = 'IDLE'
    this.pinchFrames = 0
  }

  private _reset(): void {
    this.state        = 'IDLE'
    this.pinchFrames  = 0
    this.wristBuffer  = []
    this.velHistory   = []
    this.pinchSpread  = 0
  }
}
