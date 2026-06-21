import type { LandmarkPoint, HandData } from './hand'

export enum GestureType {
  NONE = 'none',
  LEFT_HAND_RAISED = 'left_hand_raised',
  RIGHT_HAND_RAISED = 'right_hand_raised',
  HANDS_MERGED = 'hands_merged',
  FINGER_FLICK_LEFT = 'finger_flick_left',
  FINGER_FLICK_RIGHT = 'finger_flick_right',
  DOMAIN_EXPANSION = 'domain_expansion',
  DOMAIN_EXIT = 'domain_exit',
}

export interface GestureEvent {
  type: GestureType
  confidence: number
  timestamp: number
  handData?: HandData
  anchorPosition?: LandmarkPoint
  direction?: LandmarkPoint
  /** True during the stability window — ability shows charge buildup but does not spawn yet. */
  charging?: boolean
}
