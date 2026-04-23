import * as THREE from 'three'

export enum AbilityState {
  INACTIVE = 'inactive',
  SPAWNING = 'spawning',
  IDLE = 'idle',
  SHOOTING = 'shooting',
  DISSIPATING = 'dissipating',
}

export interface AbilityConfig {
  name: string
  color: THREE.Color
  glowColor: THREE.Color
  particleCount: number
  scale: number
}
