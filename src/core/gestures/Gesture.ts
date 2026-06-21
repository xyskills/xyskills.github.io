import type { HandData } from '@/types/hand'
import type { GestureEvent, GestureType } from '@/types/gesture'

export abstract class Gesture {
  abstract readonly type: GestureType
  abstract readonly name: string
  abstract detect(hands: HandData[], deltaTime: number): GestureEvent | null
}
