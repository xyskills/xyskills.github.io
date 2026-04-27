import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'

/**
 * Infinite Void — Gojo Satoru's "Unlimited Void" domain expansion.
 *
 * Visual reference: the anime shows a blinding WHITE void filled with an
 * overwhelming lattice of geometric lines — radial divisions, concentric rings,
 * rotating angular sectors, and a cartesian grid — all converging on a bright
 * central singularity. The edges bleed into deep indigo. The victim cannot
 * process the infinite information and is paralysed.
 *
 * Implementation:
 * - Full-screen quad with a custom GLSL shader that builds all geometric layers
 * - Domain expands as a circular wave from the centre during BUILD_TIME
 * - Floating point-symbols orbit the void; splash + debris particles are dark
 *   indigo so they're legible against the white background
 * - No background darkening — the shader provides its own full-coverage colour
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
uniform float uBuildUp;
uniform float uAspect;

varying vec2 vUv;

float hash1(float n) { return fract(sin(n * 127.1)  * 43758.5453); }
float hash2(float n) { return fract(sin(n * 311.7 + 5.0) * 12345.6789); }

void main() {
  const float PI  = 3.14159265;
  const float TAU = 6.28318530;

  vec2 uv = vUv - 0.5;
  uv.x *= uAspect;

  float r     = length(uv);
  float theta = atan(uv.y, uv.x);
  float build = uBuildUp;
  float t     = uTime;

  // ── BASE: white void fading to deep indigo at edges ──────────────────────
  vec3 voidWhite  = vec3(0.97, 0.97, 1.00);
  vec3 lineIndigo = vec3(0.04, 0.02, 0.22);
  vec3 edgeBlue   = vec3(0.02, 0.01, 0.10);

  float edgeFactor = smoothstep(0.12, 0.60, r) * build;
  vec3 color = mix(voidWhite, edgeBlue, edgeFactor * edgeFactor);

  // ── RADIAL LINES — 72 thin spokes radiating from centre ──────────────────
  float numRad  = 72.0;
  float angStep = TAU / numRad;
  float normTheta = mod(theta + TAU, TAU);
  float tLocal    = mod(normTheta, angStep) / angStep; // 0..1 within each sector
  // Sharp thin spike at every sector boundary
  float radLine = pow(1.0 - min(tLocal, 1.0 - tLocal) * 2.0, 32.0);
  // Fade in from centre, fade before outer edge
  radLine *= smoothstep(0.02, 0.10, r) * smoothstep(0.72, 0.45, r) * build;

  // ── CONCENTRIC RINGS — 4 scales drifting inward ──────────────────────────
  float rings = 0.0;
  rings += pow(max(0.0, cos(r * 110.0 - t * 1.5)), 10.0) * 0.30;
  rings += pow(max(0.0, cos(r *  55.0 - t * 0.9)), 12.0) * 0.45;
  rings += pow(max(0.0, cos(r *  28.0 - t * 0.5)), 10.0) * 0.60;
  rings += pow(max(0.0, cos(r *  14.0 - t * 0.25)), 8.0) * 0.40;
  rings *= build * smoothstep(0.015, 0.06, r) * smoothstep(0.75, 0.55, r);

  // ── ROTATING ANGULAR SECTORS — 24-fold, slow clockwise spin ─────────────
  float rTheta    = theta + t * 0.03;
  float normRTheta = mod(rTheta + TAU, TAU);
  float secStep   = TAU / 24.0;
  float secLocal  = mod(normRTheta, secStep) / secStep;
  float secLine   = pow(1.0 - min(secLocal, 1.0 - secLocal) * 2.0, 28.0) * 0.5;
  secLine *= build * smoothstep(0.0, 0.10, r) * smoothstep(0.68, 0.30, r);

  // ── CARTESIAN GRID — very slow CCW rotation ──────────────────────────────
  float cartRot = t * 0.015;
  float cg = cos(cartRot), sg = sin(cartRot);
  vec2 gUv  = vec2(cg * uv.x - sg * uv.y, sg * uv.x + cg * uv.y) * 11.0;
  float cartX = pow(abs(cos(gUv.x * PI)), 28.0);
  float cartY = pow(abs(cos(gUv.y * PI)), 28.0);
  float cartGrid = max(cartX, cartY) * 0.30;
  cartGrid *= build * smoothstep(0.60, 0.18, r);

  // ── COMPOSITE GEOMETRY ───────────────────────────────────────────────────
  float geom = clamp(radLine * 0.75 + rings * 0.85 + secLine * 0.60 + cartGrid, 0.0, 1.0);
  color = mix(color, lineIndigo, geom * 0.90);

  // ── FLOATING POINT-SYMBOLS — 16 orbiting bright dots ────────────────────
  float symBright = 0.0;
  for (int j = 0; j < 16; j++) {
    float fj    = float(j);
    float speed = 0.06 + hash1(fj) * 0.10;
    float dir   = mod(fj, 2.0) < 1.0 ? 1.0 : -1.0;
    float ang   = fj * 0.3927 + t * speed * dir;
    float orbitR = 0.07 + hash2(fj) * 0.38;
    vec2 sPos   = vec2(cos(ang) * orbitR, sin(ang) * orbitR);
    float d     = length(uv - sPos);
    symBright  += smoothstep(0.014, 0.0, d);
    symBright  += smoothstep(0.055, 0.005, d) * 0.25;
  }
  symBright = min(symBright * build, 2.0);
  // Blue-white glow dots visible against the white background
  color  = mix(color, vec3(0.10, 0.08, 0.60), min(symBright * 0.55, 1.0));
  color += vec3(0.20, 0.25, 0.80) * min(symBright * 0.35, 0.8);

  // ── CENTRE SINGULARITY — Gojo's Six Eyes ─────────────────────────────────
  float coreR    = 0.022 + build * 0.012;
  float coreHard = smoothstep(coreR, 0.0, r);
  float coreSoft = smoothstep(coreR * 9.0, coreR * 0.5, r);
  color  = mix(color, vec3(0.80, 0.88, 1.0), coreSoft * build * 0.55);
  color += vec3(1.0, 1.0, 1.0) * coreHard;
  color  = min(color, vec3(1.5)); // allow slight bloom overshoot

  // ── DOMAIN EXPANSION MASK — circular wave expanding from centre ──────────
  // At build=0 → expandR≈0.06; at build=1 → expandR≈1.16 (covers 16:9 corners)
  float expandR  = 0.06 + build * 1.10;
  float softness = 0.15 * (1.0 - build * 0.5);
  float expansion = smoothstep(expandR, expandR - softness, r);

  float alpha = uOpacity * expansion;
  gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
}
`

const SPLASH_COUNT = 150
const DEBRIS_COUNT =  90

export class InfiniteVoidEffect extends EffectRenderer {
  private voidMaterial: THREE.ShaderMaterial

  // Splash particles — indigo geometric fragments ejected outward
  private splashPositions:  Float32Array
  private splashVelocities: Float32Array // vx, vy, life
  private splashColors:     Float32Array
  private splashSizes:      Float32Array
  private splashRandSizes:  Float32Array // pre-baked random base sizes (no hot-loop Math.random)
  private splashPoints:     THREE.Points
  private splashGeom:       THREE.BufferGeometry

  // Debris particles — dark orbital dots
  private debrisAngles:    Float32Array
  private debrisRadii:     Float32Array
  private debrisSpeeds:    Float32Array
  private debrisPositions: Float32Array
  private debrisPoints:    THREE.Points
  private debrisGeom:      THREE.BufferGeometry

  private opacity       = 0
  private targetOpacity = 0
  private time          = 0
  private buildUp       = 0
  private readonly BUILD_TIME = 4.0

  constructor() {
    super()
    // No background darkening — shader provides its own opaque coverage
    this.darkenBackground   = false
    this.distortionType     = 2
    this.distortionStrength = 0

    // ── Full-screen void plane ──────────────────────────────────────────────
    const planeGeom = new THREE.PlaneGeometry(2, 2)
    this.voidMaterial = new THREE.ShaderMaterial({
      vertexShader:   VOID_VERT,
      fragmentShader: VOID_FRAG,
      uniforms: {
        uTime:    { value: 0 },
        uOpacity: { value: 0 },
        uBuildUp: { value: 0 },
        uAspect:  { value: window.innerWidth / window.innerHeight },
      },
      transparent: true,
      depthWrite:  false,
      depthTest:   false,
      blending:    THREE.CustomBlending,
      blendSrc:    THREE.SrcAlphaFactor,
      blendDst:    THREE.OneMinusSrcAlphaFactor,
    })
    const plane = new THREE.Mesh(planeGeom, this.voidMaterial)
    plane.renderOrder = 99
    this.group.add(plane)

    // ── Splash particles ────────────────────────────────────────────────────
    this.splashPositions  = new Float32Array(SPLASH_COUNT * 3)
    this.splashVelocities = new Float32Array(SPLASH_COUNT * 3)
    this.splashColors     = new Float32Array(SPLASH_COUNT * 3)
    this.splashSizes      = new Float32Array(SPLASH_COUNT)
    this.splashRandSizes  = new Float32Array(SPLASH_COUNT)

    for (let i = 0; i < SPLASH_COUNT; i++) {
      this.splashRandSizes[i] = 0.018 + Math.random() * 0.035 // pre-baked once
      this.respawnSplash(i)
    }

    this.splashGeom = new THREE.BufferGeometry()
    this.splashGeom.setAttribute('position', new THREE.BufferAttribute(this.splashPositions, 3))
    this.splashGeom.setAttribute('color',    new THREE.BufferAttribute(this.splashColors, 3))
    this.splashGeom.setAttribute('size',     new THREE.BufferAttribute(this.splashSizes, 1))

    this.splashPoints = new THREE.Points(this.splashGeom, new THREE.PointsMaterial({
      size:         0.04,
      vertexColors: true,
      transparent:  true,
      opacity:      0,
      // NormalBlending so dark-indigo dots are visible on the white void background
      blending:   THREE.NormalBlending,
      depthWrite: false,
      sizeAttenuation: true,
    }))
    this.splashPoints.renderOrder = 101
    this.group.add(this.splashPoints)

    // ── Debris particles ────────────────────────────────────────────────────
    this.debrisAngles    = new Float32Array(DEBRIS_COUNT)
    this.debrisRadii     = new Float32Array(DEBRIS_COUNT)
    this.debrisSpeeds    = new Float32Array(DEBRIS_COUNT)
    this.debrisPositions = new Float32Array(DEBRIS_COUNT * 3)

    for (let i = 0; i < DEBRIS_COUNT; i++) {
      this.debrisAngles[i] = Math.random() * Math.PI * 2
      this.debrisRadii[i]  = 0.20 + Math.random() * 1.0
      this.debrisSpeeds[i] = 0.25 + Math.random() * 1.2
    }

    this.debrisGeom = new THREE.BufferGeometry()
    this.debrisGeom.setAttribute('position', new THREE.BufferAttribute(this.debrisPositions, 3))

    this.debrisPoints = new THREE.Points(this.debrisGeom, new THREE.PointsMaterial({
      color: 0x06033a, // deep indigo — visible on white void
      size:  0.022,
      transparent: true,
      opacity:     0,
      blending:    THREE.NormalBlending,
      depthWrite:  false,
      sizeAttenuation: true,
    }))
    this.debrisPoints.renderOrder = 100
    this.group.add(this.debrisPoints)
  }

  private respawnSplash(i: number): void {
    const angle = Math.random() * Math.PI * 2
    const speed = 0.15 + Math.random() * 0.65
    this.splashPositions[i * 3]     = 0
    this.splashPositions[i * 3 + 1] = 0
    this.splashPositions[i * 3 + 2] = 0
    this.splashVelocities[i * 3]     = Math.cos(angle) * speed
    this.splashVelocities[i * 3 + 1] = Math.sin(angle) * speed
    this.splashVelocities[i * 3 + 2] = 0 // life counter

    // Dark indigo fragments — legible against the white background
    const t = Math.random()
    if (t < 0.5) {
      this.splashColors[i * 3] = 0.06; this.splashColors[i * 3 + 1] = 0.03; this.splashColors[i * 3 + 2] = 0.38
    } else {
      this.splashColors[i * 3] = 0.10; this.splashColors[i * 3 + 1] = 0.05; this.splashColors[i * 3 + 2] = 0.55
    }
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
  }

  override get isDone(): boolean {
    return this.targetOpacity === 0 && this.opacity < 0.01
  }

  update(dt: number): void {
    this.time   += dt
    this.buildUp = Math.min(this.buildUp + dt / this.BUILD_TIME, 1.0)
    this.opacity += (this.targetOpacity - this.opacity) * Math.min(dt * 1.5, 1)

    this.distortionStrength = this.buildUp * this.opacity * 0.6

    const u = this.voidMaterial.uniforms
    u.uTime.value    = this.time
    u.uOpacity.value = this.opacity
    u.uBuildUp.value = this.buildUp
    u.uAspect.value  = window.innerWidth / window.innerHeight

    // ── Update splash particles ─────────────────────────────────────────────
    const spAttr = this.splashGeom.attributes
    for (let i = 0; i < SPLASH_COUNT; i++) {
      let life = this.splashVelocities[i * 3 + 2]
      life += dt

      if (life > 1.5 + Math.random() * 1.0) {
        this.respawnSplash(i)
        life = 0
      }

      const vx = this.splashVelocities[i * 3]
      const vy = this.splashVelocities[i * 3 + 1]
      const px = this.splashPositions[i * 3]
      const py = this.splashPositions[i * 3 + 1]
      const dist = Math.sqrt(px * px + py * py) + 0.01
      const pull = 0.015 * this.buildUp / dist

      this.splashPositions[i * 3]     += (vx - px * pull) * dt
      this.splashPositions[i * 3 + 1] += (vy - py * pull) * dt
      this.splashVelocities[i * 3 + 2] = life

      // Use pre-baked random sizes — no Math.random() in the hot loop
      const fade = life < 0.15 ? life / 0.15 : Math.max(0, 1 - (life - 0.5) / 1.5)
      this.splashSizes[i] = this.splashRandSizes[i] * fade * this.buildUp
    }
    ;(spAttr.position as THREE.BufferAttribute).needsUpdate = true
    ;(spAttr.size     as THREE.BufferAttribute).needsUpdate = true
    ;(this.splashPoints.material as THREE.PointsMaterial).opacity = this.opacity * this.buildUp * 0.80

    // ── Update debris particles ─────────────────────────────────────────────
    const dPos = this.debrisGeom.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < DEBRIS_COUNT; i++) {
      this.debrisAngles[i] += dt * this.debrisSpeeds[i] * (1 + (1 - this.debrisRadii[i]) * 1.5)
      this.debrisRadii[i]  -= dt * 0.025 * this.buildUp
      if (this.debrisRadii[i] < 0.07) {
        this.debrisRadii[i] = 0.35 + Math.random() * 0.85
        this.debrisAngles[i] = Math.random() * Math.PI * 2
      }
      dPos.array[i * 3]     = Math.cos(this.debrisAngles[i]) * this.debrisRadii[i]
      dPos.array[i * 3 + 1] = Math.sin(this.debrisAngles[i]) * this.debrisRadii[i]
      dPos.array[i * 3 + 2] = 0
    }
    dPos.needsUpdate = true
    ;(this.debrisPoints.material as THREE.PointsMaterial).opacity = this.opacity * this.buildUp * 0.55
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

  getBuildUp(): number { return this.buildUp }
  getOpacity(): number { return this.opacity }
}
