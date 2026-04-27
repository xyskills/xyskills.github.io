<template>
  <div class="rec-panel" :class="{ expanded }">
    <button class="rec-toggle" @click="expanded = !expanded" :title="expanded ? 'Close' : 'Recording'">
      <span class="rec-icon" :class="{ active: recording }"></span>
    </button>

    <div v-if="expanded" class="rec-body">

      <!-- Layout -->
      <div class="rec-section-label">Layout</div>
      <div class="layout-grid">
        <button
          v-for="l in layouts" :key="l.value"
          class="layout-btn"
          :class="{ selected: layout === l.value }"
          :disabled="recording || (l.value === 'stacked' && numOptions < 2)"
          @click="layout = l.value"
          :title="l.value === 'stacked' && numOptions < 2 ? 'Need ≥ 2 options' : l.label"
        >
          <span class="layout-icon">{{ l.icon }}</span>
          <span class="layout-name">{{ l.label }}</span>
        </button>
      </div>

      <!-- Format -->
      <div class="rec-section-label">Format</div>
      <div class="layout-grid">
        <button
          v-for="f in formats" :key="f.value"
          class="layout-btn"
          :class="{ selected: format === f.value }"
          :disabled="recording"
          @click="format = f.value"
          :title="f.hint"
        >
          <span class="layout-icon">{{ f.icon }}</span>
          <span class="layout-name">{{ f.label }}</span>
        </button>
      </div>

      <!-- FPS -->
      <div class="rec-section-label">FPS</div>
      <div class="layout-grid">
        <button
          v-for="f in fpsOptions" :key="f"
          class="layout-btn"
          :class="{ selected: recFps === f }"
          :disabled="recording"
          @click="recFps = f"
        >
          <span class="layout-icon">{{ f }}</span>
          <span class="layout-name">{{ f === 30 ? 'Smooth' : 'Full' }}</span>
        </button>
      </div>

      <!-- Sources -->
      <div class="rec-section-label">Sources</div>
      <label class="rec-option">
        <input type="checkbox" v-model="withEffects" :disabled="recording" />
        <span>Screen</span>
      </label>
      <label class="rec-option">
        <input type="checkbox" v-model="withoutEffects" :disabled="recording" />
        <span>Raw Camera</span>
      </label>
      <label class="rec-option">
        <input type="checkbox" v-model="withDebug" :disabled="recording" />
        <span>Debug View</span>
      </label>

      <!-- HD Offline mode -->
      <div class="rec-section-label" style="margin-top:4px">Quality</div>
      <label class="rec-option" title="Records raw camera at 20Mbps, then composites effects offline for maximum quality">
        <input type="checkbox" v-model="hdMode" :disabled="recording" />
        <span>HD Offline <span class="hd-badge">SLOW</span></span>
      </label>

      <!-- Composite progress bar (shown while processing) -->
      <div v-if="compositing" class="composite-progress">
        <div class="composite-label">Compositing… {{ Math.round(compositeProgress * 100) }}%</div>
        <div class="composite-bar"><div class="composite-fill" :style="{ width: (compositeProgress * 100) + '%' }"></div></div>
      </div>

      <div class="rec-actions">
        <button
          class="rec-btn"
          :class="{ stop: recording }"
          :disabled="!recording && numOptions === 0"
          @click="toggleRecording"
        >
          {{ recording ? 'SAVE' : 'REC' }}
        </button>
        <button v-if="recording" class="rec-btn abort" @click="abortRecording" title="Discard">
          DISCARD
        </button>
      </div>
      <div v-if="recording" class="rec-timer">{{ formattedTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import type { RecordingLayout, RecordingFormat, RecordingFps } from '@/core/RecordingManager'

const fpsOptions: RecordingFps[] = [30, 60]

const emit = defineEmits<{
  start:           [opts: import('@/core/RecordingManager').RecordingStartOpts]
  stop:            []
  abort:           []
  'format-change': [format: RecordingFormat]
}>()

const layouts: { value: RecordingLayout; label: string; icon: string }[] = [
  { value: 'single',       label: 'Single',   icon: '▣' },
  { value: 'side-by-side', label: 'Side/Side', icon: '⊞' },
  { value: 'stacked',      label: 'Stacked',  icon: '⊟' },
  { value: 'pip',          label: 'PiP',      icon: '⊡' },
]

const formats: { value: RecordingFormat; label: string; icon: string; hint: string }[] = [
  { value: 'original', label: 'Original', icon: '▣', hint: 'Native camera resolution' },
  { value: '16:9',     label: '16 : 9',   icon: '▬', hint: 'YouTube / Landscape' },
  { value: '9:16',     label: '9 : 16',   icon: '▮', hint: 'TikTok / Reels / Shorts' },
  { value: '1:1',      label: '1 : 1',    icon: '⬜', hint: 'Instagram Square' },
]

const expanded          = ref(false)
const recording         = ref(false)
const compositing       = ref(false)
const compositeProgress = ref(0)
const layout            = ref<RecordingLayout>('single')
const format            = ref<RecordingFormat>('original')
const withEffects       = ref(true)
const withoutEffects    = ref(false)
const withDebug         = ref(false)
const hdMode            = ref(false)
const recFps            = ref<RecordingFps>(30)
const elapsed           = ref(0)
const formattedTime     = ref('0:00')
let timer: ReturnType<typeof setInterval> | null = null

// Exposed so GojoScene can drive the progress bar during offline compositing
function setCompositing(active: boolean, progress = 0): void {
  compositing.value = active
  compositeProgress.value = progress
}

defineExpose({ setCompositing })

const numOptions = computed(() =>
  (withEffects.value ? 1 : 0) + (withoutEffects.value ? 1 : 0) + (withDebug.value ? 1 : 0)
)

function toggleRecording() {
  if (recording.value) {
    recording.value = false
    if (timer) { clearInterval(timer); timer = null }
    emit('stop')
  } else {
    recording.value = true
    elapsed.value = 0
    formattedTime.value = '0:00'
    timer = setInterval(() => {
      elapsed.value++
      const m = Math.floor(elapsed.value / 60)
      const s = elapsed.value % 60
      formattedTime.value = `${m}:${s.toString().padStart(2, '0')}`
    }, 1000)
    emit('start', {
      layout: layout.value,
      format: format.value,
      fps: recFps.value,
      withEffects: withEffects.value,
      withoutEffects: withoutEffects.value,
      withDebug: withDebug.value,
      hdMode: hdMode.value,
    })
  }
}

function abortRecording() {
  recording.value = false
  if (timer) { clearInterval(timer); timer = null }
  emit('abort')
}

onUnmounted(() => { if (timer) clearInterval(timer) })

// Emit format changes immediately so the parent can show the crop guide
watch(format, (f) => emit('format-change', f), { immediate: true })
</script>

<style scoped>
.rec-panel {
  position: absolute;
  top: 16px; right: 16px;
  z-index: 60;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  pointer-events: auto;
}

.rec-toggle {
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.15);
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.2s;
}
.rec-toggle:hover { border-color: rgba(255,255,255,0.35); }

.rec-icon {
  width: 14px; height: 14px;
  border-radius: 50%;
  background: #666;
  transition: background 0.2s;
}
.rec-icon.active {
  background: #ef4444;
  animation: pulse-rec 1s ease-in-out infinite;
}
@keyframes pulse-rec {
  0%,100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
  50%      { box-shadow: 0 0 0 6px rgba(239,68,68,0); }
}

.rec-body {
  display: flex; flex-direction: column; gap: 8px;
  background: rgba(0,0,0,0.82);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 14px 16px;
  min-width: 192px;
}

.rec-section-label {
  font-size: 9px; font-family: monospace; font-weight: 700;
  letter-spacing: 1.5px; color: rgba(255,255,255,0.3);
  text-transform: uppercase;
}

.layout-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}
.layout-btn {
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  padding: 7px 4px;
  border-radius: 7px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  cursor: pointer;
  color: rgba(255,255,255,0.55);
  font-family: 'Segoe UI', system-ui, sans-serif;
  transition: all 0.15s;
}
.layout-btn:hover:not(:disabled) { background: rgba(255,255,255,0.10); color: rgba(255,255,255,0.9); }
.layout-btn.selected { border-color: #7c3aed; background: rgba(124,58,237,0.18); color: #c4b5fd; }
.layout-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.layout-icon { font-size: 16px; }
.layout-name { font-size: 9px; font-weight: 600; letter-spacing: 0.5px; }

.rec-option {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px;
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: rgba(255,255,255,0.8);
  cursor: pointer;
}
.rec-option input[type="checkbox"] { accent-color: #7c3aed; width: 14px; height: 14px; }

.rec-actions { display: flex; gap: 6px; }

.rec-btn {
  flex: 1;
  padding: 8px 0;
  border: none; border-radius: 8px;
  font-size: 13px; font-weight: 700; font-family: inherit;
  letter-spacing: 2px; cursor: pointer; color: #fff;
  background: #7c3aed;
  transition: all 0.2s;
  margin-top: 4px;
}
.rec-btn:hover     { background: #6d28d9; }
.rec-btn:disabled  { opacity: 0.35; cursor: not-allowed; }
.rec-btn.stop      { background: #16a34a; }
.rec-btn.stop:hover { background: #15803d; }
.rec-btn.abort     { flex: 0 0 auto; padding: 8px 12px; background: #ef4444; }
.rec-btn.abort:hover { background: #dc2626; }

.rec-timer {
  text-align: center;
  font-size: 18px; font-weight: 700;
  font-family: 'Segoe UI', monospace;
  color: #ef4444; letter-spacing: 2px;
}

.hd-badge {
  font-size: 8px; font-weight: 700; letter-spacing: 1px;
  background: rgba(234,179,8,0.2); color: #eab308;
  padding: 1px 4px; border-radius: 3px; margin-left: 4px;
}

.composite-progress {
  display: flex; flex-direction: column; gap: 4px;
}
.composite-label {
  font-size: 10px; font-family: monospace; color: rgba(255,255,255,0.6);
  text-align: center;
}
.composite-bar {
  height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;
}
.composite-fill {
  height: 100%; background: #7c3aed; border-radius: 2px; transition: width 0.2s;
}

@media (max-width: 480px) {
  .rec-panel {
    top: max(12px, env(safe-area-inset-top));
    right: max(12px, env(safe-area-inset-right));
  }
  .rec-toggle { width: 48px; height: 48px; }
  .rec-icon { width: 16px; height: 16px; }
  .rec-body { min-width: 0; width: min(88vw, 220px); padding: 12px; gap: 7px; }
  .layout-grid { grid-template-columns: 1fr 1fr; gap: 4px; }
  .layout-btn { padding: 8px 4px; }
  .layout-icon { font-size: 14px; }
  .layout-name { font-size: 9px; }
  .rec-option { font-size: 13px; }
  .rec-btn { padding: 10px 0; font-size: 13px; min-height: 44px; }
}
</style>
