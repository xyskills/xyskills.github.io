import type { HandData, LandmarkPoint } from '@/types/hand'
import { HandLandmark } from '@/types/hand'
import { midpoint } from './math'

const FINGER_TIPS = [
  HandLandmark.INDEX_FINGER_TIP,
  HandLandmark.MIDDLE_FINGER_TIP,
  HandLandmark.RING_FINGER_TIP,
  HandLandmark.PINKY_TIP,
  HandLandmark.THUMB_TIP,
]

const FINGER_PIPS = [
  HandLandmark.INDEX_FINGER_PIP,
  HandLandmark.MIDDLE_FINGER_PIP,
  HandLandmark.RING_FINGER_PIP,
  HandLandmark.PINKY_PIP,
  HandLandmark.THUMB_IP,
]

export function isFingerExtended(landmarks: LandmarkPoint[], tip: HandLandmark, pip: HandLandmark): boolean {
  return landmarks[tip].y < landmarks[pip].y
}

export function countExtendedFingers(landmarks: LandmarkPoint[]): number {
  let count = 0
  for (let i = 0; i < 4; i++) {
    if (isFingerExtended(landmarks, FINGER_TIPS[i], FINGER_PIPS[i])) count++
  }
  return count
}

export function getHighestFingerTip(landmarks: LandmarkPoint[]): LandmarkPoint {
  let best = landmarks[HandLandmark.INDEX_FINGER_TIP]
  for (const tip of FINGER_TIPS) {
    if (landmarks[tip].y < best.y) {
      best = landmarks[tip]
    }
  }
  return best
}

export function getAnyExtendedFingerTip(landmarks: LandmarkPoint[]): LandmarkPoint {
  for (let i = 0; i < 4; i++) {
    if (isFingerExtended(landmarks, FINGER_TIPS[i], FINGER_PIPS[i])) {
      return landmarks[FINGER_TIPS[i]]
    }
  }
  return getHighestFingerTip(landmarks)
}

export function getPalmCenter(landmarks: LandmarkPoint[]): LandmarkPoint {
  return midpoint(landmarks[HandLandmark.WRIST], landmarks[HandLandmark.MIDDLE_FINGER_MCP])
}

export function getPinchMidpoint(landmarks: LandmarkPoint[]): LandmarkPoint {
  return midpoint(landmarks[HandLandmark.THUMB_TIP], landmarks[HandLandmark.INDEX_FINGER_TIP])
}

export function getPinchDistance(landmarks: LandmarkPoint[]): number {
  const t = landmarks[HandLandmark.THUMB_TIP]
  const i = landmarks[HandLandmark.INDEX_FINGER_TIP]
  const dx = t.x - i.x, dy = t.y - i.y
  return Math.sqrt(dx * dx + dy * dy)
}

/**
 * Hand size reference: wrist → middle finger MCP distance.
 * Used to normalize pinch distance so thresholds are camera-angle independent.
 */
export function getHandSize(landmarks: LandmarkPoint[]): number {
  const w = landmarks[HandLandmark.WRIST]
  const m = landmarks[HandLandmark.MIDDLE_FINGER_MCP]
  const dx = w.x - m.x, dy = w.y - m.y
  return Math.sqrt(dx * dx + dy * dy)
}

/**
 * Pinch distance normalized by hand size (0 = fully pinched, ~1+ = wide open).
 * This is robust to camera distance and angle.
 */
export function getNormalizedPinchDistance(landmarks: LandmarkPoint[]): number {
  const pinch = getPinchDistance(landmarks)
  const hand  = getHandSize(landmarks)
  if (hand < 0.001) return 0
  return pinch / hand
}

export function getHandByType(hands: HandData[], handedness: 'Left' | 'Right'): HandData | undefined {
  return hands.find((h) => h.handedness === handedness)
}

// 2D direction the palm faces (perpendicular to palm surface projected on screen).
// Palm up → ~(0,-1), palm sideways → ~(±1,0).
export function getPalmFacingDirection(landmarks: LandmarkPoint[]): { x: number; y: number } {
  const indexMcp  = landmarks[HandLandmark.INDEX_FINGER_MCP]
  const pinkyMcp  = landmarks[HandLandmark.PINKY_MCP]
  const wrist     = landmarks[HandLandmark.WRIST]
  const middleMcp = landmarks[HandLandmark.MIDDLE_FINGER_MCP]

  // Palm width vector: index knuckle → pinky knuckle
  const wx = pinkyMcp.x - indexMcp.x
  const wy = pinkyMcp.y - indexMcp.y

  // Finger direction: wrist → middle knuckle
  const ux = middleMcp.x - wrist.x
  const uy = middleMcp.y - wrist.y

  // Perpendicular to width, aligned with finger direction
  let nx = -wy, ny = wx
  if (nx * ux + ny * uy < 0) { nx = -nx; ny = -ny }

  const len = Math.sqrt(nx * nx + ny * ny)
  if (len < 0.001) return { x: 0, y: -1 }
  return { x: nx / len, y: ny / len }
}
