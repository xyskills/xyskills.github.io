import * as THREE from 'three'
import { EffectRenderer } from './EffectRenderer'

/**
 * VideoEffectLayer — plays a pre-rendered Blender video as a Three.js texture
 * on top of the existing procedural effect.
 *
 * Usage flow:
 *   1. Run blender/blue_effect.py  → encode → public/videos/effects/blue_effect.webm
 *   2. VideoEffectLayer loads the video; if it 404s it silently does nothing (the
 *      procedural effect underneath still runs as the fallback).
 *   3. When the video is ready, it plays additive over the scene for cinema quality.
 *
 * Blending: AdditiveBlending — the glow/light from the rendered video adds on
 * top of whatever is already in the frame without darkening anything.
 */

const OVERLAY_VERT = /* glsl */`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`

const OVERLAY_FRAG = /* glsl */`
uniform sampler2D uVideo;
uniform float     uOpacity;
uniform float     uAspect;       // canvas width / height
uniform float     uVideoAspect;  // always 16/9

varying vec2 vUv;

void main() {
  // The video is 1920×1080 (16:9). Scale it to fill or fit the current canvas.
  vec2 uv = vUv;
  gl_FragColor = texture2D(uVideo, uv) * uOpacity;
}
`

export interface VideoEffectConfig {
  /** Path under /public, e.g. '/videos/effects/blue_effect.webm' */
  url: string
  /** true = covers the full screen (Hollow Purple), false = positioned plane (Blue/Red) */
  fullscreen: boolean
  /** World-space plane size when fullscreen=false. Matches the Blender ortho_scale=4 (±2 units). */
  planeSize?: number
  /** Blending mode. Defaults to AdditiveBlending (adds glow on top). */
  blending?: THREE.Blending
  /** Loop the video (orb idle animations). Set false for one-shot effects. */
  loop?: boolean
}

export class VideoEffectLayer extends EffectRenderer {
  private video: HTMLVideoElement
  private texture: THREE.VideoTexture
  private mesh: THREE.Mesh
  private mat: THREE.ShaderMaterial | THREE.MeshBasicMaterial
  private _available = false   // becomes true when video can play
  private _playing   = false
  private _cfg: VideoEffectConfig

  constructor(cfg: VideoEffectConfig) {
    super()
    this._cfg = cfg

    // ── Video element ───────────────────────────────────────────────────────
    this.video          = document.createElement('video')
    this.video.src      = cfg.url
    this.video.loop     = cfg.loop ?? true
    this.video.muted    = true
    this.video.playsInline = true
    this.video.crossOrigin = 'anonymous'
    this.video.preload  = 'auto'

    this.texture = new THREE.VideoTexture(this.video)
    this.texture.minFilter = THREE.LinearFilter
    this.texture.magFilter = THREE.LinearFilter
    this.texture.colorSpace = THREE.SRGBColorSpace

    // ── Geometry ─────────────────────────────────────────────────────────────
    // fullscreen: clip-space quad (-1..1), rendered before camera transform
    // positioned: world-space plane, moves with the effect
    const geom = cfg.fullscreen
      ? new THREE.PlaneGeometry(2, 2)
      : new THREE.PlaneGeometry(cfg.planeSize ?? 2, cfg.planeSize ?? 2)

    if (cfg.fullscreen) {
      // Use a custom shader so the quad always fills the screen regardless of
      // camera — same trick as InfiniteVoidEffect
      this.mat = new THREE.ShaderMaterial({
        vertexShader:   OVERLAY_VERT,
        fragmentShader: OVERLAY_FRAG,
        uniforms: {
          uVideo:       { value: this.texture },
          uOpacity:     { value: 0 },
          uAspect:      { value: window.innerWidth / window.innerHeight },
          uVideoAspect: { value: 16/9 },
        },
        transparent: true,
        depthWrite:  false,
        depthTest:   false,
        blending:    cfg.blending ?? THREE.AdditiveBlending,
      })
    } else {
      this.mat = new THREE.MeshBasicMaterial({
        map:         this.texture,
        transparent: true,
        opacity:     0,
        blending:    cfg.blending ?? THREE.AdditiveBlending,
        depthWrite:  false,
        side:        THREE.DoubleSide,
      })
    }

    this.mesh = new THREE.Mesh(geom, this.mat)
    this.mesh.renderOrder = 98
    this.group.add(this.mesh)

    // ── Probe if the video file actually exists ───────────────────────────
    // If the URL 404s (Blender hasn't been run yet), stay silent — the
    // procedural effect underneath is the fallback.
    fetch(cfg.url, { method: 'HEAD' })
      .then(r => {
        if (!r.ok) return
        this._available = true
        this.video.load()
      })
      .catch(() => { /* file not found — no-op */ })
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  spawn(): void {
    super.spawn()
    if (this._available && !this._playing) {
      this.video.currentTime = 0
      this.video.play().catch(() => { /* autoplay policy */ })
      this._playing = true
    }
  }

  override beginDissipate(): void {
    super.beginDissipate()
    if (!this._cfg.loop) this.video.pause()
  }

  update(dt: number): void {
    this.tickPhase(dt)

    if (!this._available) return  // no video — stay invisible, do nothing

    const t = this.spawnT * (1 - this.dissipateT)

    if (this._cfg.fullscreen) {
      const u = (this.mat as THREE.ShaderMaterial).uniforms
      u.uOpacity.value = t
      u.uAspect.value  = window.innerWidth / window.innerHeight
    } else {
      ;(this.mat as THREE.MeshBasicMaterial).opacity = t
    }

    this.texture.needsUpdate = true
  }

  setPosition(pos: THREE.Vector3): void {
    if (!this._cfg.fullscreen) {
      this.group.position.copy(pos)
      // Face the camera (always upright in the orthographic view)
      this.group.rotation.set(0, 0, 0)
    }
  }

  dispose(): void {
    this.video.pause()
    this.video.src   = ''
    this._playing    = false
    this.texture.dispose()
    this.mat.dispose()
    this.mesh.geometry.dispose()
  }

  get isAvailable(): boolean { return this._available }
}
