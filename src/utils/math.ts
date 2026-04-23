import type { LandmarkPoint } from '@/types/hand'

export function distance2D(a: LandmarkPoint, b: LandmarkPoint): number {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return Math.sqrt(dx * dx + dy * dy)
}

export function distance3D(a: LandmarkPoint, b: LandmarkPoint): number {
  const dx = a.x - b.x
  const dy = a.y - b.y
  const dz = a.z - b.z
  return Math.sqrt(dx * dx + dy * dy + dz * dz)
}

export function midpoint(a: LandmarkPoint, b: LandmarkPoint): LandmarkPoint {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
    z: (a.z + b.z) / 2,
  }
}

export function subtract(a: LandmarkPoint, b: LandmarkPoint): LandmarkPoint {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }
}

export function magnitude(v: LandmarkPoint): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function lerpPoint(a: LandmarkPoint, b: LandmarkPoint, t: number): LandmarkPoint {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
    z: lerp(a.z, b.z, t),
  }
}
