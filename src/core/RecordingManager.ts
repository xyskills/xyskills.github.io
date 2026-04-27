/**
 * Recording — single recorder, one file.
 *
 * Sources (each ticked option = independent view):
 *   withEffects    → effects canvas (Three.js scene, no skeleton)
 *   withoutEffects → raw mirrored camera
 *   withDebug      → effects canvas + landmark skeleton overlay
 *
 * Layouts:
 *   single      → one source (first checked: effects > debug > camera)
 *   side-by-side→ camera left | effects right (format-cropped)
 *   stacked     → one row per checked source, top-to-bottom (needs ≥ 2)
 *   pip         → effects full + camera inset bottom-right
 *
 * Formats (applied to every source slot via center-crop):
 *   original → native camera resolution, no crop
 *   16:9     → center-crop to 16:9
 *   9:16     → center-crop to 9:16 (portrait, TikTok/Reels)
 *   1:1      → center-crop to square
 *
 * Always WebM VP9/VP8 — never MP4 from MediaRecorder.
 * MediaRecorder's MP4 produces fragmented fMP4 with broken duration metadata
 * (mvhd timescale mismatch), causing duration to appear wrong on upload.
 * VP9 WebM has correct, seekable metadata and is accepted by all platforms.
 *
 * tick() must be called once per render frame from the main loop.
 * abort() stops without saving.
 */

export type RecordingLayout = 'single' | 'side-by-side' | 'stacked' | 'pip'
export type RecordingFormat = 'original' | '16:9' | '9:16' | '1:1'
export type RecordingFps = 30 | 60

export interface RecordingStartOpts {
  layout: RecordingLayout
  format: RecordingFormat
  fps: RecordingFps
  withEffects: boolean
  withoutEffects: boolean
  withDebug: boolean
  hdMode?: boolean
}

// Crop a source to the target aspect ratio (center crop).
// Returns source-space {sx,sy,sw,sh} to pass to drawImage.
function cropRect(
  srcW: number, srcH: number, fmt: RecordingFormat,
): { sx: number; sy: number; sw: number; sh: number } {
  if (fmt === 'original') return { sx: 0, sy: 0, sw: srcW, sh: srcH }

  const [tw, th] = fmt === '16:9' ? [16, 9]
                 : fmt === '9:16' ? [9, 16]
                 :                  [1, 1]          // 1:1

  // Fit target ratio inside source: pick the axis that constrains
  let cw = srcW, ch = Math.round(srcW * th / tw)
  if (ch > srcH) { ch = srcH; cw = Math.round(srcH * tw / th) }
  return {
    sx: Math.round((srcW - cw) / 2),
    sy: Math.round((srcH - ch) / 2),
    sw: cw, sh: ch,
  }
}

// Slot pixel dimensions after applying the format crop to a srcW×srcH source.
function slotDims(
  srcW: number, srcH: number, fmt: RecordingFormat,
): { w: number; h: number } {
  const c = cropRect(srcW, srcH, fmt)
  return { w: c.sw, h: c.sh }
}

export class RecordingManager {
  private _recording = false
  private _opts: RecordingStartOpts = {
    layout: 'single', format: 'original', fps: 30,
    withEffects: true, withoutEffects: false, withDebug: false,
  }

  private _effectsCanvas: HTMLCanvasElement | null = null
  private _videoElement:  HTMLVideoElement  | null = null
  private _debugCanvas:   HTMLCanvasElement | null = null

  private recorder: MediaRecorder | null = null
  private chunks:   Blob[] = []
  private canvas:   HTMLCanvasElement | null = null
  private ctx:      CanvasRenderingContext2D | null = null

  // Raw camera stream recorder (for HD offline composite)
  private _rawRecorder: MediaRecorder | null = null
  private _rawChunks:   Blob[] = []

  get recording(): boolean { return this._recording }

  start(
    effectsCanvas: HTMLCanvasElement,
    videoElement: HTMLVideoElement,
    opts: RecordingStartOpts,
    debugCanvas?: HTMLCanvasElement,
  ): void {
    if (this._recording) return
    this._recording     = true
    this._effectsCanvas = effectsCanvas
    this._videoElement  = videoElement
    this._debugCanvas   = debugCanvas ?? null
    this._opts          = opts

    const sw = effectsCanvas.width
    const sh = effectsCanvas.height
    const fmt = opts.format
    const { w: slotW, h: slotH } = slotDims(sw, sh, fmt)

    // Output canvas dimensions
    let outW = slotW, outH = slotH
    if (opts.layout === 'side-by-side') {
      outW = slotW * 2
    } else if (opts.layout === 'stacked') {
      const rows = (opts.withEffects ? 1 : 0)
                 + (opts.withoutEffects ? 1 : 0)
                 + (opts.withDebug ? 1 : 0)
      outH = slotH * Math.max(1, rows)
    }

    this.canvas = document.createElement('canvas')
    this.canvas.width  = outW
    this.canvas.height = outH
    this.ctx = this.canvas.getContext('2d')!
    this.ctx.imageSmoothingEnabled = true
    this.ctx.imageSmoothingQuality = 'high'

    // Always VP9 WebM — MP4 from MediaRecorder has broken duration metadata (fMP4 mvhd mismatch)
    const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
      ? 'video/webm;codecs=vp9'
      : 'video/webm;codecs=vp8'

    // Adaptive bitrate based on slot pixels
    const pixels = slotW * slotH
    const bps = pixels > 2_000_000 ? 15_000_000
              : pixels > 900_000   ? 10_000_000
              :                       6_000_000

    this.chunks     = []
    this._tickFrame = 0
    const recFps = opts.fps ?? 30
    this.recorder = new MediaRecorder(this.canvas.captureStream(recFps), { mimeType: mime, videoBitsPerSecond: bps })
    this.recorder.ondataavailable = (e) => { if (e.data.size > 0) this.chunks.push(e.data) }
    this.recorder.start(100)
  }

  private _tickFrame = 0

  /** Call once per render frame. At 30fps mode, skips every other frame to save GPU. */
  tick(): void {
    if (!this._recording || !this.ctx || !this.canvas) return
    this._tickFrame++
    // At 30fps: skip every other frame to halve drawImage overhead
    // At 60fps: draw every frame (no skip)
    if (this._opts.fps <= 30 && this._tickFrame % 2 !== 0) return
    const ec  = this._effectsCanvas
    const vid = this._videoElement
    const dbg = this._debugCanvas
    if (!ec || !vid) return

    const ctx  = this.ctx
    const W    = this.canvas.width
    const H    = this.canvas.height
    const sw   = ec.width
    const sh   = ec.height
    const vw   = vid.videoWidth  || sw
    const vh   = vid.videoHeight || sh
    const fmt  = this._opts.format

    ctx.clearRect(0, 0, W, H)

    // ── helpers ────────────────────────────────────────────────────────────

    // Draw a canvas/video source into dest rect, center-cropped to fmt, optionally mirrored.
    const drawSlot = (
      src: HTMLCanvasElement | HTMLVideoElement,
      srcW: number, srcH: number,
      dx: number, dy: number, dw: number, dh: number,
      mirror = false,
    ) => {
      const { sx, sy, sw: csw, sh: csh } = cropRect(srcW, srcH, fmt)
      if (mirror) {
        ctx.save()
        ctx.translate(dx + dw, dy); ctx.scale(-1, 1)
        ctx.drawImage(src, sx, sy, csw, csh, 0, 0, dw, dh)
        ctx.restore()
      } else {
        ctx.drawImage(src, sx, sy, csw, csh, dx, dy, dw, dh)
      }
    }

    // Draw the "debug" source: effects + landmark overlay
    const drawDebugSlot = (dx: number, dy: number, dw: number, dh: number) => {
      drawSlot(ec, sw, sh, dx, dy, dw, dh)
      if (dbg && dbg.width > 0) {
        // Landmark canvas uses CSS pixels — draw full canvas over the slot
        ctx.drawImage(dbg, dx, dy, dw, dh)
      }
    }

    const { w: slotW, h: slotH } = slotDims(sw, sh, fmt)

    // ── layouts ────────────────────────────────────────────────────────────

    switch (this._opts.layout) {
      case 'single': {
        // Base: screen (effects canvas). Falls back to raw camera if screen not selected.
        if (this._opts.withEffects || this._opts.withDebug) {
          drawSlot(ec, sw, sh, 0, 0, W, H)
        } else if (this._opts.withoutEffects) {
          drawSlot(vid, vw, vh, 0, 0, W, H, true)
        }
        // Debug overlay on top if debug view is enabled
        if (this._opts.withDebug && dbg && dbg.width > 0) {
          ctx.drawImage(dbg, 0, 0, W, H)
        }
        break
      }

      case 'side-by-side': {
        // Left: raw camera (mirrored) | Right: effects
        drawSlot(vid, vw, vh, 0, 0, slotW, slotH, true)
        drawSlot(ec,  sw, sh, slotW, 0, slotW, slotH)
        break
      }

      case 'stacked': {
        // One row per enabled source
        let y = 0
        if (this._opts.withEffects) {
          drawSlot(ec, sw, sh, 0, y, slotW, slotH)
          y += slotH
        }
        if (this._opts.withoutEffects) {
          drawSlot(vid, vw, vh, 0, y, slotW, slotH, true)
          y += slotH
        }
        if (this._opts.withDebug) {
          drawDebugSlot(0, y, slotW, slotH)
        }
        break
      }

      case 'pip': {
        // Full: effects | Inset: raw camera bottom-right
        drawSlot(ec, sw, sh, 0, 0, W, H)
        const pipW = Math.round(W * 0.28)
        const pipH = Math.round(H * 0.28)
        const pipX = W - pipW - 20
        const pipY = H - pipH - 20
        ctx.save()
        ctx.beginPath(); ctx.roundRect(pipX, pipY, pipW, pipH, 10); ctx.clip()
        // PiP uses original crop regardless of format (inset is always native)
        const { sx, sy, sw: csw, sh: csh } = cropRect(vw, vh, 'original')
        ctx.translate(pipX + pipW, pipY); ctx.scale(-1, 1)
        ctx.drawImage(vid, sx, sy, csw, csh, 0, 0, pipW, pipH)
        ctx.restore()
        ctx.save()
        ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 2
        ctx.beginPath(); ctx.roundRect(pipX, pipY, pipW, pipH, 10); ctx.stroke()
        ctx.restore()
        break
      }
    }
  }

  async stop(): Promise<void> {
    if (!this._recording) return
    await this._finish(true)
  }

  abort(): void {
    if (!this._recording) return
    void this._finish(false)
  }

  private async _finish(save: boolean): Promise<void> {
    this._recording = false
    if (!this.recorder || this.recorder.state === 'inactive') { this._cleanup(); return }

    await new Promise<void>((resolve) => {
      this.recorder!.onstop = () => {
        if (save) {
          const ts     = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
          const layout = this._opts.layout.replace('-', '_')
          const fmt    = this._opts.format.replace(':', 'x')  // e.g. "9x16"
          const blob   = new Blob(this.chunks, { type: this.recorder!.mimeType })
          const url    = URL.createObjectURL(blob)
          const a      = document.createElement('a')
          a.href = url
          a.download = `recording_${layout}_${fmt}_${ts}.webm`
          document.body.appendChild(a); a.click(); document.body.removeChild(a)
          URL.revokeObjectURL(url)
        }
        resolve()
      }
      this.recorder!.stop()
    })
    this._cleanup()
  }

  private _cleanup(): void {
    this.recorder = null; this.canvas = null; this.ctx = null
    this._effectsCanvas = null; this._videoElement = null; this._debugCanvas = null
    this.chunks = []
  }

  // ── Raw camera recorder (HD offline composite) ────────────────────────────

  /** Start recording the raw camera stream at high quality. */
  startRaw(videoElement: HTMLVideoElement): void {
    const stream = videoElement.srcObject as MediaStream | null
    if (!stream) return
    this._rawChunks = []
    const mime = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
      ? 'video/webm;codecs=vp9' : 'video/webm;codecs=vp8'
    this._rawRecorder = new MediaRecorder(stream, {
      mimeType: mime,
      videoBitsPerSecond: 20_000_000,  // 20 Mbps — high quality raw
    })
    this._rawRecorder.ondataavailable = (e) => { if (e.data.size > 0) this._rawChunks.push(e.data) }
    this._rawRecorder.start(100)
  }

  /** Stop raw recording and return the captured Blob (or null on failure). */
  async stopRaw(): Promise<Blob | null> {
    if (!this._rawRecorder || this._rawRecorder.state === 'inactive') return null
    return new Promise<Blob>((resolve) => {
      this._rawRecorder!.onstop = () => {
        const blob = new Blob(this._rawChunks, { type: this._rawRecorder!.mimeType })
        this._rawRecorder = null
        this._rawChunks   = []
        resolve(blob)
      }
      this._rawRecorder!.stop()
    })
  }

  /** Abort raw recording without saving. */
  abortRaw(): void {
    if (this._rawRecorder && this._rawRecorder.state !== 'inactive') {
      this._rawRecorder.stop()
    }
    this._rawRecorder = null
    this._rawChunks   = []
  }
}
