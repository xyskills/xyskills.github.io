import * as THREE from 'three'
import type { LandmarkPoint } from '@/types/hand'
import type { EffectRenderer } from './effects/EffectRenderer'
import type { ForceField } from './ForceField'
import { AmbientDebris } from './AmbientDebris'
import distortionVertShader from './shaders/distortion-bg.vert.glsl'
import distortionFragShader from './shaders/distortion-bg.frag.glsl'

export class SceneManager {
  private scene: THREE.Scene
  private camera: THREE.OrthographicCamera
  private renderer: THREE.WebGLRenderer
  private canvas: HTMLCanvasElement
  private effects: Set<EffectRenderer> = new Set()
  private dyingEffects: Set<EffectRenderer> = new Set()
  private bgMaterial!: THREE.ShaderMaterial
  private videoTexture!: THREE.VideoTexture
  private frustumWidth  = 2
  private frustumHeight = 2
  private debris!: AmbientDebris
  private activeForceFields: ForceField[] = []
  private readonly _distCenters   = [new THREE.Vector2(0.5, 0.5), new THREE.Vector2(0.5, 0.5), new THREE.Vector2(0.5, 0.5)]
  private readonly _distStrengths = [0, 0, 0]
  private readonly _distTypes     = [0, 0, 0]

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
    this.camera.position.z = 10

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
    })
    this.renderer.setClearColor(0x000000, 1)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  }

  initialize(videoElement: HTMLVideoElement): void {
    const w = this.canvas.clientWidth || window.innerWidth
    const h = this.canvas.clientHeight || window.innerHeight
    this.renderer.setSize(w, h, false)

    const aspect = w / h
    this.frustumHeight = 2
    this.frustumWidth = this.frustumHeight * aspect
    this.updateCamera(aspect)

    // Video texture background with distortion
    this.videoTexture = new THREE.VideoTexture(videoElement)
    this.videoTexture.minFilter = THREE.LinearFilter
    this.videoTexture.magFilter = THREE.LinearFilter
    this.videoTexture.colorSpace = THREE.SRGBColorSpace

    this.bgMaterial = new THREE.ShaderMaterial({
      vertexShader: distortionVertShader,
      fragmentShader: distortionFragShader,
      uniforms: {
        uVideoTexture: { value: this.videoTexture },
        uTime: { value: 0 },
        uDarkness: { value: 1.0 },
      uDistortionCenters: { value: this._distCenters },
        uDistortionStrengths: { value: [0, 0, 0] },
        uDistortionTypes: { value: [0, 0, 0] },
        uActiveDistortions: { value: 0 },
      },
      depthWrite: false,
      depthTest: false,
    })

    const bgGeom = new THREE.PlaneGeometry(this.frustumWidth, this.frustumHeight)
    const bgMesh = new THREE.Mesh(bgGeom, this.bgMaterial)
    bgMesh.position.z = -1
    bgMesh.renderOrder = -1
    this.scene.add(bgMesh)

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    this.scene.add(ambient)

    this.debris = new AmbientDebris(this.frustumWidth, this.frustumHeight)
    this.scene.add(this.debris.getObject3D())

    window.addEventListener('resize', () => this.onResize())
  }

  private updateCamera(aspect: number): void {
    this.frustumWidth = this.frustumHeight * aspect
    this.camera.left = -this.frustumWidth / 2
    this.camera.right = this.frustumWidth / 2
    this.camera.top = this.frustumHeight / 2
    this.camera.bottom = -this.frustumHeight / 2
    this.camera.updateProjectionMatrix()
  }

  private onResize(): void {
    const w = this.canvas.clientWidth || window.innerWidth
    const h = this.canvas.clientHeight || window.innerHeight
    this.renderer.setSize(w, h, false)
    this.updateCamera(w / h)
  }

  landmarkToWorld(point: LandmarkPoint): THREE.Vector3 {
    // Video is mirrored in shader (1.0 - uv.x), so mirror X here to match
    const x = -(point.x - 0.5) * this.frustumWidth
    const y = -(point.y - 0.5) * this.frustumHeight
    return new THREE.Vector3(x, y, 0)
  }

  /** Replace force fields for debris physics — called each frame by AbilityManager. */
  setForceFields(fields: ForceField[]): void { this.activeForceFields = fields }

  /** Instantly restores full brightness — call when shooting purple. */
  clearDarkState(): void {
    this.bgMaterial.uniforms.uDarkness.value = 1.0
  }

  addEffect(effect: EffectRenderer): void {
    this.effects.add(effect)
    this.scene.add(effect.getObject3D())
  }

  /** Triggers the dissipate animation; effect stays rendered until isDone then auto-disposes. */
  removeEffect(effect: EffectRenderer): void {
    if (!this.effects.has(effect)) return
    this.effects.delete(effect)
    effect.beginDissipate()
    this.dyingEffects.add(effect)
  }

  /** Immediate removal with no animation — for beams, projectiles, and forced clears. */
  killEffect(effect: EffectRenderer): void {
    this.effects.delete(effect)
    this.dyingEffects.delete(effect)
    this.scene.remove(effect.getObject3D())
    effect.dispose()
  }

  render(deltaTime: number, effectsEnabled = true): void {
    // Update time
    this.bgMaterial.uniforms.uTime.value += deltaTime

    // Physics debris
    if (effectsEnabled) {
      this.debris.update(deltaTime, this.activeForceFields)
    }

    // Collect distortion info — reuse pooled arrays, no allocations
    let numActive = 0
    let wantDark = false

    for (const effect of this.effects) {
      effect.update(deltaTime)
      effect.getObject3D().visible = effectsEnabled
      if (effectsEnabled && effect.darkenBackground) wantDark = true
      if (effectsEnabled && effect.distortionType !== 0 && effect.distortionStrength > 0 && numActive < 3) {
        this._distCenters[numActive].set(effect.normalizedPosition.x, effect.normalizedPosition.y)
        this._distStrengths[numActive] = effect.distortionStrength
        this._distTypes[numActive]     = effect.distortionType
        numActive++
      }
    }

    // Tick dying effects — they stay in the scene until their dissipate animation completes
    for (const effect of this.dyingEffects) {
      effect.update(deltaTime)
      effect.getObject3D().visible = effectsEnabled
      // Dying effects still contribute to atmosphere so darkness/flicker doesn't cut mid-animation
      if (effectsEnabled && effect.darkenBackground) wantDark = true
    }
    for (const effect of this.dyingEffects) {
      if (effect.isDone) {
        this.dyingEffects.delete(effect)
        this.scene.remove(effect.getObject3D())
        effect.dispose()
      }
    }

    // Pad remaining slots to zero
    for (let i = numActive; i < 3; i++) {
      this._distCenters[i].set(0.5, 0.5)
      this._distStrengths[i] = 0
      this._distTypes[i]     = 0
    }

    // Smooth darkening when domain/purple active, smooth return to full brightness otherwise
    const darknessTarget = wantDark ? 0.15 : 1.0
    const curDark = this.bgMaterial.uniforms.uDarkness.value as number
    this.bgMaterial.uniforms.uDarkness.value = curDark + (darknessTarget - curDark) * Math.min(deltaTime * 6, 1)

    this.bgMaterial.uniforms.uDistortionStrengths.value = this._distStrengths
    this.bgMaterial.uniforms.uDistortionTypes.value     = this._distTypes
    this.bgMaterial.uniforms.uActiveDistortions.value   = numActive

    this.renderer.render(this.scene, this.camera)
  }

  /** Lower pixel ratio during recording to reduce GPU fill-rate; restore after. */
  setPixelRatio(ratio: number): void {
    this.renderer.setPixelRatio(Math.min(ratio, 1.5))
  }

  getCanvas(): HTMLCanvasElement { return this.canvas }
}
