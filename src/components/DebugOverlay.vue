<template>
  <div class="debug-overlay">
    <!-- Always mounted so recording can read it; hidden from screen when debug panel is closed -->
    <canvas ref="landmarkCanvas" class="landmark-canvas" :style="{ opacity: visible ? 1 : 0 }" />
    <div v-if="visible" class="debug-info">
      <div class="debug-title">
        DEBUG
        <button class="fx-toggle" @click="$emit('toggle-effects')" style="pointer-events:auto">
          FX {{ effectsEnabled ? 'ON' : 'OFF' }}
        </button>
      </div>

      <!-- System -->
      <div class="debug-row">FPS <span class="val">{{ fps }}</span>  Hands <span class="val">{{ hands.length }}</span></div>

      <!-- Per-hand live metrics -->
      <template v-for="(hand, i) in hands" :key="hand.handedness">
        <div class="debug-section">{{ hand.handedness.toUpperCase() }} HAND</div>
        <div class="debug-row">
          pinch
          <span class="val">{{ rawMetrics?.[i]?.normPinch.toFixed(3) ?? '—' }}</span>
          <span :class="(rawMetrics?.[i]?.normPinch ?? 1) < 0.25 ? 'tag-green' : (rawMetrics?.[i]?.normPinch ?? 1) < 0.45 ? 'tag-yellow' : 'tag-dim'">
            {{ (rawMetrics?.[i]?.normPinch ?? 1) < 0.25 ? 'PINCHED' : (rawMetrics?.[i]?.normPinch ?? 1) < 0.45 ? 'close' : 'open' }}
          </span>
        </div>
        <div class="debug-row">
          hand size <span class="val">{{ rawMetrics?.[i]?.handSize.toFixed(3) ?? '—' }}</span>
        </div>
        <div class="debug-row">
          fingers crossed
          <span :class="rawMetrics?.[i]?.fingersCrossed ? 'tag-green' : 'tag-dim'">
            {{ rawMetrics?.[i]?.fingersCrossed ? 'YES' : 'no' }}
          </span>
        </div>
      </template>

      <!-- Flick state machine -->
      <template v-if="abilityDebug?.flickState">
        <div class="debug-section">FLICK DETECTOR</div>
        <div class="debug-row">
          norm pinch <span class="val">{{ abilityDebug.flickState.normalizedPinch.toFixed(3) }}</span>
        </div>
        <div class="debug-row">
          velocity <span class="val">{{ abilityDebug.flickState.velocity.toFixed(2) }}/s</span>
          <span v-if="abilityDebug.flickState.velocity > 2" class="tag-yellow">FAST</span>
        </div>
        <div class="debug-row">
          pinch frames <span class="val">{{ abilityDebug.flickState.pinchFrames }}</span>
          <span :class="abilityDebug.flickState.pinchHeld ? 'tag-green' : 'tag-dim'">
            {{ abilityDebug.flickState.pinchHeld ? 'LOADED' : '' }}
          </span>
        </div>
        <div v-if="abilityDebug.flickState.flickCooldown" class="debug-row tag-yellow">cooldown</div>
      </template>

      <!-- Active gestures (continuous) -->
      <div class="debug-section">ACTIVE GESTURES</div>
      <div v-if="gestures.length === 0" class="debug-row dim">none</div>
      <div class="debug-row gesture-row" v-for="g in gestures" :key="g.type">
        <span class="dot" :class="dotClass(g.type)" />
        {{ g.type.replace(/_/g, ' ') }}
        <span class="val">{{ (g.confidence * 100).toFixed(0) }}%</span>
      </div>

      <!-- Event log -->
      <div class="debug-section">EVENT LOG</div>
      <div v-if="!abilityDebug?.recentEvents?.length" class="debug-row dim">none</div>
      <div
        class="debug-row"
        v-for="(ev, i) in abilityDebug?.recentEvents ?? []"
        :key="i"
        :style="{ opacity: Math.max(0.25, 1 - i * 0.12) }"
      >
        <span class="dot" :class="eventDotClass(ev.label)" />
        {{ ev.label }}
        <span class="dim">{{ eventAge(ev.t) }}s</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import type { HandData } from '@/types/hand'
import type { GestureEvent } from '@/types/gesture'
import type { AbilityDebugState } from '@/core/AbilityManager'
const HAND_CONNECTIONS = [
  [0,1],[1,2],[2,3],[3,4],
  [0,5],[5,6],[6,7],[7,8],
  [0,9],[9,10],[10,11],[11,12],
  [0,13],[13,14],[14,15],[15,16],
  [0,17],[17,18],[18,19],[19,20],
  [5,9],[9,13],[13,17],
]

const props = defineProps<{
  hands: HandData[]
  gestures: GestureEvent[]
  fps: number
  abilityDebug?: AbilityDebugState | null
  effectsEnabled?: boolean
  rawMetrics?: { normPinch: number; wristSpeed: number; fingersCrossed: boolean; handSize: number }[]
}>()

defineEmits<{ 'toggle-effects': [] }>()

const visible = ref(false)
const landmarkCanvas = ref<HTMLCanvasElement>()
const nowMs = ref(performance.now())
let nowTimer = 0

function eventAge(t: number): string {
  return ((nowMs.value - t) / 1000).toFixed(1)
}

function dotClass(type: string): string {
  if (type.includes('left'))    return 'dot-blue'
  if (type.includes('right'))   return 'dot-red'
  if (type.includes('merged') || type.includes('purple')) return 'dot-purple'
  if (type.includes('domain'))  return 'dot-white'
  return 'dot-dim'
}

function eventDotClass(label: string): string {
  if (label.includes('FLICK') || label.includes('flick') || label.includes('SHOOT')) return 'dot-yellow'
  if (label.includes('Blue')  || label.includes('blue'))  return 'dot-blue'
  if (label.includes('Red')   || label.includes('red'))   return 'dot-red'
  if (label.includes('MERGE') || label.includes('Purple') || label.includes('purple')) return 'dot-purple'
  if (label.includes('DOMAIN')) return 'dot-white'
  if (label.includes('dissipate')) return 'dot-dim'
  return 'dot-dim'
}

function drawLandmarks() {
  const canvas = landmarkCanvas.value
  if (!canvas) return
  const parent = canvas.parentElement
  if (parent) { canvas.width = parent.clientWidth; canvas.height = parent.clientHeight }
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (const hand of props.hands) {
    const color = hand.handedness === 'Left' ? '#4488ff' : '#ff4444'
    const lm = hand.landmarks
    ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.globalAlpha = 0.7
    for (const [a, b] of HAND_CONNECTIONS) {
      ctx.beginPath()
      ctx.moveTo((1 - lm[a].x) * canvas.width, lm[a].y * canvas.height)
      ctx.lineTo((1 - lm[b].x) * canvas.width, lm[b].y * canvas.height)
      ctx.stroke()
    }
    ctx.globalAlpha = 1
    for (let i = 0; i < lm.length; i++) {
      const x = (1 - lm[i].x) * canvas.width
      const y = lm[i].y * canvas.height
      const isTip = [4, 8, 12, 16, 20].includes(i)
      ctx.beginPath(); ctx.arc(x, y, isTip ? 5 : 3, 0, Math.PI * 2)
      ctx.fillStyle = isTip ? '#fff' : color; ctx.fill()
      if (isTip) { ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke() }
    }
    ctx.fillStyle = color; ctx.font = 'bold 12px monospace'
    ctx.fillText(hand.handedness, (1 - lm[0].x) * canvas.width + 10, lm[0].y * canvas.height - 10)
  }

  for (const g of props.gestures) {
    if (g.anchorPosition) {
      const ax = (1 - g.anchorPosition.x) * canvas.width
      const ay = g.anchorPosition.y * canvas.height
      ctx.beginPath(); ctx.arc(ax, ay, 12, 0, Math.PI * 2)
      ctx.strokeStyle = g.type.includes('left') ? '#44aaff' : g.type.includes('right') ? '#ff6644' : '#bb44ff'
      ctx.lineWidth = 2; ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([])
      ctx.fillStyle = '#fff'; ctx.font = '10px monospace'
      ctx.fillText(g.type.replace(/_/g, ' '), ax + 16, ay + 4)
    }
  }
}

const onKeyDown = (e: KeyboardEvent) => {
  if ((e.key === 'd' || e.key === 'D') && document.activeElement?.tagName !== 'INPUT') {
    e.preventDefault()
    visible.value = !visible.value
  }
}

watch(() => [props.hands, props.gestures], drawLandmarks)
onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  nowTimer = window.setInterval(() => { nowMs.value = performance.now() }, 100)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  window.clearInterval(nowTimer)
})

// Expose the landmark canvas so RecordingManager can composite it
defineExpose({ landmarkCanvas })
</script>

<style scoped>
.debug-overlay { position: absolute; inset: 0; z-index: 50; pointer-events: none; }
.landmark-canvas { position: absolute; inset: 0; width: 100%; height: 100%; }

.debug-info {
  position: absolute; top: 10px; left: 10px;
  background: rgba(0,0,0,0.88); color: #0f0;
  font-family: monospace; font-size: 11px;
  padding: 8px 12px; border-radius: 6px;
  border: 1px solid rgba(0,255,0,0.2);
  min-width: 220px; max-width: min(280px, 90vw); max-height: 92vh; overflow-y: auto;
  pointer-events: none;
}

.debug-title {
  font-weight: bold; font-size: 12px;
  border-bottom: 1px solid rgba(0,255,0,0.2);
  padding-bottom: 4px; margin-bottom: 4px;
  display: flex; align-items: center; justify-content: space-between;
}

.fx-toggle {
  pointer-events: auto; cursor: pointer;
  font-size: 9px; font-weight: 700; font-family: monospace;
  padding: 1px 6px; border-radius: 3px;
  border: 1px solid rgba(0,255,0,0.35);
  background: rgba(0,255,0,0.08); color: #0f0;
}
.fx-toggle:hover { background: rgba(0,255,0,0.18); }

.debug-section {
  color: #555; font-size: 9px; letter-spacing: 1px;
  margin-top: 5px; padding-top: 4px;
  border-top: 1px solid rgba(255,255,255,0.07);
}

.debug-row {
  padding: 1px 0; display: flex; align-items: center; gap: 5px; flex-wrap: wrap;
}

.val   { color: #ff0; }
.dim   { color: #444; }

.dot {
  display: inline-block; width: 6px; height: 6px;
  border-radius: 50%; flex-shrink: 0;
}
.dot-blue   { background: #60a5fa; }
.dot-red    { background: #f87171; }
.dot-purple { background: #a78bfa; }
.dot-yellow { background: #fbbf24; box-shadow: 0 0 4px #fbbf24; }
.dot-white  { background: #fff; }
.dot-dim    { background: #444; }

.gesture-row { gap: 6px; }

.tag-green  { color: #4ade80; font-size: 10px; }
.tag-yellow { color: #fbbf24; font-size: 10px; }
.tag-dim    { color: #555; font-size: 10px; }
</style>
