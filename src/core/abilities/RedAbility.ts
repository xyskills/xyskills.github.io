import * as THREE from 'three'
import { Ability } from './Ability'
import { RedEffect } from '@/rendering/effects/RedEffect'
import type { EffectRenderer } from '@/rendering/effects/EffectRenderer'

export class RedAbility extends Ability {
  private effect: RedEffect

  constructor() {
    super({
      name: 'Cursed Technique Reversal: Red',
      color: new THREE.Color(0.9, 0.1, 0.05),
      glowColor: new THREE.Color(1.0, 0.4, 0.2),
      particleCount: 250,
      scale: 1,
    })
    this.effect = new RedEffect()
  }

  getEffect(): EffectRenderer {
    return this.effect
  }
}
