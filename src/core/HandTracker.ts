import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision'
import type { HandData } from '@/types/hand'
import type { EventBus } from './EventBus'

const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`
  return `${base}${path.replace(/^\/+/, '')}`
}

export class HandTracker {
  private handLandmarker: HandLandmarker | null = null
  private videoElement: HTMLVideoElement
  private eventBus: EventBus
  private running = false
  private lastVideoTime = -1
  private animationFrameId = 0

  // Offscreen canvas at reduced resolution for MediaPipe — 480p is plenty for landmark accuracy
  // and runs 3-4x faster than full 1080p detection
  private detectionCanvas: HTMLCanvasElement
  private detectionCtx: CanvasRenderingContext2D
  private readonly DETECT_W = 640
  private readonly DETECT_H = 480
  private skipCounter = 0

  // Exponential landmark smoothing — reduces jitter without introducing OneEuro complexity
  private smoothedLandmarks: Map<string, { x: number; y: number; z: number }[]> = new Map()
  private readonly SMOOTH_ALPHA = 0.55  // 0 = sluggish, 1 = raw

  constructor(videoElement: HTMLVideoElement, eventBus: EventBus) {
    this.videoElement = videoElement
    this.eventBus     = eventBus
    this.detectionCanvas = document.createElement('canvas')
    this.detectionCanvas.width  = this.DETECT_W
    this.detectionCanvas.height = this.DETECT_H
    this.detectionCtx = this.detectionCanvas.getContext('2d', { willReadFrequently: false })!
  }

  async initialize(): Promise<void> {
    const vision = await FilesetResolver.forVisionTasks(withBase('/wasm'))

    this.handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: withBase('/models/hand_landmarker.task'),
        delegate: 'GPU',
      },
      runningMode: 'VIDEO',
      numHands: 2,
      minHandDetectionConfidence: 0.72,
      minHandPresenceConfidence:  0.70,
      minTrackingConfidence:      0.65,
    })

    await this.startCamera()
  }

  private async startCamera(): Promise<void> {
    // 1080p/60fps is the sweet spot — 2K adds huge MediaPipe + Three.js overhead with minimal visual gain
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width:      { ideal: 1920, min: 1280 },
        height:     { ideal: 1080, min: 720  },
        facingMode: 'user',
        frameRate:  { ideal: 60,   min: 30   },
      },
    })
    this.videoElement.srcObject = stream
    await new Promise<void>((resolve) => {
      this.videoElement.onloadedmetadata = () => {
        this.videoElement.play()
        resolve()
      }
    })
    const track = stream.getVideoTracks()[0]
    const s = track.getSettings()
    console.log(`[Camera] ${s.width}x${s.height} @ ${s.frameRate}fps`)
  }

  start(): void {
    this.running = true
    this.detectFrame()
  }

  stop(): void {
    this.running = false
    cancelAnimationFrame(this.animationFrameId)
    const stream = this.videoElement.srcObject as MediaStream | null
    stream?.getTracks().forEach((t) => t.stop())
  }

  private detectFrame(): void {
    if (!this.running || !this.handLandmarker) return

    const now = performance.now()
    if (this.videoElement.currentTime !== this.lastVideoTime) {
      this.lastVideoTime = this.videoElement.currentTime

      // Skip every other frame — MediaPipe at 640x480 every 2nd frame is plenty for
      // smooth tracking while freeing massive GPU/CPU budget for Three.js rendering
      this.skipCounter++
      if (this.skipCounter % 2 === 0) {
        // Draw video downscaled to 640x480 — landmark coords are normalized (0..1)
        // so resolution doesn't affect position accuracy, only detection confidence
        this.detectionCtx.drawImage(this.videoElement, 0, 0, this.DETECT_W, this.DETECT_H)

        const result = this.handLandmarker.detectForVideo(this.detectionCanvas, now)

        const seenHandedness = new Set<string>()
        const hands: HandData[] = []
        for (let i = 0; i < (result.landmarks?.length ?? 0); i++) {
          const handedness = result.handedness[i][0].categoryName as 'Left' | 'Right'
          seenHandedness.add(handedness)
          const raw = result.landmarks[i].map((l) => ({ x: l.x, y: l.y, z: l.z }))
          hands.push({
            landmarks:      this.smoothLandmarks(handedness, raw),
            worldLandmarks: result.worldLandmarks[i].map((l) => ({ x: l.x, y: l.y, z: l.z })),
            handedness,
          })
        }
        // Clear smoothing state for hands that have disappeared
        for (const key of this.smoothedLandmarks.keys()) {
          if (!seenHandedness.has(key)) this.smoothedLandmarks.delete(key)
        }

        this.eventBus.emit('handUpdate', hands)
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.detectFrame())
  }

  private smoothLandmarks(
    handId: string,
    raw: { x: number; y: number; z: number }[],
  ): { x: number; y: number; z: number }[] {
    const prev = this.smoothedLandmarks.get(handId)
    if (!prev) {
      const copy = raw.map(l => ({ ...l }))
      this.smoothedLandmarks.set(handId, copy)
      return copy
    }
    const a = this.SMOOTH_ALPHA
    const smoothed = raw.map((lm, i) => ({
      x: prev[i].x + a * (lm.x - prev[i].x),
      y: prev[i].y + a * (lm.y - prev[i].y),
      z: prev[i].z + a * (lm.z - prev[i].z),
    }))
    this.smoothedLandmarks.set(handId, smoothed)
    return smoothed
  }
}
