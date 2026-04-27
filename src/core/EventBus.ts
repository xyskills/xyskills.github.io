import type { HandData } from '@/types/hand'
import type { GestureEvent } from '@/types/gesture'
import type { AbilityState } from '@/types/ability'
import type { FaceData } from '@/types/face'

export interface EventMap {
  handUpdate: HandData[]
  gestureDetected: GestureEvent
  abilityStateChange: { abilityName: string; state: AbilityState }
  faceUpdate: FaceData | null
}

type Handler<T> = (payload: T) => void

export class EventBus {
  private listeners: Map<string, Set<Handler<unknown>>> = new Map()

  on<K extends keyof EventMap>(event: K, handler: Handler<EventMap[K]>): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event)!.add(handler as Handler<unknown>)
  }

  off<K extends keyof EventMap>(event: K, handler: Handler<EventMap[K]>): void {
    this.listeners.get(event)?.delete(handler as Handler<unknown>)
  }

  emit<K extends keyof EventMap>(event: K, payload: EventMap[K]): void {
    this.listeners.get(event)?.forEach((handler) => {
      handler(payload)
    })
  }
}
