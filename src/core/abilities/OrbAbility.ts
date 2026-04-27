import * as THREE from 'three'
import { Ability } from './Ability'
import { AbilityState } from '@/types/ability'
import type { AbilityConfig } from '@/types/ability'
import { VideoEffectLayer } from '@/rendering/effects/VideoEffectLayer'
import { CompositeEffect } from '@/rendering/effects/CompositeEffect'
import type { EffectRenderer } from '@/rendering/effects/EffectRenderer'
import type { ForceField } from '@/rendering/ForceField'

export interface OrbAbilityConfig extends AbilityConfig {
  EffectClass: new () => EffectRenderer
  videoUrl: string
  forceFieldSign: 1 | -1
  forceFieldRadius: number
  forceFieldStrength: number
}

export class OrbAbility extends Ability {
  private readonly effect: EffectRenderer
  private readonly forceFieldSign: 1 | -1
  private readonly forceFieldRadius: number
  private readonly forceFieldStrength: number

  constructor(config: OrbAbilityConfig) {
    super(config)
    const orbEffect = new config.EffectClass()
    this.effect = new CompositeEffect(
      orbEffect,
      new VideoEffectLayer({
        url: config.videoUrl,
        fullscreen: false,
        planeSize: 4.0,
        blending: THREE.AdditiveBlending,
        loop: true,
      }),
    )
    this.forceFieldSign     = config.forceFieldSign
    this.forceFieldRadius   = config.forceFieldRadius
    this.forceFieldStrength = config.forceFieldStrength
  }

  getEffect(): EffectRenderer { return this.effect }

  /** Returns a force field centred on this orb's current world position, or null when not idle. */
  getForceField(): ForceField | null {
    if (this.state !== AbilityState.IDLE) return null
    return {
      position: this.position.clone(),
      radius:   this.forceFieldRadius,
      strength: this.forceFieldStrength,
      sign:     this.forceFieldSign,
    }
  }
}
