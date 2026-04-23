import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'

// Clip-space full-screen quad — bypasses MVP, always covers exactly the screen
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
uniform float uZoom;    // starts > 1 (zoomed in), falls to 1.0 as domain expands
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  // uZoom: 12 → 1 during build-up gives a pull-back / domain-expansion zoom
  vec2 uv = (vUv - 0.5) * uZoom;
  uv.x *= uAspect;

  float r = length(uv);
  float theta = atan(uv.y, uv.x);

  // Swirling vortex that tightens inward over time
  float twist = theta - r * 5.0 + uTime * 0.6;
  float ring1 = sin(r * 22.0 - uTime * 3.2 + twist * 1.8) * 0.5 + 0.5;
  float ring2 = sin(r * 9.0  - uTime * 1.6 + twist * 0.9) * 0.5 + 0.5;
  float rings = pow(ring1 * 0.65 + ring2 * 0.35, 2.8);

  // Blue rim at the void's event horizon
  float rim = smoothstep(0.31, 0.25, r) * smoothstep(0.16, 0.22, r);

  // Pure black sphere at center
  float sphere = smoothstep(0.0, 0.22, r);

  // Ink splatter using domain-warped noise near edges
  vec2 warpUv = uv + vec2(sin(uv.y * 8.0 + uTime * 0.4) * 0.04, cos(uv.x * 7.0 + uTime * 0.3) * 0.04);
  float splat  = hash(floor(warpUv * 18.0)) * (1.0 - smoothstep(0.28, 0.65, r));
  float splash = step(0.72, splat) * (1.0 - smoothstep(0.32, 0.70, r));

  // Outer fade
  float fade = 1.0 - smoothstep(0.18, 0.72, r);

  // Colors
  vec3 deepSpace = vec3(0.00, 0.01, 0.06);
  vec3 ringBlue  = vec3(0.04, 0.22, 0.82);
  vec3 rimGlow   = vec3(0.12, 0.52, 1.00);
  vec3 splatCol  = vec3(0.85, 0.90, 1.00);

  vec3 color  = deepSpace;
  color      += ringBlue * rings * fade * 1.1;
  color      += rimGlow  * rim   * 2.8;
  color      += splatCol * splash * 0.9;
  color      *= sphere;

  float alpha = clamp(uOpacity * uBuildUp * (fade + rim * 0.4), 0.0, 0.96);

  gl_FragColor = vec4(color, alpha);
}
`

// Debris particles that orbit the void boundary and spiral inward
const DEBRIS_COUNT = 240

export class InfiniteVoidEffect extends EffectRenderer {
  private voidMaterial: THREE.ShaderMaterial
  private debrisPositions: Float32Array
  private debrisVelocities: Float32Array   // (angle, radius, radialVel) per particle
  private debrisPoints: THREE.Points

  private opacity       = 0
  private targetOpacity = 0
  private time          = 0
  private buildUp       = 0
  private readonly BUILD_TIME = 3.5

  constructor() {
    super()
    this.darkenBackground = true

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
        uZoom:    { value: 12.0 },   // starts zoomed in, pulls back to 1.0
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
    })
    const plane = new THREE.Mesh(planeGeom, this.voidMaterial)
    plane.renderOrder = 99
    this.group.add(plane)

    // ── Debris particles (world-space, orbiting the void center) ──
    this.debrisPositions  = new Float32Array(DEBRIS_COUNT * 3)
    this.debrisVelocities = new Float32Array(DEBRIS_COUNT * 3) // angle, radius, dRadius

    for (let i = 0; i < DEBRIS_COUNT; i++) {
      const angle  = Math.random() * Math.PI * 2
      const radius = 0.35 + Math.random() * 1.8
      this.debrisVelocities[i * 3 + 0] = angle
      this.debrisVelocities[i * 3 + 1] = radius
      this.debrisVelocities[i * 3 + 2] = -(0.04 + Math.random() * 0.08) // spiral inward speed
      this.debrisPositions[i * 3 + 0] = Math.cos(angle) * radius
      this.debrisPositions[i * 3 + 1] = Math.sin(angle) * radius
      this.debrisPositions[i * 3 + 2] = 0
    }

    const debrisGeom = new THREE.BufferGeometry()
    debrisGeom.setAttribute('position', new THREE.BufferAttribute(this.debrisPositions, 3))

    const debrisMat = new THREE.PointsMaterial({
      color: 0xaad4ff,
      size: 0.025,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })
    this.debrisPoints = new THREE.Points(debrisGeom, debrisMat)
    this.debrisPoints.renderOrder = 100
    this.group.add(this.debrisPoints)
  }

  spawn(): void {
    this.opacity       = 0
    this.targetOpacity = 1
    this.buildUp       = 0
    this.time          = 0
  }

  update(dt: number): void {
    this.time   += dt
    this.buildUp = Math.min(this.buildUp + dt / this.BUILD_TIME, 1.0)
    this.opacity += (this.targetOpacity - this.opacity) * Math.min(dt * 1.5, 1)

    const u = this.voidMaterial.uniforms
    u.uTime.value    = this.time
    u.uOpacity.value = this.opacity
    u.uBuildUp.value = this.buildUp
    u.uAspect.value  = window.innerWidth / window.innerHeight
    // Zoom pulls back: 12 → 1 over the first half of build-up, then stays at 1
    u.uZoom.value    = 1.0 + 11.0 * Math.max(0, 1 - this.buildUp * 2)

    // Animate debris: orbit + spiral inward
    const posAttr = this.debrisPoints.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < DEBRIS_COUNT; i++) {
      let angle  = this.debrisVelocities[i * 3 + 0]
      let radius = this.debrisVelocities[i * 3 + 1]
      const dr   = this.debrisVelocities[i * 3 + 2]

      angle  += dt * (1.2 + (1 - radius) * 2.0) // spin faster near center
      radius += dr * dt * this.buildUp

      if (radius < 0.05) {
        // Respawn at outer ring
        radius = 0.5 + Math.random() * 1.6
        angle  = Math.random() * Math.PI * 2
      }

      this.debrisVelocities[i * 3 + 0] = angle
      this.debrisVelocities[i * 3 + 1] = radius

      posAttr.array[i * 3 + 0] = Math.cos(angle) * radius
      posAttr.array[i * 3 + 1] = Math.sin(angle) * radius
    }
    posAttr.needsUpdate = true

    ;(this.debrisPoints.material as THREE.PointsMaterial).opacity =
      this.opacity * this.buildUp * 0.6
  }

  setPosition(_pos: THREE.Vector3): void {
    // full-screen — position irrelevant for the plane; debris is at world origin (screen center)
  }

  async dissipate(): Promise<void> {
    this.targetOpacity = 0
    const deadline = performance.now() + 2000
    await new Promise<void>(res => {
      const check = () => {
        if (this.opacity < 0.01 || performance.now() > deadline) { res(); return }
        requestAnimationFrame(check)
      }
      check()
    })
  }

  dispose(): void {
    this.group.children.forEach(c => {
      if (c instanceof THREE.Mesh || c instanceof THREE.Points) {
        c.geometry.dispose()
      }
    })
    this.voidMaterial.dispose()
    ;(this.debrisPoints.material as THREE.Material).dispose()
  }

  getBuildUp(): number  { return this.buildUp }
  getOpacity(): number  { return this.opacity }
}
