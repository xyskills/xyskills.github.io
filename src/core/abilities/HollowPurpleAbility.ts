import * as THREE from 'three'
import { Ability } from './Ability'
import { HollowPurpleEffect } from '@/rendering/effects/HollowPurpleEffect'
import type { EffectRenderer } from '@/rendering/effects/EffectRenderer'

export class HollowPurpleAbility extends Ability {
  private effect: HollowPurpleEffect

  constructor() {
    super({
      name: 'Hollow Purple',
      color: new THREE.Color(0.5, 0.0, 0.8),
      glowColor: new THREE.Color(0.8, 0.3, 1.0),
      particleCount: 500,
      scale: 1.5,
    })
    this.effect = new HollowPurpleEffect()
  }

  getEffect(): EffectRenderer {
    return this.effect
  }
}
