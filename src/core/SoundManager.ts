/**
 * Synthesized sound effects matching JJK anime.
 *
 * Blue  — gravitational implosion: deep vacuum pull, eerie cold shimmer
 * Red   — explosive reversal: violent burst, distorted growl, crackling fire
 * Purple — electromagnetic storm: massive sub-bass, crackling electricity,
 *          metallic resonance, reality-tearing rumble (like a thunderstorm)
 * Shoot  — projectile launch: sharp whoosh + sonic boom
 * Domain — Infinite Void activation: deep reality crack, reverse reverb swell
 */

type SoundName = 'blue' | 'red' | 'purple' | 'shoot' | 'domain'

export class SoundManager {
  private audioContext: AudioContext | null = null
  private cooldowns: Map<SoundName, number> = new Map()
  private cooldownMs = 300
  private convolver: ConvolverNode | null = null

  private getContext(): AudioContext {
    if (!this.audioContext) this.audioContext = new AudioContext()
    return this.audioContext
  }

  private getReverb(ctx: AudioContext): ConvolverNode {
    if (!this.convolver) {
      const sr = ctx.sampleRate
      const len = sr * 2.2
      const buf = ctx.createBuffer(2, len, sr)
      for (let ch = 0; ch < 2; ch++) {
        const d = buf.getChannelData(ch)
        for (let i = 0; i < len; i++) {
          const t = i / sr
          d[i] = (Math.random() * 2 - 1) * Math.exp(-t * 3.0) * (1 + 0.6 * Math.exp(-t * 18))
        }
      }
      this.convolver = ctx.createConvolver()
      this.convolver.buffer = buf
    }
    return this.convolver
  }

  play(name: SoundName): void {
    const now = performance.now()
    const last = this.cooldowns.get(name) ?? 0
    if (now - last < this.cooldownMs) return
    this.cooldowns.set(name, now)

    try {
      const ctx = this.getContext()
      if (ctx.state === 'suspended') ctx.resume()

      switch (name) {
        case 'blue':   this.playBlue(ctx); break
        case 'red':    this.playRed(ctx); break
        case 'purple': this.playPurple(ctx); break
        case 'shoot':  this.playShoot(ctx); break
        case 'domain': this.playDomain(ctx); break
      }
    } catch { /* audio not available */ }
  }

  // ── BLUE: Gravitational void opening ──
  private playBlue(ctx: AudioContext): void {
    const t = ctx.currentTime
    const master = this.chain(ctx, 0.25, t, 1.6)

    // Deep sub pull — descending sine
    this.osc(ctx, master, 'sine', t, 1.5,
      [[110, t], [50, t + 0.8], [35, t + 1.4]],
      [[0.4, t], [0.5, t + 0.3], [0.01, t + 1.5]])

    // Eerie cold sweep — triangle through bandpass
    const sweepFilter = ctx.createBiquadFilter()
    sweepFilter.type = 'bandpass'
    sweepFilter.frequency.setValueAtTime(600, t)
    sweepFilter.frequency.exponentialRampToValueAtTime(180, t + 1.0)
    sweepFilter.Q.value = 4
    this.oscThrough(ctx, master, 'triangle', t, 1.2,
      [[800, t], [180, t + 0.5], [130, t + 1.1]],
      [[0, t], [0.14, t + 0.1], [0.01, t + 1.2]],
      sweepFilter)

    // Harmonic shimmer
    this.osc(ctx, master, 'sine', t, 1.0,
      [[440, t], [660, t + 0.3], [300, t + 0.9]],
      [[0, t], [0.06, t + 0.15], [0.01, t + 1.0]])

    // Vacuum whoosh — highpass noise
    this.noise(ctx, master, t, 1.2, 'highpass', 300, 1, 0.10,
      [[300, t], [70, t + 1.0]])

    // Implosion thud — lowpass noise
    this.noise(ctx, master, t + 0.02, 0.15, 'lowpass', 200, 2, 0.28)
  }

  // ── RED: Explosive reversal ──
  private playRed(ctx: AudioContext): void {
    const t = ctx.currentTime
    const master = this.chain(ctx, 0.30, t, 1.4)

    // Impact hit — distorted sawtooth
    const dist = ctx.createWaveShaper()
    dist.curve = this.distCurve(200)
    dist.oversample = '4x'
    const lpf = ctx.createBiquadFilter()
    lpf.type = 'lowpass'
    lpf.frequency.value = 400
    this.oscThrough(ctx, master, 'sawtooth', t, 0.25,
      [[200, t], [55, t + 0.15]],
      [[0.5, t], [0.01, t + 0.25]],
      dist, lpf)

    // Growling reversal tone
    const growlF = ctx.createBiquadFilter()
    growlF.type = 'lowpass'
    growlF.frequency.setValueAtTime(300, t)
    growlF.frequency.linearRampToValueAtTime(800, t + 0.15)
    growlF.frequency.exponentialRampToValueAtTime(180, t + 1.0)
    growlF.Q.value = 5
    this.oscThrough(ctx, master, 'sawtooth', t, 1.2,
      [[75, t], [150, t + 0.2], [85, t + 0.8]],
      [[0, t], [0.20, t + 0.05], [0.01, t + 1.2]],
      growlF)

    // Crackle — sparse impulse noise
    this.crackle(ctx, master, t, 0.8, 0.14)

    // Burst — bandpass noise
    this.noise(ctx, master, t, 0.3, 'bandpass', 2000, 0.5, 0.18,
      [[2000, t], [350, t + 0.3]])

    // Low boom
    this.noise(ctx, master, t, 0.2, 'lowpass', 140, 3, 0.32)
  }

  // ── PURPLE: Electromagnetic storm (the real JJK sound) ──
  private playPurple(ctx: AudioContext): void {
    const t = ctx.currentTime
    const master = this.chain(ctx, 0.30, t, 3.0, 0.5)

    // Massive sub-bass — the chest-rumbling foundation
    this.osc(ctx, master, 'sine', t, 2.5,
      [[30, t], [45, t + 0.5], [25, t + 2.0]],
      [[0, t], [0.55, t + 0.3], [0.01, t + 2.4]])

    // Detuned drones — beating interference pattern (electromagnetic hum)
    for (const detune of [-12, 12]) {
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.type = 'sine'
      o.frequency.setValueAtTime(100, t)
      o.frequency.exponentialRampToValueAtTime(75, t + 1.8)
      o.detune.value = detune
      g.gain.setValueAtTime(0, t)
      g.gain.linearRampToValueAtTime(0.14, t + 0.2)
      g.gain.exponentialRampToValueAtTime(0.01, t + 2.2)
      o.connect(g).connect(master)
      o.start(t); o.stop(t + 2.2)
    }

    // Crackling electricity — the signature purple sound
    // Multiple crackle layers at different densities
    this.crackle(ctx, master, t, 2.0, 0.18, 0.04, 1800) // dense high crackle
    this.crackle(ctx, master, t + 0.1, 1.8, 0.12, 0.02, 3000) // sparse bright sparks

    // Electrical zap arcs — rapid bandpass noise bursts
    for (let i = 0; i < 4; i++) {
      const delay = 0.1 + Math.random() * 1.0
      this.noise(ctx, master, t + delay, 0.08 + Math.random() * 0.06,
        'bandpass', 2500 + Math.random() * 2000, 3, 0.10 + Math.random() * 0.08)
    }

    // Metallic resonance — FM synthesis shimmer
    const carrier = ctx.createOscillator()
    const mod = ctx.createOscillator()
    const modG = ctx.createGain()
    const carG = ctx.createGain()
    mod.frequency.setValueAtTime(380, t)
    mod.frequency.exponentialRampToValueAtTime(200, t + 1.8)
    modG.gain.setValueAtTime(350, t)
    modG.gain.exponentialRampToValueAtTime(40, t + 1.8)
    carrier.frequency.setValueAtTime(280, t)
    carrier.frequency.exponentialRampToValueAtTime(140, t + 1.8)
    carG.gain.setValueAtTime(0, t)
    carG.gain.linearRampToValueAtTime(0.07, t + 0.2)
    carG.gain.exponentialRampToValueAtTime(0.01, t + 2.0)
    mod.connect(modG).connect(carrier.frequency)
    carrier.connect(carG).connect(master)
    mod.start(t); carrier.start(t)
    mod.stop(t + 2.0); carrier.stop(t + 2.0)

    // High whistle — space warping / eerie tone
    const whistleF = ctx.createBiquadFilter()
    whistleF.type = 'bandpass'
    whistleF.frequency.setValueAtTime(1400, t)
    whistleF.Q.value = 6
    this.oscThrough(ctx, master, 'sine', t, 2.2,
      [[1100, t], [750, t + 0.5], [1800, t + 1.2], [550, t + 2.0]],
      [[0, t], [0.04, t + 0.3], [0.01, t + 2.0]],
      whistleF)

    // Reality-tearing rumble — sustained lowpass noise
    this.noise(ctx, master, t, 2.5, 'lowpass', 100, 1.5, 0.22)

    // Thunderclap crack at onset
    this.noise(ctx, master, t + 0.05, 0.12, 'bandpass', 3500, 2, 0.15)
  }

  // ── SHOOT: Projectile launch ──
  private playShoot(ctx: AudioContext): void {
    const t = ctx.currentTime
    const master = this.chain(ctx, 0.35, t, 1.0)

    // Fast descending sweep
    const sweepF = ctx.createBiquadFilter()
    sweepF.type = 'lowpass'
    sweepF.frequency.setValueAtTime(3000, t)
    sweepF.frequency.exponentialRampToValueAtTime(180, t + 0.4)
    this.oscThrough(ctx, master, 'sawtooth', t, 0.5,
      [[1200, t], [70, t + 0.4]],
      [[0.2, t], [0.01, t + 0.5]],
      sweepF)

    // Punch impact
    this.osc(ctx, master, 'sine', t, 0.15,
      [[150, t], [28, t + 0.12]],
      [[0.4, t], [0.01, t + 0.15]])

    // Air displacement
    this.noise(ctx, master, t, 0.35, 'highpass', 800, 0.5, 0.22,
      [[800, t], [180, t + 0.3]])

    // Low thump
    this.noise(ctx, master, t, 0.1, 'lowpass', 100, 4, 0.32)
  }

  // ── DOMAIN: Infinite Void activation ──
  private playDomain(ctx: AudioContext): void {
    const t = ctx.currentTime
    const master = this.chain(ctx, 0.30, t, 4.0, 0.6)

    // Ultra-deep sub — reality cracking open
    this.osc(ctx, master, 'sine', t, 3.5,
      [[20, t], [35, t + 1.0], [18, t + 3.0]],
      [[0, t], [0.6, t + 0.5], [0.01, t + 3.5]])

    // Reverse reverb swell — ascending filtered noise
    this.noise(ctx, master, t, 3.0, 'bandpass', 200, 2, 0.15,
      [[200, t], [1500, t + 1.5], [400, t + 3.0]])

    // Detuned choir-like drones
    for (const freq of [55, 82.5, 110]) {
      for (const det of [-6, 6]) {
        const o = ctx.createOscillator()
        const g = ctx.createGain()
        o.type = 'sine'
        o.frequency.value = freq
        o.detune.value = det
        g.gain.setValueAtTime(0, t)
        g.gain.linearRampToValueAtTime(0.06, t + 1.0)
        g.gain.exponentialRampToValueAtTime(0.01, t + 3.5)
        o.connect(g).connect(master)
        o.start(t); o.stop(t + 3.5)
      }
    }

    // Metallic ring — like a gong
    const gongF = ctx.createBiquadFilter()
    gongF.type = 'bandpass'
    gongF.frequency.value = 800
    gongF.Q.value = 12
    this.oscThrough(ctx, master, 'triangle', t + 0.5, 2.5,
      [[800, t + 0.5], [600, t + 2.0]],
      [[0, t + 0.5], [0.08, t + 0.6], [0.01, t + 3.0]],
      gongF)

    // Sustained wind/void rumble
    this.noise(ctx, master, t, 3.5, 'lowpass', 80, 1, 0.20)

    // Sharp crack at start
    this.noise(ctx, master, t, 0.08, 'highpass', 4000, 1, 0.20)
  }

  // ── Helpers ──

  /** Create master gain → reverb chain, returns the master gain node. */
  private chain(ctx: AudioContext, vol: number, t: number, dur: number, wetMix = 0.4): GainNode {
    const master = ctx.createGain()
    master.gain.setValueAtTime(0, t)
    master.gain.linearRampToValueAtTime(vol, t + Math.min(dur * 0.1, 0.15))
    master.gain.setValueAtTime(vol, t + dur * 0.4)
    master.gain.exponentialRampToValueAtTime(0.001, t + dur)

    const dry = ctx.createGain()
    dry.gain.value = 1 - wetMix * 0.3
    const wet = ctx.createGain()
    wet.gain.value = wetMix
    master.connect(dry).connect(ctx.destination)
    master.connect(this.getReverb(ctx)).connect(wet).connect(ctx.destination)
    return master
  }

  /** Simple oscillator with frequency + gain envelopes. */
  private osc(
    ctx: AudioContext, dest: AudioNode, type: OscillatorType,
    start: number, dur: number,
    freqs: [number, number][],
    gains: [number, number][],
  ): void {
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = type
    for (const [val, time] of freqs) {
      if (time === freqs[0][1]) o.frequency.setValueAtTime(val, time)
      else o.frequency.exponentialRampToValueAtTime(Math.max(val, 0.01), time)
    }
    for (const [val, time] of gains) {
      if (val < 0.002) g.gain.exponentialRampToValueAtTime(0.001, time)
      else if (time === gains[0][1]) g.gain.setValueAtTime(val, time)
      else g.gain.linearRampToValueAtTime(val, time)
    }
    o.connect(g).connect(dest)
    o.start(start); o.stop(start + dur)
  }

  /** Oscillator routed through filter chain. */
  private oscThrough(
    ctx: AudioContext, dest: AudioNode, type: OscillatorType,
    start: number, dur: number,
    freqs: [number, number][],
    gains: [number, number][],
    ...filters: AudioNode[]
  ): void {
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = type
    for (const [val, time] of freqs) {
      if (time === freqs[0][1]) o.frequency.setValueAtTime(val, time)
      else o.frequency.exponentialRampToValueAtTime(Math.max(val, 0.01), time)
    }
    for (const [val, time] of gains) {
      if (val < 0.002) g.gain.exponentialRampToValueAtTime(0.001, time)
      else if (time === gains[0][1]) g.gain.setValueAtTime(val, time)
      else g.gain.linearRampToValueAtTime(val, time)
    }
    let node: AudioNode = o
    for (const f of filters) { node = node.connect(f) }
    node.connect(g).connect(dest)
    o.start(start); o.stop(start + dur)
  }

  /** Filtered noise burst. */
  private noise(
    ctx: AudioContext, dest: AudioNode,
    start: number, dur: number,
    type: BiquadFilterType, freq: number, Q: number, vol: number,
    freqEnv?: [number, number][],
  ): void {
    const len = Math.floor(ctx.sampleRate * dur)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.exp(-(i / len) * 4)
    }
    const src = ctx.createBufferSource()
    src.buffer = buf
    const f = ctx.createBiquadFilter()
    f.type = type
    f.frequency.setValueAtTime(freq, start)
    f.Q.setValueAtTime(Q, start)
    if (freqEnv) {
      for (const [val, time] of freqEnv) {
        if (time === freqEnv[0][1]) f.frequency.setValueAtTime(val, time)
        else f.frequency.exponentialRampToValueAtTime(Math.max(val, 1), time)
      }
    }
    const g = ctx.createGain()
    g.gain.setValueAtTime(vol, start)
    g.gain.exponentialRampToValueAtTime(0.001, start + dur)
    src.connect(f).connect(g).connect(dest)
    src.start(start); src.stop(start + dur)
  }

  /** Crackle: sparse random impulses through highpass. */
  private crackle(
    ctx: AudioContext, dest: AudioNode,
    start: number, dur: number, vol: number,
    density = 0.02, hpFreq = 2000,
  ): void {
    const len = Math.floor(ctx.sampleRate * dur)
    const buf = ctx.createBuffer(1, len, ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < len; i++) {
      const t = i / len
      d[i] = Math.random() < density
        ? (Math.random() * 2 - 1) * Math.exp(-t * 2)
        : 0
    }
    const src = ctx.createBufferSource()
    src.buffer = buf
    const f = ctx.createBiquadFilter()
    f.type = 'highpass'
    f.frequency.value = hpFreq
    f.Q.value = 1
    const g = ctx.createGain()
    g.gain.setValueAtTime(vol, start)
    g.gain.exponentialRampToValueAtTime(0.001, start + dur)
    src.connect(f).connect(g).connect(dest)
    src.start(start); src.stop(start + dur)
  }

  private distCurve(amount: number): Float32Array {
    const n = 44100
    const c = new Float32Array(n)
    const deg = Math.PI / 180
    for (let i = 0; i < n; i++) {
      const x = (i * 2) / n - 1
      c[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x))
    }
    return c
  }
}
