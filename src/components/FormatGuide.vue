<template>
  <div v-if="style" class="format-guide">
    <div class="crop-frame" :style="style">
      <span class="crop-label">{{ label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { RecordingFormat } from '@/core/RecordingManager'

const props = defineProps<{ format: RecordingFormat }>()

const W = ref(window.innerWidth)
const H = ref(window.innerHeight)
const onResize = () => { W.value = window.innerWidth; H.value = window.innerHeight }
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))

const labelMap: Record<RecordingFormat, string> = {
  'original': '',
  '16:9':     '16 : 9',
  '9:16':     '9 : 16  ·  TikTok / Reels',
  '1:1':      '1 : 1  ·  Instagram',
}

const label = computed(() => labelMap[props.format])

const style = computed(() => {
  if (props.format === 'original') return null

  const [tw, th] = props.format === '16:9' ? [16, 9]
                 : props.format === '9:16' ? [9, 16]
                 : [1, 1]

  // Fit target ratio inside screen — same math as cropRect() in RecordingManager
  let cw = W.value, ch = Math.round(W.value * th / tw)
  if (ch > H.value) { ch = H.value; cw = Math.round(H.value * tw / th) }

  return {
    left:   `${Math.round((W.value - cw) / 2)}px`,
    top:    `${Math.round((H.value - ch) / 2)}px`,
    width:  `${cw}px`,
    height: `${ch}px`,
  }
})
</script>

<style scoped>
.format-guide {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 54;
  /* Darken everything outside the crop frame */
  background: rgba(0, 0, 0, 0.55);
}

.crop-frame {
  position: absolute;
  /* Cut a hole in the dark overlay via box-shadow trick */
  background: transparent;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.55);
  outline: 1.5px solid rgba(255, 255, 255, 0.45);
  /* Show label at top of crop */
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.crop-label {
  margin-top: 10px;
  font-size: 10px;
  font-weight: 700;
  font-family: 'Segoe UI', monospace;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  background: rgba(0, 0, 0, 0.45);
  padding: 2px 10px;
  border-radius: 4px;
}
</style>
