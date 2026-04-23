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
    // Request highest available resolution for maximum quality
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width:  { ideal: 3840, min: 1280 },
        height: { ideal: 2160, min: 720  },
        facingMode: 'user',
        frameRate: { ideal: 60, min: 30 },
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
    const settings = track.getSettings()
    console.log(`Camera: ${settings.width}x${settings.height} @ ${settings.frameRate}fps`)
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
      const result = this.handLandmarker.detectForVideo(this.videoElement, now)

      const hands: HandData[] = []
      for (let i = 0; i < (result.landmarks?.length ?? 0); i++) {
        hands.push({
          landmarks: result.landmarks[i].map((l) => ({ x: l.x, y: l.y, z: l.z })),
          worldLandmarks: result.worldLandmarks[i].map((l) => ({ x: l.x, y: l.y, z: l.z })),
          handedness: result.handedness[i][0].categoryName as 'Left' | 'Right',
        })
      }

      this.eventBus.emit('handUpdate', hands)
    }

    this.animationFrameId = requestAnimationFrame(() => this.detectFrame())
  }
}
