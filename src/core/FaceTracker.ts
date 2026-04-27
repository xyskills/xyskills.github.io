import type { FilesetResolver } from '@mediapipe/tasks-vision'
import { FaceLandmarker } from '@mediapipe/tasks-vision'
import type { FaceData } from '@/types/face'
import type { EventBus } from './EventBus'

// MediaPipe face mesh eye-corner landmark indices (canonical face mesh)
const LEFT_EYE_INNER  = 133
const LEFT_EYE_OUTER  = 33
const RIGHT_EYE_INNER = 362
const RIGHT_EYE_OUTER = 263

/**
 * Loads the MediaPipe FaceLandmarker sharing the FilesetResolver already created
 * by HandTracker — both must come from the same WASM runtime.
 *
 * Emits 'faceUpdate' on the EventBus each frame a face is detected (or null when absent).
 */
export class FaceTracker {
  private faceLandmarker: FaceLandmarker | null = null
  private eventBus: EventBus

  constructor(eventBus: EventBus) {
    this.eventBus = eventBus
  }

  async initialize(vision: Awaited<ReturnType<typeof FilesetResolver.forVisionTasks>>): Promise<void> {
    try {
      this.faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: '/models/face_landmarker.task',
          delegate: 'GPU',
        },
        runningMode:          'VIDEO',
        numFaces:             1,
        outputFaceBlendshapes: true,
        outputFacialTransformationMatrixes: false,
      })
    } catch (e) {
      console.warn('[FaceTracker] Could not load face_landmarker.task — Six Eyes disabled.', e)
    }
  }

  /** Run face detection on the given canvas at the given timestamp. */
  detect(canvas: HTMLCanvasElement, timestampMs: number): void {
    if (!this.faceLandmarker) return

    const result = this.faceLandmarker.detectForVideo(canvas, timestampMs)
    if (!result.faceLandmarks?.length) {
      this.eventBus.emit('faceUpdate', null)
      return
    }

    const lms = result.faceLandmarks[0].map(l => ({ x: l.x, y: l.y, z: l.z }))

    // Build blendshapes map from the category array
    const blendshapes: Record<string, number> = {}
    const bsCats = result.faceBlendshapes?.[0]?.categories ?? []
    for (const cat of bsCats) {
      blendshapes[cat.categoryName] = cat.score
    }

    // Eye centres from corner landmarks
    const leftEye = {
      x: (lms[LEFT_EYE_INNER].x + lms[LEFT_EYE_OUTER].x) / 2,
      y: (lms[LEFT_EYE_INNER].y + lms[LEFT_EYE_OUTER].y) / 2,
    }
    const rightEye = {
      x: (lms[RIGHT_EYE_INNER].x + lms[RIGHT_EYE_OUTER].x) / 2,
      y: (lms[RIGHT_EYE_INNER].y + lms[RIGHT_EYE_OUTER].y) / 2,
    }

    const faceData: FaceData = { landmarks: lms, blendshapes, leftEye, rightEye }
    this.eventBus.emit('faceUpdate', faceData)
  }

  isReady(): boolean { return this.faceLandmarker !== null }
}
