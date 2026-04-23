import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision'
import type { HandData } from '@/types/hand'
import type { EventBus } from './EventBus'

export class HandTracker {
  private handLandmarker: HandLandmarker | null = null
  private videoElement: HTMLVideoElement
  private eventBus: EventBus
  private running = false
  private lastVideoTime = -1
  private animationFrameId = 0

  // Offscreen canvas for MediaPipe — fixes "NORM_RECT without IMAGE_DIMENSIONS" warning
  // by giving the detector an element with explicit pixel dimensions
  private detectionCanvas: HTMLCanvasElement | null = null
  private detectionCtx: CanvasRenderingContext2D | null = null

  constructor(videoElement: HTMLVideoElement, eventBus: EventBus) {
    this.videoElement = videoElement
    this.eventBus = eventBus
  }

  async initialize(): Promise<void> {
    const vision = await FilesetResolver.forVisionTasks('/wasm')

    this.handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: '/models/hand_landmarker.task',
        delegate: 'GPU',
      },
      runningMode: 'VIDEO',
      numHands: 2,
      minHandDetectionConfidence: 0.5,
      minHandPresenceConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })

    await this.startCamera()
  }

  private async startCamera(): Promise<void> {
    // Request 2K/1080p at 60fps — best quality for hand tracking + recording
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width:     { ideal: 2560, min: 1280 },
        height:    { ideal: 1440, min: 720  },
        facingMode: 'user',
        frameRate: { ideal: 60,   min: 30   },
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

      // Ensure detection canvas matches current video dimensions
      const vw = this.videoElement.videoWidth  || 640
      const vh = this.videoElement.videoHeight || 480
      if (!this.detectionCanvas || this.detectionCanvas.width !== vw || this.detectionCanvas.height !== vh) {
        this.detectionCanvas = document.createElement('canvas')
        this.detectionCanvas.width  = vw
        this.detectionCanvas.height = vh
        this.detectionCtx = this.detectionCanvas.getContext('2d')!
      }
      // Draw current video frame — canvas has explicit dimensions, suppresses NORM_RECT warning
      this.detectionCtx!.drawImage(this.videoElement, 0, 0, vw, vh)

      const result = this.handLandmarker.detectForVideo(this.detectionCanvas, now)

      const hands: HandData[] = []
      for (let i = 0; i < (result.landmarks?.length ?? 0); i++) {
        hands.push({
          landmarks:      result.landmarks[i].map((l) => ({ x: l.x, y: l.y, z: l.z })),
          worldLandmarks: result.worldLandmarks[i].map((l) => ({ x: l.x, y: l.y, z: l.z })),
          handedness:     result.handedness[i][0].categoryName as 'Left' | 'Right',
        })
      }

      this.eventBus.emit('handUpdate', hands)
    }

    this.animationFrameId = requestAnimationFrame(() => this.detectFrame())
  }
}
