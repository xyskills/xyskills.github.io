import * as THREE from 'three'
import { Ability } from './Ability'
import { HollowPurpleEffect } from '@/rendering/effects/HollowPurpleEffect'
import { VideoEffectLayer } from '@/rendering/effects/VideoEffectLayer'
import { CompositeEffect } from '@/rendering/effects/CompositeEffect'
import type { EffectRenderer } from '@/rendering/effects/EffectRenderer'

export class HollowPurpleAbility extends Ability {
  private effect: EffectRenderer

  constructor() {
    super({
      name: 'Hollow Purple',
      color: new THREE.Color(0.5, 0.0, 0.8),
      glowColor: new THREE.Color(0.8, 0.3, 1.0),
      particleCount: 500,
      scale: 1.5,
    })
    // Hollow Purple video is fullscreen — the rendered lightning storm covers
    // the entire frame additively on top of the real-time HollowPurpleEffect.
    this.effect = new CompositeEffect(
      new HollowPurpleEffect(),
      new VideoEffectLayer({
        url:       '/videos/effects/hollow_purple_effect.webm',
        fullscreen: true,     // covers full screen
        blending:   THREE.AdditiveBlending,
        loop:       true,
      }),
    )
  }

  getEffect(): EffectRenderer {
    return this.effect
  }
}
