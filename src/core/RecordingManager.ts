/**
 * Dual-stream recording: captures canvas (with effects) and/or raw video (without effects).
 * Uses MediaRecorder + canvas.captureStream() for high-quality WebM output.
 */
export class RecordingManager {
  private effectsRecorder: MediaRecorder | null = null
  private cleanRecorder: MediaRecorder | null = null
  private effectsChunks: Blob[] = []
  private cleanChunks: Blob[] = []
  private cleanCanvas: HTMLCanvasElement | null = null
  private cleanCtx: CanvasRenderingContext2D | null = null
  private cleanRafId = 0
  private videoElement: HTMLVideoElement | null = null
  private _recording = false

  get recording(): boolean { return this._recording }

  /**
   * Start recording. Pass flags to select which streams to capture.
   */
  start(
    effectsCanvas: HTMLCanvasElement,
    videoElement: HTMLVideoElement,
    opts: { withEffects: boolean; withoutEffects: boolean },
  ): void {
    if (this._recording) return
    this._recording = true

    const fps = 60
    // Prefer VP9 for quality, fall back to VP8
    const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
      ? 'video/webm;codecs=vp9'
      : 'video/webm;codecs=vp8'
    const videoBitsPerSecond = 12_000_000 // 12 Mbps

    if (opts.withEffects) {
      this.effectsChunks = []
      const stream = effectsCanvas.captureStream(fps)
      this.effectsRecorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond })
      this.effectsRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.effectsChunks.push(e.data)
      }
      this.effectsRecorder.start(100) // 100ms timeslice
    }

    if (opts.withoutEffects) {
      this.cleanChunks = []
      this.videoElement = videoElement

      // Create offscreen canvas matching video dimensions
      this.cleanCanvas = document.createElement('canvas')
      this.cleanCanvas.width = videoElement.videoWidth || 1920
      this.cleanCanvas.height = videoElement.videoHeight || 1080
      this.cleanCtx = this.cleanCanvas.getContext('2d')!

      const cleanStream = this.cleanCanvas.captureStream(fps)
      this.cleanRecorder = new MediaRecorder(cleanStream, { mimeType, videoBitsPerSecond })
      this.cleanRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.cleanChunks.push(e.data)
      }
      this.cleanRecorder.start(100)
      this.drawCleanFrame()
    }
  }

  private drawCleanFrame(): void {
    if (!this._recording || !this.cleanCtx || !this.videoElement || !this.cleanCanvas) return
    // Draw mirrored raw video (same as what user sees)
    this.cleanCtx.save()
    this.cleanCtx.translate(this.cleanCanvas.width, 0)
    this.cleanCtx.scale(-1, 1)
    this.cleanCtx.drawImage(this.videoElement, 0, 0, this.cleanCanvas.width, this.cleanCanvas.height)
    this.cleanCtx.restore()
    this.cleanRafId = requestAnimationFrame(() => this.drawCleanFrame())
  }

  /**
   * Stop recording and trigger downloads for captured streams.
   */
  async stop(): Promise<void> {
    if (!this._recording) return
    this._recording = false
    cancelAnimationFrame(this.cleanRafId)

    const downloads: Promise<void>[] = []

    if (this.effectsRecorder && this.effectsRecorder.state !== 'inactive') {
      downloads.push(this.finishRecorder(this.effectsRecorder, this.effectsChunks, 'recording-effects'))
    }
    if (this.cleanRecorder && this.cleanRecorder.state !== 'inactive') {
      downloads.push(this.finishRecorder(this.cleanRecorder, this.cleanChunks, 'recording-clean'))
    }

    await Promise.all(downloads)

    this.effectsRecorder = null
    this.cleanRecorder = null
    this.cleanCanvas = null
    this.cleanCtx = null
    this.videoElement = null
  }

  private finishRecorder(recorder: MediaRecorder, chunks: Blob[], prefix: string): Promise<void> {
    return new Promise((resolve) => {
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: recorder.mimeType })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
        a.download = `${prefix}_${ts}.webm`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
        resolve()
      }
      recorder.stop()
    })
  }
}
