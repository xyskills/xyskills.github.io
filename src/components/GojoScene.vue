<template>
  <div class="scene-container">
    <!-- Video hidden but still active for MediaPipe -->
    <video ref="videoRef" autoplay playsinline class="hidden-video" />
    <!-- Single canvas renders everything: video bg + distortion + effects -->
    <canvas ref="canvasRef" class="main-canvas" />
    <DebugOverlay
      ref="debugOverlayRef"
      :hands="currentHands"
      :gestures="currentGestures"
      :fps="fps"
      :abilityDebug="abilityDebugState"
      :effectsEnabled="effectsEnabled"
      :rawMetrics="rawHandMetrics"
      @toggle-effects="effectsEnabled = !effectsEnabled"
    />
    <HUD :activeAbilities="activeAbilityNames" :abilityDebug="abilityDebugState" />
    <RecordingControls
      @start="onRecStart"
      @stop="onRecStop"
      @abort="onRecAbort"
      @format-change="currentRecFormat = $event"
    />
    <FormatGuide v-if="!isRecording" :format="currentRecFormat" />
    <div v-if="loading" class="loading-overlay">
      <div class="loading-text">Initializing Infinity...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { EventBus } from '@/core/EventBus'
import { HandTracker } from '@/core/HandTracker'
import { GestureRecognizer } from '@/core/GestureRecognizer'
import { AbilityManager } from '@/core/AbilityManager'
import { SceneManager } from '@/rendering/SceneManager'
import { HandRaisedGesture } from '@/core/gestures/HandRaisedGesture'
import { FingerFlickGesture } from '@/core/gestures/FingerFlickGesture'
import { CrossedFingersGesture } from '@/core/gestures/CrossedFingersGesture'
import { BlueAbility } from '@/core/abilities/BlueAbility'
import { RedAbility } from '@/core/abilities/RedAbility'
import { HollowPurpleAbility } from '@/core/abilities/HollowPurpleAbility'
import { GestureType } from '@/types/gesture'
import type { GestureEvent } from '@/types/gesture'
import type { HandData } from '@/types/hand'
import DebugOverlay from './DebugOverlay.vue'
import HUD from './HUD.vue'
import RecordingControls from './RecordingControls.vue'
import FormatGuide from './FormatGuide.vue'
import { RecordingManager } from '@/core/RecordingManager'
import type { RecordingStartOpts, RecordingFormat } from '@/core/RecordingManager'
import type { AbilityDebugState } from '@/core/AbilityManager'
import { getNormalizedPinchDistance, getHandSize } from '@/utils/landmark-utils'
import { HandLandmark } from '@/types/hand'

const videoRef         = ref<HTMLVideoElement>()
const canvasRef        = ref<HTMLCanvasElement>()
const debugOverlayRef  = ref<InstanceType<typeof DebugOverlay>>()
const loading          = ref(true)
const currentHands     = ref<HandData[]>([])
const currentGestures  = ref<GestureEvent[]>([])
const activeAbilityNames = ref<string[]>([])
const fps              = ref(0)
const effectsEnabled   = ref(true)
const abilityDebugState = ref<AbilityDebugState | null>(null)

const rawHandMetrics = ref<{
  normPinch: number
  wristSpeed: number
  fingersCrossed: boolean
  handSize: number
}[]>([])

const recordingManager  = new RecordingManager()
const currentRecFormat  = ref<RecordingFormat>('original')
const isRecording       = ref(false)

function onRecStart(opts: RecordingStartOpts) {
  if (!canvasRef.value || !videoRef.value) return
  const debugCanvas = opts.withDebug
    ? debugOverlayRef.value?.landmarkCanvas?.value ?? undefined
    : undefined
  recordingManager.start(canvasRef.value, videoRef.value, opts, debugCanvas)
  isRecording.value = true
}

function onRecStop() {
  recordingManager.stop()
  isRecording.value = false
}

function onRecAbort() {
  recordingManager.abort()
  isRecording.value = false
}

let eventBus: EventBus
let handTracker: HandTracker
let gestureRecognizer: GestureRecognizer
let abilityManager: AbilityManager
let sceneManager: SceneManager
let animationFrameId = 0
let frameCount = 0
let lastFpsTime = performance.now()

function waitForVideoDimensions(video: HTMLVideoElement): Promise<void> {
  return new Promise((resolve) => {
    if (video.videoWidth > 0 && video.videoHeight > 0) {
      resolve()
      return
    }
    const check = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0) resolve()
      else requestAnimationFrame(check)
    }
    check()
  })
}

onMounted(async () => {
  if (!videoRef.value || !canvasRef.value) return

  eventBus = new EventBus()
  sceneManager = new SceneManager(canvasRef.value)
  handTracker = new HandTracker(videoRef.value, eventBus)
  gestureRecognizer = new GestureRecognizer(eventBus)
  abilityManager = new AbilityManager(eventBus, sceneManager)

  gestureRecognizer.registerGesture(new HandRaisedGesture('Left'))
  gestureRecognizer.registerGesture(new HandRaisedGesture('Right'))
  gestureRecognizer.registerGesture(new FingerFlickGesture('Left'))
  gestureRecognizer.registerGesture(new FingerFlickGesture('Right'))
  gestureRecognizer.registerGesture(new CrossedFingersGesture())

  // MediaPipe mirrors: user's right hand = "Left" label, user's left = "Right" label
  abilityManager.addAnimation(GestureType.LEFT_HAND_RAISED, () => new RedAbility())
  abilityManager.addAnimation(GestureType.RIGHT_HAND_RAISED, () => new BlueAbility())
  abilityManager.addAnimation(GestureType.HANDS_MERGED, () => new HollowPurpleAbility())

  const detectedThisFrame = new Set<GestureType>()

  eventBus.on('handUpdate', (hands) => {
    currentHands.value = hands
    detectedThisFrame.clear()
  })

  eventBus.on('gestureDetected', (event) => {
    detectedThisFrame.add(event.type)
    // Single reactive mutation — avoids Vue scheduler confusion from multiple rapid mutations
    const now = performance.now()
    currentGestures.value = [
      ...currentGestures.value.filter(g => {
        const ttl = g.type.includes('flick') ? 1500 : 600
        return now - g.timestamp < ttl && g.type !== event.type
      }),
      event,
    ]
  })

  try {
    await handTracker.initialize()
    await waitForVideoDimensions(videoRef.value)
    // Pass video element directly so SceneManager creates a VideoTexture
    sceneManager.initialize(videoRef.value)
    handTracker.start()
    loading.value = false
    startRenderLoop(detectedThisFrame)
  } catch (err) {
    console.error('Failed to initialize:', err)
    loading.value = false
  }
})

function startRenderLoop(detectedThisFrame: Set<GestureType>) {
  let lastTime = performance.now()

  function loop() {
    const now = performance.now()
    const dt = Math.min((now - lastTime) / 1000, 0.1)
    lastTime = now

    frameCount++
    if (now - lastFpsTime >= 1000) {
      fps.value = frameCount
      frameCount = 0
      lastFpsTime = now
    }

    abilityManager.removeAbilitiesForMissingHands(detectedThisFrame)
    abilityManager.update(dt)
    abilityDebugState.value = abilityManager.getDebugState()
    activeAbilityNames.value = abilityDebugState.value.activeAbilities

    // Compute raw per-hand metrics for debug overlay
    rawHandMetrics.value = currentHands.value.map(hand => {
      const lm = hand.landmarks
      const normPinch = getNormalizedPinchDistance(lm)
      const hs = getHandSize(lm)

      // Wrist speed: simple frame-to-frame (stored across frames via closure isn't ideal,
      // so we expose what we have — normPinch + handSize are the key ones)
      const mcpSign = lm[HandLandmark.INDEX_FINGER_MCP].x - lm[HandLandmark.MIDDLE_FINGER_MCP].x
      const tipSign = lm[HandLandmark.INDEX_FINGER_TIP].x - lm[HandLandmark.MIDDLE_FINGER_TIP].x
      const handWidth = Math.abs(lm[HandLandmark.INDEX_FINGER_MCP].x - lm[HandLandmark.PINKY_MCP].x)
      const crossDepth = Math.abs(lm[HandLandmark.INDEX_FINGER_TIP].x - lm[HandLandmark.MIDDLE_FINGER_TIP].x)
      const fingersCrossed = (mcpSign * tipSign < 0)
        && lm[HandLandmark.INDEX_FINGER_TIP].y < lm[HandLandmark.INDEX_FINGER_PIP].y
        && lm[HandLandmark.MIDDLE_FINGER_TIP].y < lm[HandLandmark.MIDDLE_FINGER_PIP].y
        && crossDepth > handWidth * 0.05

      return { normPinch, wristSpeed: 0, fingersCrossed, handSize: hs }
    })

    sceneManager.render(dt, effectsEnabled.value)
    recordingManager.tick()

    animationFrameId = requestAnimationFrame(loop)
  }
  loop()
}

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  handTracker?.stop()
})
</script>

<style scoped>
.scene-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
}

.hidden-video {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.main-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.loading-text {
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
</style>
