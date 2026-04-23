type SoundName = 'blue' | 'red' | 'purple' | 'shoot'

export class SoundManager {
  private audioContext: AudioContext | null = null
  private cooldowns: Map<SoundName, number> = new Map()
  private cooldownMs = 300
  private convolver: ConvolverNode | null = null

  private getContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new AudioContext()
    }
    return this.audioContext
  }

  private getReverb(ctx: AudioContext): ConvolverNode {
    if (!this.convolver) {
      // Create impulse response for reverb
      const sampleRate = ctx.sampleRate
      const length = sampleRate * 1.8
      const impulse = ctx.createBuffer(2, length, sampleRate)
      for (let ch = 0; ch < 2; ch++) {
        const data = impulse.getChannelData(ch)
        for (let i = 0; i < length; i++) {
          const t = i / sampleRate
          // Exponential decay with early reflections
          data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 3.5) * (1 + 0.5 * Math.exp(-t * 20))
        }
      }
      this.convolver = ctx.createConvolver()
      this.convolver.buffer = impulse
    }
    return this.convolver
  }

  play(name: SoundName): void {
    const now = performance.now()
    const lastPlayed = this.cooldowns.get(name) ?? 0
    if (now - lastPlayed < this.cooldownMs) return
    this.cooldowns.set(name, now)

    try {
      const ctx = this.getContext()
      if (ctx.state === 'suspended') {
        ctx.resume()
      }

      switch (name) {
        case 'blue': this.playBlue(ctx); break
        case 'red': this.playRed(ctx); break
        case 'purple': this.playPurple(ctx); break
        case 'shoot': this.playShoot(ctx); break
      }
    } catch {
      // Audio not available
    }
  }

  private playBlue(ctx: AudioContext): void {
    const now = ctx.currentTime
    const master = ctx.createGain()
    master.gain.setValueAtTime(0, now)
    master.gain.linearRampToValueAtTime(0.25, now + 0.08)
    master.gain.setValueAtTime(0.25, now + 0.6)
    master.gain.exponentialRampToValueAtTime(0.001, now + 1.6)

    const reverb = this.getReverb(ctx)
    const dry = ctx.createGain()
    dry.gain.value = 0.7
    const wet = ctx.createGain()
    wet.gain.value = 0.4
    master.connect(dry).connect(ctx.destination)
    master.connect(reverb).connect(wet).connect(ctx.destination)

    // Deep gravitational pull - descending sub bass
    const sub = ctx.createOscillator()
    const subGain = ctx.createGain()
    sub.type = 'sine'
    sub.frequency.setValueAtTime(120, now)
    sub.frequency.exponentialRampToValueAtTime(55, now + 0.8)
    sub.frequency.setValueAtTime(55, now + 0.8)
    sub.frequency.exponentialRampToValueAtTime(40, now + 1.5)
    subGain.gain.setValueAtTime(0.4, now)
    subGain.gain.linearRampToValueAtTime(0.5, now + 0.3)
    subGain.gain.exponentialRampToValueAtTime(0.01, now + 1.5)
    sub.connect(subGain).connect(master)
    sub.start(now)
    sub.stop(now + 1.5)

    // Eerie tonal sweep - the "void opening" sound
    const sweep = ctx.createOscillator()
    const sweepGain = ctx.createGain()
    const sweepFilter = ctx.createBiquadFilter()
    sweep.type = 'triangle'
    sweep.frequency.setValueAtTime(800, now)
    sweep.frequency.exponentialRampToValueAtTime(200, now + 0.5)
    sweep.frequency.exponentialRampToValueAtTime(150, now + 1.2)
    sweepFilter.type = 'bandpass'
    sweepFilter.frequency.setValueAtTime(600, now)
    sweepFilter.frequency.exponentialRampToValueAtTime(200, now + 1.0)
    sweepFilter.Q.value = 3
    sweepGain.gain.setValueAtTime(0, now)
    sweepGain.gain.linearRampToValueAtTime(0.15, now + 0.1)
    sweepGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2)
    sweep.connect(sweepFilter).connect(sweepGain).connect(master)
    sweep.start(now)
    sweep.stop(now + 1.2)

    // Harmonic shimmer - cold ethereal tone
    const shimmer = ctx.createOscillator()
    const shimmerGain = ctx.createGain()
    shimmer.type = 'sine'
    shimmer.frequency.setValueAtTime(440, now)
    shimmer.frequency.exponentialRampToValueAtTime(660, now + 0.3)
    shimmer.frequency.exponentialRampToValueAtTime(330, now + 1.0)
    shimmerGain.gain.setValueAtTime(0, now)
    shimmerGain.gain.linearRampToValueAtTime(0.06, now + 0.15)
    shimmerGain.gain.exponentialRampToValueAtTime(0.01, now + 1.0)
    shimmer.connect(shimmerGain).connect(master)
    shimmer.start(now)
    shimmer.stop(now + 1.0)

    // Sucking whoosh - filtered noise
    const whoosh = this.createFilteredNoise(ctx, now, 1.2, {
      type: 'highpass',
      frequency: 300,
      frequencyEnd: 80,
      Q: 1,
      volume: 0.12,
    })
    whoosh.connect(master)

    // Implosion thud
    const thud = this.createFilteredNoise(ctx, now + 0.02, 0.15, {
      type: 'lowpass',
      frequency: 200,
      Q: 2,
      volume: 0.3,
    })
    thud.connect(master)
  }

  private playRed(ctx: AudioContext): void {
    const now = ctx.currentTime
    const master = ctx.createGain()
    master.gain.setValueAtTime(0, now)
    master.gain.linearRampToValueAtTime(0.3, now + 0.03)
    master.gain.setValueAtTime(0.3, now + 0.5)
    master.gain.exponentialRampToValueAtTime(0.001, now + 1.4)

    const reverb = this.getReverb(ctx)
    const dry = ctx.createGain()
    dry.gain.value = 0.75
    const wet = ctx.createGain()
    wet.gain.value = 0.35
    master.connect(dry).connect(ctx.destination)
    master.connect(reverb).connect(wet).connect(ctx.destination)

    // Aggressive explosion hit
    const impact = ctx.createOscillator()
    const impactGain = ctx.createGain()
    impact.type = 'sawtooth'
    impact.frequency.setValueAtTime(200, now)
    impact.frequency.exponentialRampToValueAtTime(60, now + 0.15)
    impactGain.gain.setValueAtTime(0.5, now)
    impactGain.gain.exponentialRampToValueAtTime(0.01, now + 0.25)
    const distortion = ctx.createWaveShaper()
    // @ts-expect-error Float32Array buffer type mismatch
    distortion.curve = this.makeDistortionCurve(200)
    distortion.oversample = '4x'
    const impactFilter = ctx.createBiquadFilter()
    impactFilter.type = 'lowpass'
    impactFilter.frequency.value = 400
    impact.connect(distortion).connect(impactFilter).connect(impactGain).connect(master)
    impact.start(now)
    impact.stop(now + 0.25)

    // Growling sustained tone - the reversal energy
    const growl = ctx.createOscillator()
    const growlGain = ctx.createGain()
    const growlFilter = ctx.createBiquadFilter()
    growl.type = 'sawtooth'
    growl.frequency.setValueAtTime(80, now)
    growl.frequency.exponentialRampToValueAtTime(150, now + 0.2)
    growl.frequency.exponentialRampToValueAtTime(90, now + 0.8)
    growlFilter.type = 'lowpass'
    growlFilter.frequency.setValueAtTime(300, now)
    growlFilter.frequency.linearRampToValueAtTime(800, now + 0.15)
    growlFilter.frequency.exponentialRampToValueAtTime(200, now + 1.0)
    growlFilter.Q.value = 4
    growlGain.gain.setValueAtTime(0, now)
    growlGain.gain.linearRampToValueAtTime(0.2, now + 0.05)
    growlGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2)
    growl.connect(growlFilter).connect(growlGain).connect(master)
    growl.start(now)
    growl.stop(now + 1.2)

    // Crackling fire noise
    const crackle = this.createCrackleNoise(ctx, now, 0.8, 0.15)
    crackle.connect(master)

    // Explosion burst noise
    const burst = this.createFilteredNoise(ctx, now, 0.3, {
      type: 'bandpass',
      frequency: 2000,
      frequencyEnd: 400,
      Q: 0.5,
      volume: 0.2,
    })
    burst.connect(master)

    // Low boom
    const boom = this.createFilteredNoise(ctx, now, 0.2, {
      type: 'lowpass',
      frequency: 150,
      Q: 3,
      volume: 0.35,
    })
    boom.connect(master)
  }

  private playPurple(ctx: AudioContext): void {
    const now = ctx.currentTime
    const master = ctx.createGain()
    master.gain.setValueAtTime(0, now)
    master.gain.linearRampToValueAtTime(0.3, now + 0.15)
    master.gain.setValueAtTime(0.3, now + 1.0)
    master.gain.exponentialRampToValueAtTime(0.001, now + 2.5)

    const reverb = this.getReverb(ctx)
    const dry = ctx.createGain()
    dry.gain.value = 0.6
    const wet = ctx.createGain()
    wet.gain.value = 0.5
    master.connect(dry).connect(ctx.destination)
    master.connect(reverb).connect(wet).connect(ctx.destination)

    // Deep reality-tearing sub bass
    const sub = ctx.createOscillator()
    const subGain = ctx.createGain()
    sub.type = 'sine'
    sub.frequency.setValueAtTime(35, now)
    sub.frequency.linearRampToValueAtTime(50, now + 0.5)
    sub.frequency.linearRampToValueAtTime(30, now + 2.0)
    subGain.gain.setValueAtTime(0, now)
    subGain.gain.linearRampToValueAtTime(0.5, now + 0.3)
    subGain.gain.exponentialRampToValueAtTime(0.01, now + 2.2)
    sub.connect(subGain).connect(master)
    sub.start(now)
    sub.stop(now + 2.2)

    // Detuned drones - two oscillators slightly detuned for beating
    for (const detune of [-8, 8]) {
      const drone = ctx.createOscillator()
      const droneGain = ctx.createGain()
      drone.type = 'sine'
      drone.frequency.setValueAtTime(110, now)
      drone.frequency.exponentialRampToValueAtTime(85, now + 1.5)
      drone.detune.value = detune
      droneGain.gain.setValueAtTime(0, now)
      droneGain.gain.linearRampToValueAtTime(0.12, now + 0.2)
      droneGain.gain.exponentialRampToValueAtTime(0.01, now + 2.0)
      drone.connect(droneGain).connect(master)
      drone.start(now)
      drone.stop(now + 2.0)
    }

    // High eerie whistle - space warping
    const whistle = ctx.createOscillator()
    const whistleGain = ctx.createGain()
    const whistleFilter = ctx.createBiquadFilter()
    whistle.type = 'sine'
    whistle.frequency.setValueAtTime(1200, now)
    whistle.frequency.exponentialRampToValueAtTime(800, now + 0.5)
    whistle.frequency.exponentialRampToValueAtTime(2000, now + 1.2)
    whistle.frequency.exponentialRampToValueAtTime(600, now + 2.0)
    whistleFilter.type = 'bandpass'
    whistleFilter.frequency.setValueAtTime(1500, now)
    whistleFilter.Q.value = 5
    whistleGain.gain.setValueAtTime(0, now)
    whistleGain.gain.linearRampToValueAtTime(0.05, now + 0.3)
    whistleGain.gain.exponentialRampToValueAtTime(0.01, now + 2.0)
    whistle.connect(whistleFilter).connect(whistleGain).connect(master)
    whistle.start(now)
    whistle.stop(now + 2.0)

    // Metallic shimmer - FM synthesis
    const carrier = ctx.createOscillator()
    const modulator = ctx.createOscillator()
    const modGain = ctx.createGain()
    const carrierGain = ctx.createGain()
    modulator.frequency.setValueAtTime(440, now)
    modulator.frequency.exponentialRampToValueAtTime(220, now + 1.5)
    modGain.gain.setValueAtTime(300, now)
    modGain.gain.exponentialRampToValueAtTime(50, now + 1.5)
    carrier.frequency.setValueAtTime(330, now)
    carrier.frequency.exponentialRampToValueAtTime(165, now + 1.5)
    carrierGain.gain.setValueAtTime(0, now)
    carrierGain.gain.linearRampToValueAtTime(0.06, now + 0.2)
    carrierGain.gain.exponentialRampToValueAtTime(0.01, now + 1.8)
    modulator.connect(modGain).connect(carrier.frequency)
    carrier.connect(carrierGain).connect(master)
    modulator.start(now)
    carrier.start(now)
    modulator.stop(now + 1.8)
    carrier.stop(now + 1.8)

    // Reality crack noise - sharp filtered burst
    const crack = this.createFilteredNoise(ctx, now + 0.05, 0.4, {
      type: 'bandpass',
      frequency: 3000,
      frequencyEnd: 500,
      Q: 2,
      volume: 0.12,
    })
    crack.connect(master)

    // Sustained rumble
    const rumble = this.createFilteredNoise(ctx, now, 2.0, {
      type: 'lowpass',
      frequency: 120,
      Q: 1,
      volume: 0.2,
    })
    rumble.connect(master)
  }

  private playShoot(ctx: AudioContext): void {
    const now = ctx.currentTime
    const master = ctx.createGain()
    master.gain.setValueAtTime(0.35, now)
    master.gain.exponentialRampToValueAtTime(0.001, now + 1.0)

    const reverb = this.getReverb(ctx)
    const dry = ctx.createGain()
    dry.gain.value = 0.8
    const wet = ctx.createGain()
    wet.gain.value = 0.3
    master.connect(dry).connect(ctx.destination)
    master.connect(reverb).connect(wet).connect(ctx.destination)

    // Fast descending sweep - the projectile whoosh
    const sweep = ctx.createOscillator()
    const sweepGain = ctx.createGain()
    sweep.type = 'sawtooth'
    sweep.frequency.setValueAtTime(1200, now)
    sweep.frequency.exponentialRampToValueAtTime(80, now + 0.4)
    sweepGain.gain.setValueAtTime(0.2, now)
    sweepGain.gain.exponentialRampToValueAtTime(0.01, now + 0.5)
    const sweepFilter = ctx.createBiquadFilter()
    sweepFilter.type = 'lowpass'
    sweepFilter.frequency.setValueAtTime(3000, now)
    sweepFilter.frequency.exponentialRampToValueAtTime(200, now + 0.4)
    sweep.connect(sweepFilter).connect(sweepGain).connect(master)
    sweep.start(now)
    sweep.stop(now + 0.5)

    // Punch impact
    const punch = ctx.createOscillator()
    const punchGain = ctx.createGain()
    punch.type = 'sine'
    punch.frequency.setValueAtTime(150, now)
    punch.frequency.exponentialRampToValueAtTime(30, now + 0.12)
    punchGain.gain.setValueAtTime(0.4, now)
    punchGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15)
    punch.connect(punchGain).connect(master)
    punch.start(now)
    punch.stop(now + 0.15)

    // Air displacement noise
    const air = this.createFilteredNoise(ctx, now, 0.35, {
      type: 'highpass',
      frequency: 800,
      frequencyEnd: 200,
      Q: 0.5,
      volume: 0.25,
    })
    air.connect(master)

    // Low thump
    const thump = this.createFilteredNoise(ctx, now, 0.1, {
      type: 'lowpass',
      frequency: 100,
      Q: 4,
      volume: 0.35,
    })
    thump.connect(master)
  }

  private createFilteredNoise(
    ctx: AudioContext,
    startTime: number,
    duration: number,
    opts: {
      type: BiquadFilterType
      frequency: number
      frequencyEnd?: number
      Q: number
      volume: number
    },
  ): GainNode {
    const bufferSize = Math.floor(ctx.sampleRate * duration)
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      const t = i / bufferSize
      // Shaped noise with exponential decay
      data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 4)
    }

    const source = ctx.createBufferSource()
    source.buffer = buffer

    const filter = ctx.createBiquadFilter()
    filter.type = opts.type
    filter.frequency.setValueAtTime(opts.frequency, startTime)
    if (opts.frequencyEnd) {
      filter.frequency.exponentialRampToValueAtTime(opts.frequencyEnd, startTime + duration)
    }
    filter.Q.setValueAtTime(opts.Q, startTime)

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(opts.volume, startTime)
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration)

    source.connect(filter).connect(gain)
    source.start(startTime)
    source.stop(startTime + duration)

    return gain
  }

  private createCrackleNoise(
    ctx: AudioContext,
    startTime: number,
    duration: number,
    volume: number,
  ): GainNode {
    // Crackle = sparse random impulses
    const bufferSize = Math.floor(ctx.sampleRate * duration)
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      // Sparse impulses with exponential decay
      const t = i / bufferSize
      if (Math.random() < 0.02) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 2)
      } else {
        data[i] = 0
      }
    }

    const source = ctx.createBufferSource()
    source.buffer = buffer

    const filter = ctx.createBiquadFilter()
    filter.type = 'highpass'
    filter.frequency.value = 2000
    filter.Q.value = 1

    const gain = ctx.createGain()
    gain.gain.setValueAtTime(volume, startTime)
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration)

    source.connect(filter).connect(gain)
    source.start(startTime)
    source.stop(startTime + duration)

    return gain
  }

  private makeDistortionCurve(amount: number): Float32Array {
    const samples = 44100
    const curve = new Float32Array(samples)
    const deg = Math.PI / 180
    for (let i = 0; i < samples; i++) {
      const x = (i * 2) / samples - 1
      curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x))
    }
    return curve
  }
}
