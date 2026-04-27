import * as THREE from 'three'

export interface ForceField {
  position: THREE.Vector3
  radius: number
  strength: number   // peak acceleration at centre (world units/s²)
  sign: 1 | -1       // +1 = attract, -1 = repel
}
