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

  // Offscreen canvas at reduced resolution for MediaPipe — 480p is plenty for landmark accuracy
  // and runs 3-4x faster than full 1080p detection
  private detectionCanvas: HTMLCanvasElement
  private detectionCtx: CanvasRenderingContext2D
  private readonly DETECT_W = 640
  private readonly DETECT_H = 480
  private skipCounter = 0

  constructor(videoElement: HTMLVideoElement, eventBus: EventBus) {
    this.videoElement = videoElement
    this.eventBus = eventBus
    this.detectionCanvas = document.createElement('canvas')
    this.detectionCanvas.width  = this.DETECT_W
    this.detectionCanvas.height = this.DETECT_H
    this.detectionCtx = this.detectionCanvas.getContext('2d', { willReadFrequently: false })!
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
    }

    this.animationFrameId = requestAnimationFrame(() => this.detectFrame())
  }
}
