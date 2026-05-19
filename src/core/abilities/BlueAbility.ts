import * as THREE from 'three'
import { Ability } from './Ability'
import { BlueEffect } from '@/rendering/effects/BlueEffect'
import type { EffectRenderer } from '@/rendering/effects/EffectRenderer'

export class BlueAbility extends Ability {
  private effect: BlueEffect

  constructor() {
    super({
      name: 'Cursed Technique Lapse: Blue',
      color: new THREE.Color(0.05, 0.15, 0.9),
      glowColor: new THREE.Color(0.3, 0.6, 1.0),
      particleCount: 200,
      scale: 1,
    })
    this.effect = new BlueEffect()
  }

  getEffect(): EffectRenderer {
    return this.effect
  }
}
