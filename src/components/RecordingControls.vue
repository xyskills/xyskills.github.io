<template>
  <div class="rec-panel" :class="{ expanded }">
    <button class="rec-toggle" @click="expanded = !expanded" :title="expanded ? 'Close' : 'Recording'">
      <span class="rec-icon" :class="{ active: recording }"></span>
    </button>

    <div v-if="expanded" class="rec-body">
      <label class="rec-option">
        <input type="checkbox" v-model="withEffects" :disabled="recording" />
        <span>With Effects</span>
      </label>
      <label class="rec-option">
        <input type="checkbox" v-model="withoutEffects" :disabled="recording" />
        <span>Without Effects</span>
      </label>
      <button
        class="rec-btn"
        :class="{ stop: recording }"
        :disabled="!withEffects && !withoutEffects && !recording"
        @click="toggleRecording"
      >
        {{ recording ? 'STOP' : 'REC' }}
      </button>
      <div v-if="recording" class="rec-timer">{{ formattedTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const emit = defineEmits<{
  start: [opts: { withEffects: boolean; withoutEffects: boolean }]
  stop: []
}>()

const expanded = ref(false)
const recording = ref(false)
const withEffects = ref(true)
const withoutEffects = ref(false)
const elapsed = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const formattedTime = ref('0:00')

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
    emit('start', { withEffects: withEffects.value, withoutEffects: withoutEffects.value })
  }
}

onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.rec-panel {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 60;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  pointer-events: auto;
}

.rec-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.15);
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
}
.rec-toggle:hover { border-color: rgba(255,255,255,0.35); }

.rec-icon {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #666;
  transition: background 0.2s;
}
.rec-icon.active {
  background: #ef4444;
  animation: pulse-rec 1s ease-in-out infinite;
}

@keyframes pulse-rec {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
  50% { box-shadow: 0 0 0 6px rgba(239,68,68,0); }
}

.rec-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 14px 16px;
  min-width: 160px;
}

.rec-option {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: rgba(255,255,255,0.8);
  cursor: pointer;
}

.rec-option input[type="checkbox"] {
  accent-color: #7c3aed;
  width: 14px;
  height: 14px;
}

.rec-btn {
  padding: 8px 0;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: 2px;
  cursor: pointer;
  color: #fff;
  background: #7c3aed;
  transition: all 0.2s;
}
.rec-btn:hover:not(:disabled) { background: #6d28d9; }
.rec-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.rec-btn.stop { background: #ef4444; }
.rec-btn.stop:hover { background: #dc2626; }

.rec-timer {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Segoe UI', monospace;
  color: #ef4444;
  letter-spacing: 2px;
}
</style>
