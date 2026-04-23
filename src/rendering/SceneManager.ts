import * as THREE from 'three'
import type { LandmarkPoint } from '@/types/hand'
import type { EffectRenderer } from './effects/EffectRenderer'
import distortionVertShader from './shaders/distortion-bg.vert.glsl'
import distortionFragShader from './shaders/distortion-bg.frag.glsl'

export class SceneManager {
  private scene: THREE.Scene
  private camera: THREE.OrthographicCamera
  private renderer: THREE.WebGLRenderer
  private canvas: HTMLCanvasElement
  private effects: Set<EffectRenderer> = new Set()
  private bgMaterial!: THREE.ShaderMaterial
  private videoTexture!: THREE.VideoTexture
  private frustumWidth = 2
  private frustumHeight = 2
  // Simple realistic flicker — very dark base, rare instant flash → gap → optional re-flash
  private flickPhase: 'dark' | 'flash' | 'gap' | 'reflash' = 'dark'
  private flickerTimer    = 1.0
  private flickerBright   = 0.07
  private flickerReflash  = false

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
    this.camera.position.z = 10

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
    })
    this.renderer.setClearColor(0x000000, 1)
    this.renderer.setPixelRatio(window.devicePixelRatio)
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
        uDarkness: { value: 0.5 },
        uDistortionCenters: { value: [new THREE.Vector2(0.5, 0.5), new THREE.Vector2(0.5, 0.5), new THREE.Vector2(0.5, 0.5)] },
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

  addEffect(effect: EffectRenderer): void {
    this.effects.add(effect)
    this.scene.add(effect.getObject3D())
  }

  removeEffect(effect: EffectRenderer): void {
    if (!this.effects.has(effect)) return
    this.effects.delete(effect)
    this.scene.remove(effect.getObject3D())
    effect.dispose()
  }

  render(deltaTime: number, effectsEnabled = true): void {
    // Update time
    this.bgMaterial.uniforms.uTime.value += deltaTime

    // Collect distortion info from active effects
    const centers: THREE.Vector2[] = []
    const strengths: number[] = []
    const types: number[] = []
    let wantDark = false

    for (const effect of this.effects) {
      effect.update(deltaTime)
      // Hide/show effect meshes based on effectsEnabled toggle
      effect.getObject3D().visible = effectsEnabled
      if (effectsEnabled && effect.darkenBackground) wantDark = true
      if (effectsEnabled && effect.distortionType !== 0 && effect.distortionStrength > 0) {
        centers.push(new THREE.Vector2(effect.normalizedPosition.x, effect.normalizedPosition.y))
        strengths.push(effect.distortionStrength)
        types.push(effect.distortionType)
      }
    }

    // Darkness + lightning flicker when purple active
    if (wantDark) {
      this.flickerTimer -= deltaTime
      switch (this.flickPhase) {
        case 'dark':
          // Settle to dim baseline (not pitch black — still see the scene)
          this.flickerBright += (0.20 - this.flickerBright) * Math.min(deltaTime * 6, 1)
          if (this.flickerTimer <= 0) {
            this.flickerBright  = 0.45 + Math.random() * 0.35   // flash 0.45–0.80
            this.flickerReflash = Math.random() < 0.55
            this.flickPhase     = 'flash'
            this.flickerTimer   = 0.10 + Math.random() * 0.18   // longer flash: 0.10–0.28s
          }
          break
        case 'flash':
          if (this.flickerTimer <= 0) {
            this.flickerBright = 0.10
            this.flickPhase    = 'gap'
            this.flickerTimer  = 0.06 + Math.random() * 0.10
          }
          break
        case 'gap':
          if (this.flickerTimer <= 0) {
            if (this.flickerReflash) {
              this.flickerBright  = 0.30 + Math.random() * 0.25
              this.flickerReflash = false
              this.flickPhase     = 'reflash'
              this.flickerTimer   = 0.08 + Math.random() * 0.12
            } else {
              this.flickPhase   = 'dark'
              this.flickerTimer = 0.4 + Math.random() * 1.8   // shorter quiet: 0.4–2.2s
            }
          }
          break
        case 'reflash':
          if (this.flickerTimer <= 0) {
            this.flickPhase   = 'dark'
            this.flickerTimer = 0.4 + Math.random() * 1.8
          }
          break
      }
      this.bgMaterial.uniforms.uDarkness.value = this.flickerBright
    } else {
      // Smooth return to full brightness
      const cur = this.bgMaterial.uniforms.uDarkness.value as number
      this.bgMaterial.uniforms.uDarkness.value = cur + (1.0 - cur) * Math.min(deltaTime * 3, 1)
      this.flickPhase    = 'dark'
      this.flickerBright = 0.20
      this.flickerTimer  = 0.3 + Math.random() * 0.6
    }

    // Pad to 3 entries (shader requires exactly 3 slots)
    const numActive = centers.length
    while (centers.length < 3) {
      centers.push(new THREE.Vector2(0.5, 0.5))
      strengths.push(0)
      types.push(0)
    }

    this.bgMaterial.uniforms.uDistortionCenters.value = centers
    this.bgMaterial.uniforms.uDistortionStrengths.value = strengths
    this.bgMaterial.uniforms.uDistortionTypes.value = types
    this.bgMaterial.uniforms.uActiveDistortions.value = numActive

    this.renderer.render(this.scene, this.camera)
  }

  getCanvas(): HTMLCanvasElement { return this.canvas }
}
