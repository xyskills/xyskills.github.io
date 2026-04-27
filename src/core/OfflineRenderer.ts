/**
 * Offline render pipeline.
 *
 * Takes a raw camera recording (Blob) + an event log and produces a
 * composited video (raw camera + Three.js effects) without competing with
 * MediaPipe or real-time rendering.
 *
 * Compositing runs faster than real-time: a 30s clip typically takes ~5-10s.
 */
import * as THREE from 'three'
import { BlueEffect } from '@/rendering/effects/BlueEffect'
import { RedEffect } from '@/rendering/effects/RedEffect'
import { HollowPurpleEffect } from '@/rendering/effects/HollowPurpleEffect'
import { InfiniteVoidEffect } from '@/rendering/effects/InfiniteVoidEffect'
import type { EffectRenderer } from '@/rendering/effects/EffectRenderer'
import type { EffectEvent } from './EventLog'
import type { RecordingFormat } from './RecordingManager'

type AbilityKey = 'blue' | 'red' | 'purple' | 'domain'

function cropRect(
  srcW: number, srcH: number, fmt: RecordingFormat,
): { sx: number; sy: number; sw: number; sh: number } {
  if (fmt === 'original') return { sx: 0, sy: 0, sw: srcW, sh: srcH }
  const [tw, th] = fmt === '16:9' ? [16, 9] : fmt === '9:16' ? [9, 16] : [1, 1]
  let cw = srcW, ch = Math.round(srcW * th / tw)
  if (ch > srcH) { ch = srcH; cw = Math.round(srcH * tw / th) }
  return { sx: Math.round((srcW - cw) / 2), sy: Math.round((srcH - ch) / 2), sw: cw, sh: ch }
}

export class OfflineRenderer {
  private threeCanvas: HTMLCanvasElement
  private threeRenderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.OrthographicCamera
  private activeEffects = new Map<AbilityKey, EffectRenderer>()
  private dyingEffects  = new Set<EffectRenderer>()
  private frustumW = 2
  private frustumH = 2

  constructor() {
    this.threeCanvas = document.createElement('canvas')
    this.threeRenderer = new THREE.WebGLRenderer({
      canvas: this.threeCanvas,
      antialias: false,
      alpha: true,
      premultipliedAlpha: false,
      powerPreference: 'high-performance',
    })
    this.threeRenderer.setClearColor(0x000000, 0)
    this.scene  = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
    this.camera.position.z = 10
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.6))
  }

  // Convert normalized anchor (0-1) → world position matching SceneManager.landmarkToWorld
  private toWorld(ax: number, ay: number, az = 0): THREE.Vector3 {
    return new THREE.Vector3(
      -(ax - 0.5) * this.frustumW,
      -(ay - 0.5) * this.frustumH,
      az,
    )
  }

  private spawnEffect(key: AbilityKey): EffectRenderer {
    let effect: EffectRenderer
    switch (key) {
      case 'blue':   effect = new BlueEffect(); break
      case 'red':    effect = new RedEffect(); break
      case 'purple': effect = new HollowPurpleEffect(); break
      case 'domain': effect = new InfiniteVoidEffect(); break
    }
    this.activeEffects.set(key, effect)
    this.scene.add(effect.getObject3D())
    effect.spawn()
    return effect
  }

  private dissipateEffect(key: AbilityKey): void {
    const effect = this.activeEffects.get(key)
    if (!effect) return
    this.activeEffects.delete(key)
    effect.beginDissipate()
    this.dyingEffects.add(effect)
  }

  private processEvent(ev: EffectEvent): void {
    const key = ev.ability as AbilityKey | undefined
    switch (ev.type) {
      case 'spawn':
        if (!key) break
        {
          const effect = this.spawnEffect(key)
          if (ev.ax !== undefined && ev.ay !== undefined) {
            effect.setPosition(this.toWorld(ev.ax, ev.ay, ev.az ?? 0))
          }
        }
        break
      case 'position':
        if (!key) break
        {
          const effect = this.activeEffects.get(key)
          if (effect && ev.ax !== undefined && ev.ay !== undefined) {
            effect.setPosition(this.toWorld(ev.ax, ev.ay, ev.az ?? 0))
            if (ev.depth !== undefined) effect.setScale(ev.depth)
          }
        }
        break
      case 'dissipate':
        if (key) this.dissipateEffect(key)
        break
      case 'domain':
        this.spawnEffect('domain')
        break
      case 'domain_end':
        this.dissipateEffect('domain')
        break
    }
  }

  private tickEffects(dt: number): void {
    for (const effect of this.activeEffects.values()) effect.update(dt)
    for (const effect of this.dyingEffects) {
      effect.update(dt)
      if (effect.isDone) {
        this.scene.remove(effect.getObject3D())
        effect.dispose()
        this.dyingEffects.delete(effect)
      }
    }
  }

  /**
   * Composite raw video + event-driven effects into a WebM.
   * The result is downloaded automatically when done.
   *
   * @param rawBlob   - Blob from the raw camera MediaRecorder
   * @param events    - Sorted event log from EventLog.stop()
   * @param format    - Output crop format
   * @param fps       - Target output FPS
   * @param onProgress - 0→1 progress callback
   */
  async composite(
    rawBlob: Blob,
    events: EffectEvent[],
    format: RecordingFormat,
    fps: 30 | 60,
    onProgress: (progress: number) => void,
  ): Promise<void> {
    // ── Load raw video ──
    const videoUrl = URL.createObjectURL(rawBlob)
    const video = document.createElement('video')
    video.src = videoUrl
    video.muted = true
    video.playsInline = true
    video.preload = 'auto'
    document.body.appendChild(video)

    await new Promise<void>((res, rej) => {
      video.onloadedmetadata = () => res()
      video.onerror = rej
    })

    const vw = video.videoWidth
    const vh = video.videoHeight
    const duration = video.duration * 1000  // ms

    // ── Set up Three.js ──
    this.frustumH = 2
    this.frustumW = this.frustumH * (vw / vh)
    this.threeCanvas.width  = vw
    this.threeCanvas.height = vh
    this.threeRenderer.setSize(vw, vh, false)
    this.camera.left   = -this.frustumW / 2
    this.camera.right  =  this.frustumW / 2
    this.camera.top    =  this.frustumH / 2
    this.camera.bottom = -this.frustumH / 2
    this.camera.updateProjectionMatrix()

    // ── Set up output canvas ──
    const { sw: cropW, sh: cropH } = cropRect(vw, vh, format)
    const outCanvas = document.createElement('canvas')
    outCanvas.width  = cropW
    outCanvas.height = cropH
    const outCtx = outCanvas.getContext('2d')!

    // ── MediaRecorder on output canvas ──
    const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
      ? 'video/webm;codecs=vp9' : 'video/webm;codecs=vp8'
    const bps = cropW * cropH > 900_000 ? 15_000_000 : 8_000_000
    const recorder = new MediaRecorder(outCanvas.captureStream(fps), { mimeType: mime, videoBitsPerSecond: bps })
    const chunks: Blob[] = []
    recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data) }
    recorder.start(100)

    const sortedEvents = [...events].sort((a, b) => a.t - b.t)
    let eventIdx = 0
    let lastVideoTime = -1

    const { sx, sy, sw, sh } = cropRect(vw, vh, format)

    await new Promise<void>((resolve) => {
      const onFrame = (_now: number, meta: { mediaTime: number }) => {
        const currentMs = meta.mediaTime * 1000
        const dt = lastVideoTime < 0 ? 1 / fps : Math.min((currentMs - lastVideoTime) / 1000, 0.1)
        lastVideoTime = currentMs

        // Process events up to current timestamp
        while (eventIdx < sortedEvents.length && sortedEvents[eventIdx].t <= currentMs) {
          this.processEvent(sortedEvents[eventIdx++])
        }

        this.tickEffects(dt)
        this.threeRenderer.render(this.scene, this.camera)

        // Composite: mirrored video + effects overlay
        outCtx.clearRect(0, 0, cropW, cropH)
        outCtx.save()
        outCtx.translate(cropW, 0); outCtx.scale(-1, 1)
        outCtx.drawImage(video, sx, sy, sw, sh, 0, 0, cropW, cropH)
        outCtx.restore()
        outCtx.drawImage(this.threeCanvas, sx, sy, sw, sh, 0, 0, cropW, cropH)

        onProgress(Math.min(currentMs / duration, 1))

        if (currentMs >= duration - 50) {
          video.pause()
          resolve()
          return
        }

        // Type-safe: requestVideoFrameCallback exists in modern browsers
        ;(video as HTMLVideoElement & { requestVideoFrameCallback: (cb: typeof onFrame) => void })
          .requestVideoFrameCallback(onFrame)
      }

      ;(video as HTMLVideoElement & { requestVideoFrameCallback: (cb: typeof onFrame) => void })
        .requestVideoFrameCallback(onFrame)
      video.play().catch(console.error)
    })

    // ── Save output ──
    await new Promise<void>((resolve) => {
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: recorder.mimeType })
        const url  = URL.createObjectURL(blob)
        const a    = document.createElement('a')
        a.href = url
        a.download = `hd_composite_${new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-')}.webm`
        document.body.appendChild(a); a.click(); document.body.removeChild(a)
        URL.revokeObjectURL(url)
        URL.revokeObjectURL(videoUrl)
        resolve()
      }
      recorder.stop()
    })

    // ── Cleanup ──
    document.body.removeChild(video)
    for (const effect of [...this.activeEffects.values(), ...this.dyingEffects]) {
      this.scene.remove(effect.getObject3D())
      effect.dispose()
    }
    this.activeEffects.clear()
    this.dyingEffects.clear()
  }

  dispose(): void {
    this.threeRenderer.dispose()
  }
}
