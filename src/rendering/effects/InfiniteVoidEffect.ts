import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'

/**
 * Infinite Void — full-screen domain expansion.
 *
 * Visual approach (matching the anime reference):
 * - A massive BLACK HOLE at the center — pure void sphere
 * - Gravitational lensing: the camera feed bends and warps around the void
 * - Blue/white accretion ring glowing at the event horizon
 * - Ink-splatter / paint-splash particles ejected outward (white/blue on black)
 * - Everything outside the void gets pulled inward (radial distortion)
 * - Slow dramatic zoom pull-back as the domain expands
 *
 * The key visual is the DISTORTION of the real camera feed — the room itself
 * appears to warp and bend into the void. The shader handles this by modifying
 * UV coordinates to create a gravitational lensing effect on the background video.
 */

const VOID_VERT = /* glsl */`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`

const VOID_FRAG = /* glsl */`
uniform float uTime;
uniform float uOpacity;
uniform float uBuildUp;   // 0..1 over BUILD_TIME
uniform float uAspect;

varying vec2 vUv;

// Simplex-ish noise for organic shapes
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i),            hash(i + vec2(1,0)), f.x),
    mix(hash(i + vec2(0,1)),hash(i + vec2(1,1)), f.x), f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.1;
    a *= 0.5;
  }
  return v;
}

void main() {
  // Aspect-corrected coordinates centered at screen center
  vec2 uv = (vUv - 0.5);
  uv.x *= uAspect;

  float r = length(uv);
  float theta = atan(uv.y, uv.x);
  float build = uBuildUp;

  // ── BLACK HOLE CORE ──
  // Hard sphere of pure void — grows during build-up
  float voidRadius = 0.08 + build * 0.18;
  float sphereMask = smoothstep(voidRadius - 0.02, voidRadius, r);

  // ── GRAVITATIONAL LENSING RING ──
  // Einstein ring: bright ring right at the event horizon
  float ringInner = voidRadius - 0.01;
  float ringOuter = voidRadius + 0.06 * build;
  float ring = smoothstep(ringInner, voidRadius, r) * smoothstep(ringOuter, voidRadius + 0.01, r);
  // Pulsing ring brightness
  ring *= 1.0 + 0.3 * sin(uTime * 4.0 + r * 20.0);

  // ── ACCRETION SWIRL ──
  // Swirling matter being pulled inward
  float swirl = theta + r * 6.0 - uTime * 0.8;
  float accretion = sin(swirl * 4.0) * 0.5 + 0.5;
  accretion *= smoothstep(voidRadius + 0.12, voidRadius + 0.02, r);
  accretion *= smoothstep(voidRadius - 0.01, voidRadius + 0.04, r);
  accretion *= build;

  // ── RADIAL DISTORTION STREAKS ──
  // Light being stretched radially toward the void
  float streakNoise = fbm(vec2(theta * 3.0 + uTime * 0.15, r * 8.0 - uTime * 1.5));
  float streaks = pow(streakNoise, 2.0) * smoothstep(0.8, 0.15, r) * build;

  // ── INK SPLASH / SPACE FRACTURES ──
  // Warped noise that creates the dark splatter look from the reference
  vec2 warpUv = uv * 4.0 + vec2(
    sin(uTime * 0.2 + uv.y * 3.0) * 0.3,
    cos(uTime * 0.15 + uv.x * 2.5) * 0.3
  );
  float splat = fbm(warpUv + uTime * 0.08);
  float splatMask = step(0.58, splat) * smoothstep(0.7, 0.2, r) * build;

  // ── OUTER VIGNETTE ──
  // Everything far from center darkens to space
  float vignette = smoothstep(0.9, 0.25, r) * build;

  // ── COMPOSE COLORS ──
  vec3 voidBlack  = vec3(0.0);
  vec3 ringBlue   = vec3(0.15, 0.55, 1.0);
  vec3 ringWhite  = vec3(0.85, 0.92, 1.0);
  vec3 accColor   = vec3(0.08, 0.28, 0.85);
  vec3 streakCol  = vec3(0.06, 0.18, 0.50);
  vec3 splatWhite = vec3(0.80, 0.88, 1.0);

  vec3 color = voidBlack;

  // Streaks: radial energy being sucked in
  color += streakCol * streaks * 1.5;

  // Accretion disk
  color += accColor * accretion * 2.0;

  // Einstein ring glow — white-blue hot
  color += mix(ringBlue, ringWhite, ring * 0.6) * ring * 4.0;

  // Ink splats — bright white patches that evoke the anime look
  color += splatWhite * splatMask * 1.2;

  // Everything inside the void sphere is pure black
  color *= sphereMask;

  // Dark vignette pulls the whole scene dark
  float darkening = mix(1.0, 0.0, vignette * 0.85);

  // Alpha: strong in the center, fading at edges
  float alpha = uOpacity * clamp(
    (1.0 - sphereMask) +   // solid inside void
    ring * 2.5 +
    accretion * 1.5 +
    streaks * 1.2 +
    splatMask * 0.9 +
    vignette * 0.7,
    0.0, 1.0
  );

  // Darken the background through alpha (composite the darkness)
  gl_FragColor = vec4(color, alpha);
}
`

const SPLASH_COUNT = 180
const DEBRIS_COUNT = 120

export class InfiniteVoidEffect extends EffectRenderer {
  private voidMaterial: THREE.ShaderMaterial

  // Splash particles — white/blue ink ejections
  private splashPositions: Float32Array
  private splashVelocities: Float32Array // vx, vy, life per particle
  private splashColors: Float32Array
  private splashSizes: Float32Array
  private splashPoints: THREE.Points
  private splashGeom: THREE.BufferGeometry

  // Debris particles orbiting the void
  private debrisAngles: Float32Array
  private debrisRadii: Float32Array
  private debrisSpeeds: Float32Array
  private debrisPositions: Float32Array
  private debrisPoints: THREE.Points
  private debrisGeom: THREE.BufferGeometry

  private opacity       = 0
  private targetOpacity = 0
  private time          = 0
  private buildUp       = 0
  private readonly BUILD_TIME = 4.0

  constructor() {
    super()
    this.darkenBackground = true
    this.distortionType = 2
    this.distortionStrength = 0

    // ── Full-screen vortex plane ──
    const planeGeom = new THREE.PlaneGeometry(2, 2)
    this.voidMaterial = new THREE.ShaderMaterial({
      vertexShader: VOID_VERT,
      fragmentShader: VOID_FRAG,
      uniforms: {
        uTime:    { value: 0 },
        uOpacity: { value: 0 },
        uBuildUp: { value: 0 },
        uAspect:  { value: window.innerWidth / window.innerHeight },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
    })
    const plane = new THREE.Mesh(planeGeom, this.voidMaterial)
    plane.renderOrder = 99
    this.group.add(plane)

    // ── Splash particles (ink splatters ejected outward) ──
    this.splashPositions  = new Float32Array(SPLASH_COUNT * 3)
    this.splashVelocities = new Float32Array(SPLASH_COUNT * 3) // vx, vy, life
    this.splashColors     = new Float32Array(SPLASH_COUNT * 3)
    this.splashSizes      = new Float32Array(SPLASH_COUNT)

    for (let i = 0; i < SPLASH_COUNT; i++) {
      this.respawnSplash(i)
    }

    this.splashGeom = new THREE.BufferGeometry()
    this.splashGeom.setAttribute('position', new THREE.BufferAttribute(this.splashPositions, 3))
    this.splashGeom.setAttribute('color',    new THREE.BufferAttribute(this.splashColors, 3))
    this.splashGeom.setAttribute('size',     new THREE.BufferAttribute(this.splashSizes, 1))

    this.splashPoints = new THREE.Points(this.splashGeom, new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    }))
    this.splashPoints.renderOrder = 101
    this.group.add(this.splashPoints)

    // ── Debris particles (orbital) ──
    this.debrisAngles    = new Float32Array(DEBRIS_COUNT)
    this.debrisRadii     = new Float32Array(DEBRIS_COUNT)
    this.debrisSpeeds    = new Float32Array(DEBRIS_COUNT)
    this.debrisPositions = new Float32Array(DEBRIS_COUNT * 3)

    for (let i = 0; i < DEBRIS_COUNT; i++) {
      this.debrisAngles[i] = Math.random() * Math.PI * 2
      this.debrisRadii[i]  = 0.25 + Math.random() * 1.2
      this.debrisSpeeds[i] = 0.3 + Math.random() * 1.5
    }

    this.debrisGeom = new THREE.BufferGeometry()
    this.debrisGeom.setAttribute('position', new THREE.BufferAttribute(this.debrisPositions, 3))

    this.debrisPoints = new THREE.Points(this.debrisGeom, new THREE.PointsMaterial({
      color: 0x8cb8ff,
      size: 0.02,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    }))
    this.debrisPoints.renderOrder = 100
    this.group.add(this.debrisPoints)
  }

  private respawnSplash(i: number): void {
    // Start near void center, eject outward
    const angle = Math.random() * Math.PI * 2
    const speed = 0.2 + Math.random() * 0.8
    this.splashPositions[i * 3]     = 0
    this.splashPositions[i * 3 + 1] = 0
    this.splashPositions[i * 3 + 2] = 0
    this.splashVelocities[i * 3]     = Math.cos(angle) * speed
    this.splashVelocities[i * 3 + 1] = Math.sin(angle) * speed
    this.splashVelocities[i * 3 + 2] = 0 // life counter

    // Color: mix of white, light blue, and occasional bright cyan
    const t = Math.random()
    if (t < 0.4) {
      // White
      this.splashColors[i * 3] = 0.85; this.splashColors[i * 3 + 1] = 0.90; this.splashColors[i * 3 + 2] = 1.0
    } else if (t < 0.7) {
      // Light blue
      this.splashColors[i * 3] = 0.3; this.splashColors[i * 3 + 1] = 0.6; this.splashColors[i * 3 + 2] = 1.0
    } else {
      // Dark blue
      this.splashColors[i * 3] = 0.05; this.splashColors[i * 3 + 1] = 0.15; this.splashColors[i * 3 + 2] = 0.6
    }

    this.splashSizes[i] = 0.02 + Math.random() * 0.06
  }

  spawn(): void {
    super.spawn()
    this.opacity       = 0
    this.targetOpacity = 1
    this.buildUp       = 0
    this.time          = 0
  }

  override beginDissipate(): void {
    this.targetOpacity = 0
    this.darkenBackground = false  // stop darkening immediately when domain ends
    // Don't call super — InfiniteVoid manages its own fade, isDone watches opacity
  }

  override get isDone(): boolean {
    return this.targetOpacity === 0 && this.opacity < 0.01
  }

  update(dt: number): void {
    this.time   += dt
    this.buildUp = Math.min(this.buildUp + dt / this.BUILD_TIME, 1.0)
    this.opacity += (this.targetOpacity - this.opacity) * Math.min(dt * 1.5, 1)

    // Drive distortion strength from build-up
    this.distortionStrength = this.buildUp * this.opacity * 0.8

    const u = this.voidMaterial.uniforms
    u.uTime.value    = this.time
    u.uOpacity.value = this.opacity
    u.uBuildUp.value = this.buildUp
    u.uAspect.value  = window.innerWidth / window.innerHeight

    // ── Update splash particles ──
    const spAttr = this.splashGeom.attributes
    for (let i = 0; i < SPLASH_COUNT; i++) {
      let life = this.splashVelocities[i * 3 + 2]
      life += dt

      if (life > 1.5 + Math.random() * 1.5) {
        this.respawnSplash(i)
        life = 0
      }

      const vx = this.splashVelocities[i * 3]
      const vy = this.splashVelocities[i * 3 + 1]

      // Decelerate + slight inward pull (gravity)
      const px = this.splashPositions[i * 3]
      const py = this.splashPositions[i * 3 + 1]
      const dist = Math.sqrt(px * px + py * py) + 0.01
      const pull = 0.02 * this.buildUp / dist

      this.splashPositions[i * 3]     += (vx - px * pull) * dt
      this.splashPositions[i * 3 + 1] += (vy - py * pull) * dt
      this.splashVelocities[i * 3 + 2] = life

      // Fade based on life
      const fade = life < 0.15 ? life / 0.15 : Math.max(0, 1 - (life - 0.5) / 1.5)
      this.splashSizes[i] = (0.02 + Math.random() * 0.04) * fade * this.buildUp
    }
    ;(spAttr.position as THREE.BufferAttribute).needsUpdate = true
    ;(spAttr.size as THREE.BufferAttribute).needsUpdate = true
    ;(this.splashPoints.material as THREE.PointsMaterial).opacity = this.opacity * this.buildUp * 0.7

    // ── Update debris particles ──
    const dPos = this.debrisGeom.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < DEBRIS_COUNT; i++) {
      this.debrisAngles[i] += dt * this.debrisSpeeds[i] * (1 + (1 - this.debrisRadii[i]) * 1.5)
      // Slow spiral inward
      this.debrisRadii[i] -= dt * 0.03 * this.buildUp
      if (this.debrisRadii[i] < 0.08) {
        this.debrisRadii[i] = 0.4 + Math.random() * 1.0
        this.debrisAngles[i] = Math.random() * Math.PI * 2
      }

      dPos.array[i * 3]     = Math.cos(this.debrisAngles[i]) * this.debrisRadii[i]
      dPos.array[i * 3 + 1] = Math.sin(this.debrisAngles[i]) * this.debrisRadii[i]
      dPos.array[i * 3 + 2] = 0
    }
    dPos.needsUpdate = true
    ;(this.debrisPoints.material as THREE.PointsMaterial).opacity = this.opacity * this.buildUp * 0.5
  }

  setPosition(_pos: THREE.Vector3): void {
    // Full-screen effect — position irrelevant
  }

  dispose(): void {
    this.voidMaterial.dispose()
    this.splashGeom.dispose()
    ;(this.splashPoints.material as THREE.Material).dispose()
    this.debrisGeom.dispose()
    ;(this.debrisPoints.material as THREE.Material).dispose()
  }

  getBuildUp(): number  { return this.buildUp }
  getOpacity(): number  { return this.opacity }
}
