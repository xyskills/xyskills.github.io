/**
 * Recording with layout composition.
 *
 * Layouts:
 *  single      — effects canvas only
 *  side-by-side — camera (mirrored) | effects, at native width × 2
 *  stacked      — effects top | camera bottom (TikTok format)
 *  pip          — effects fullscreen + camera inset bottom-right
 *
 * Quality: VP9 at 50 Mbps (≈ 2K 60fps broadcast quality).
 * With-debug: composites the landmark canvas on top of the output.
 */

export type RecordingLayout = 'single' | 'side-by-side' | 'stacked' | 'pip'

export interface RecordingStartOpts {
  layout: RecordingLayout
  withDebug: boolean
}

export class RecordingManager {
  private recorder: MediaRecorder | null = null
  private chunks: Blob[] = []
  private compositeCanvas: HTMLCanvasElement | null = null
  private compositeCtx: CanvasRenderingContext2D | null = null
  private rafId = 0
  private _recording = false

  // sources — kept so the RAF loop can use them
  private _effectsCanvas: HTMLCanvasElement | null = null
  private _videoElement: HTMLVideoElement | null = null
  private _debugCanvas: HTMLCanvasElement | null = null
  private _opts: RecordingStartOpts = { layout: 'single', withDebug: false }

  get recording(): boolean { return this._recording }

  start(
    effectsCanvas: HTMLCanvasElement,
    videoElement: HTMLVideoElement,
    opts: RecordingStartOpts,
    debugCanvas?: HTMLCanvasElement,
  ): void {
    if (this._recording) return
    this._recording = true
    this._effectsCanvas = effectsCanvas
    this._videoElement  = videoElement
    this._debugCanvas   = debugCanvas ?? null
    this._opts          = opts

    // Determine output dimensions
    const sw = effectsCanvas.width
    const sh = effectsCanvas.height
    let outW = sw, outH = sh
    if (opts.layout === 'side-by-side') { outW = sw * 2 }
    if (opts.layout === 'stacked')      { outH = sh * 2 }

    this.compositeCanvas = document.createElement('canvas')
    this.compositeCanvas.width  = outW
    this.compositeCanvas.height = outH
    this.compositeCtx = this.compositeCanvas.getContext('2d')!

    const fps  = 60
    const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
      ? 'video/webm;codecs=vp9'
      : 'video/webm;codecs=vp8'
    // 50 Mbps — broadcast quality for 2K 60fps
    const videoBitsPerSecond = 50_000_000

    this.chunks = []
    const stream = this.compositeCanvas.captureStream(fps)
    this.recorder = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond })
    this.recorder.ondataavailable = (e) => { if (e.data.size > 0) this.chunks.push(e.data) }
    this.recorder.start(100)

    this.composeFrame()
  }

  private composeFrame(): void {
    if (!this._recording || !this.compositeCtx || !this.compositeCanvas
        || !this._effectsCanvas || !this._videoElement) return

    const ctx  = this.compositeCtx
    const ec   = this._effectsCanvas
    const vid  = this._videoElement
    const dbg  = this._debugCanvas
    const W    = this.compositeCanvas.width
    const H    = this.compositeCanvas.height
    const sw   = ec.width
    const sh   = ec.height

    ctx.clearRect(0, 0, W, H)

    switch (this._opts.layout) {
      case 'single':
        ctx.drawImage(ec, 0, 0, W, H)
        break

      case 'side-by-side': {
        // Left: mirrored raw camera  |  Right: effects
        ctx.save()
        ctx.translate(sw, 0); ctx.scale(-1, 1)
        ctx.drawImage(vid, 0, 0, sw, H)
        ctx.restore()
        ctx.drawImage(ec, sw, 0, sw, H)
        // divider line
        ctx.strokeStyle = 'rgba(255,255,255,0.15)'
        ctx.lineWidth = 2
        ctx.beginPath(); ctx.moveTo(sw, 0); ctx.lineTo(sw, H); ctx.stroke()
        break
      }

      case 'stacked': {
        // Top: effects  |  Bottom: mirrored camera
        ctx.drawImage(ec, 0, 0, W, sh)
        ctx.save()
        ctx.translate(W, sh); ctx.scale(-1, 1)
        ctx.drawImage(vid, -W, 0, W, sh)
        ctx.restore()
        ctx.strokeStyle = 'rgba(255,255,255,0.15)'
        ctx.lineWidth = 2
        ctx.beginPath(); ctx.moveTo(0, sh); ctx.lineTo(W, sh); ctx.stroke()
        break
      }

      case 'pip': {
        // Fullscreen effects
        ctx.drawImage(ec, 0, 0, W, H)
        // PiP inset: 28% wide, bottom-right
        const pipW  = Math.round(W * 0.28)
        const pipH  = Math.round(H * 0.28)
        const pipX  = W - pipW - 20
        const pipY  = H - pipH - 20
        // Rounded clip
        ctx.save()
        ctx.beginPath()
        ctx.roundRect(pipX, pipY, pipW, pipH, 10)
        ctx.clip()
        ctx.translate(pipX + pipW, pipY); ctx.scale(-1, 1)
        ctx.drawImage(vid, 0, 0, pipW, pipH)
        ctx.restore()
        // PiP border
        ctx.save()
        ctx.strokeStyle = 'rgba(255,255,255,0.3)'
        ctx.lineWidth = 2
        ctx.beginPath(); ctx.roundRect(pipX, pipY, pipW, pipH, 10); ctx.stroke()
        ctx.restore()
        break
      }
    }

    // Debug overlay on top (landmarks canvas)
    if (this._opts.withDebug && dbg && dbg.width > 0) {
      ctx.drawImage(dbg, 0, 0, W, H)
    }

    this.rafId = requestAnimationFrame(() => this.composeFrame())
  }

  async stop(): Promise<void> {
    if (!this._recording) return
    this._recording = false
    cancelAnimationFrame(this.rafId)

    if (this.recorder && this.recorder.state !== 'inactive') {
      await new Promise<void>((resolve) => {
        this.recorder!.onstop = () => {
          const blob = new Blob(this.chunks, { type: this.recorder!.mimeType })
          const url  = URL.createObjectURL(blob)
          const a    = document.createElement('a')
          a.href     = url
          const ts   = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
          const layout = this._opts.layout.replace('-', '_')
          a.download = `recording_${layout}_${ts}.webm`
          document.body.appendChild(a); a.click(); document.body.removeChild(a)
          URL.revokeObjectURL(url)
          resolve()
        }
        this.recorder!.stop()
      })
    }

    this.recorder         = null
    this.compositeCanvas  = null
    this.compositeCtx     = null
    this._effectsCanvas   = null
    this._videoElement    = null
    this._debugCanvas     = null
  }
}
