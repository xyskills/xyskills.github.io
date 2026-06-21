export type EffectAbility = 'blue' | 'red' | 'purple'

export interface EffectEvent {
  t: number             // ms since log start
  type: 'spawn' | 'position' | 'dissipate' | 'domain' | 'domain_end' | 'shoot'
  ability?: EffectAbility
  ax?: number           // normalized landmark anchor x (0-1)
  ay?: number           // normalized landmark anchor y (0-1)
  az?: number
  depth?: number        // depthScale for this frame
}

export class EventLog {
  private events: EffectEvent[] = []
  private startMs = 0
  private _active = false
  private posFrame = 0

  start(): void {
    this.events = []
    this.startMs = performance.now()
    this._active = true
    this.posFrame = 0
  }

  stop(): EffectEvent[] {
    this._active = false
    return [...this.events]
  }

  get active(): boolean { return this._active }

  logSpawn(ability: EffectAbility, ax: number, ay: number, az: number): void {
    if (!this._active) return
    this.events.push({ t: performance.now() - this.startMs, type: 'spawn', ability, ax, ay, az })
  }

  logPosition(ability: EffectAbility, ax: number, ay: number, az: number, depth: number): void {
    if (!this._active) return
    // Record every other frame (~15fps) to cap memory usage
    this.posFrame++
    if (this.posFrame % 2 !== 0) return
    this.events.push({ t: performance.now() - this.startMs, type: 'position', ability, ax, ay, az, depth })
  }

  logDissipate(ability: EffectAbility): void {
    if (!this._active) return
    this.events.push({ t: performance.now() - this.startMs, type: 'dissipate', ability })
  }

  logDomain(active: boolean): void {
    if (!this._active) return
    this.events.push({ t: performance.now() - this.startMs, type: active ? 'domain' : 'domain_end' })
  }

  logShoot(ax: number, ay: number): void {
    if (!this._active) return
    this.events.push({ t: performance.now() - this.startMs, type: 'shoot', ax, ay })
  }
}
