import * as THREE from 'three'

export const enum EffectPhase { SPAWNING, IDLE, DISSIPATING, DONE }

/**
 * Base class for all renderable effects.
 *
 * Lifecycle: SPAWNING → IDLE → DISSIPATING → DONE
 *
 * Subclasses read `spawnT` (0→1 during spawn) and `dissipateT` (0→1 during
 * dissipate) to drive their own scale/opacity envelopes in `update()`.
 * SceneManager handles keeping dying effects alive until `isDone`.
 */
export abstract class EffectRenderer {
  protected readonly group = new THREE.Group()

  // Distortion / scene properties
  distortionType     = 0    // 0=none, 1=push(blue), -1=pull(red), 2=purple
  distortionStrength = 0
  normalizedPosition = { x: 0.5, y: 0.5 }
  darkenBackground   = false

  // ── Phase lifecycle ────────────────────────────────────────────────────────

  protected phase     = EffectPhase.IDLE as EffectPhase
  protected phaseTime = 0

  /** Override to set spawn animation duration (seconds). */
  protected spawnDur     = 0.50
  /** Override to set dissipate animation duration (seconds). */
  protected dissipateDur = 0.40

  /** 0→1 while SPAWNING, then holds at 1. */
  get spawnT(): number {
    if (this.phase === EffectPhase.SPAWNING)
      return Math.min(this.phaseTime / this.spawnDur, 1)
    return 1
  }

  /** 0 until DISSIPATING begins, then 0→1. */
  get dissipateT(): number {
    if (this.phase === EffectPhase.DISSIPATING)
      return Math.min(this.phaseTime / this.dissipateDur, 1)
    if (this.phase === EffectPhase.DONE) return 1
    return 0
  }

  get isDone(): boolean { return this.phase === EffectPhase.DONE }

  protected tickPhase(dt: number): void {
    this.phaseTime += dt
    if (this.phase === EffectPhase.SPAWNING && this.phaseTime >= this.spawnDur) {
      this.phase = EffectPhase.IDLE
      this.phaseTime = 0
    }
    if (this.phase === EffectPhase.DISSIPATING && this.phaseTime >= this.dissipateDur) {
      this.phase = EffectPhase.DONE
      this.phaseTime = this.dissipateDur
    }
  }

  spawn(): void {
    this.phase     = EffectPhase.SPAWNING
    this.phaseTime = 0
  }

  /** Trigger the dissipate animation. SceneManager calls this then waits for isDone. */
  beginDissipate(): void {
    this.phase     = EffectPhase.DISSIPATING
    this.phaseTime = 0
  }

  /** Async wrapper kept for Ability.onDissipate() compat. */
  async dissipate(): Promise<void> {
    this.beginDissipate()
    await new Promise<void>(res => {
      const check = () => this.isDone ? res() : requestAnimationFrame(check)
      check()
    })
  }

  // ── Shared easing ──────────────────────────────────────────────────────────

  /** Snaps from 0→1 with elastic spring overshoot (great for orb spawn). */
  protected static easeOutElastic(t: number): number {
    if (t <= 0) return 0
    if (t >= 1) return 1
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * Math.PI * 2 / 3) + 1
  }

  /** 0→1 with slight overshoot past 1 then settles (great for Purple spawn). */
  protected static easeOutBack(t: number, overshoot = 1.70158): number {
    const c = overshoot
    return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2)
  }

  /** Accelerating ease: slow start, fast finish. */
  protected static easeIn(t: number, p = 2): number {
    return Math.pow(Math.max(0, Math.min(1, t)), p)
  }

  /** Decelerating ease: fast start, smooth finish. */
  protected static easeOut(t: number, p = 2): number {
    return 1 - Math.pow(1 - Math.max(0, Math.min(1, t)), p)
  }

  // ── Shared glow sprite factory ─────────────────────────────────────────────

  /** Radial-gradient glow sprite. All orb effects share this instead of duplicating it. */
  protected static makeGlowSprite(color: THREE.Color, scale: number): THREE.Sprite {
    const S  = 256
    const cv = document.createElement('canvas')
    cv.width = cv.height = S
    const ctx  = cv.getContext('2d')!
    const [r, g, b] = [color.r, color.g, color.b].map(v => Math.round(v * 255))
    const grad = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2)
    grad.addColorStop(0.00, `rgba(${r},${g},${b},1)`)
    grad.addColorStop(0.15, `rgba(${r},${g},${b},0.78)`)
    grad.addColorStop(0.40, `rgba(${r},${g},${b},0.32)`)
    grad.addColorStop(0.70, `rgba(${r},${g},${b},0.07)`)
    grad.addColorStop(1.00, 'rgba(0,0,0,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, S, S)
    const mat = new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(cv),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0,
    })
    const sp = new THREE.Sprite(mat)
    sp.scale.set(scale, scale, 1)
    return sp
  }

  // ── Abstract interface ─────────────────────────────────────────────────────

  abstract update(deltaTime: number): void
  abstract setPosition(pos: THREE.Vector3): void
  abstract dispose(): void

  getObject3D(): THREE.Group { return this.group }
}
