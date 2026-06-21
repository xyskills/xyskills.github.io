import type { Gesture } from './gestures/Gesture'
import type { HandData } from '@/types/hand'
import type { EventBus } from './EventBus'

export class GestureRecognizer {
  private gestures: Gesture[] = []
  private eventBus: EventBus
  private lastTime = performance.now()

  constructor(eventBus: EventBus) {
    this.eventBus = eventBus
    this.eventBus.on('handUpdate', (hands) => this.onHandUpdate(hands))
  }

  registerGesture(gesture: Gesture): void {
    this.gestures.push(gesture)
  }

  private onHandUpdate(hands: HandData[]): void {
    const now = performance.now()
    const deltaTime = (now - this.lastTime) / 1000
    this.lastTime = now

    for (const gesture of this.gestures) {
      const event = gesture.detect(hands, deltaTime)
      if (event) {
        this.eventBus.emit('gestureDetected', event)
      }
    }
  }
}
