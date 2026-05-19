<template>
  <div class="hud">
    <!-- Character nameplate top-left -->
    <div class="nameplate">
      <div class="char-name">Satoru Gojo</div>
      <div class="char-world">Jujutsu Kaisen · Shibuya</div>
    </div>

    <!-- Active ability orbs -->
    <div class="ability-row">
      <div
        v-for="ab in abilitySlots"
        :key="ab.key"
        class="ability-slot"
        :class="{ active: activeSet.has(ab.key), pulse: activeSet.has(ab.key) }"
        :style="ab.active ? { '--glow': ab.glowColor } : {}"
      >
        <div class="slot-ring" :style="{ borderColor: ab.color }"></div>
        <div class="slot-dot" :style="{ background: ab.color }"></div>
        <span class="slot-label">{{ ab.label }}</span>
      </div>
    </div>

    <!-- Merge progress bar (only visible when both blue+red active) -->
    <div v-if="showMergeBar" class="merge-bar-wrap">
      <div class="merge-bar-label">Converging</div>
      <div class="merge-bar-track">
        <div class="merge-bar-fill" :style="{ width: mergePercent + '%' }"></div>
      </div>
    </div>

    <!-- Domain gesture hold ring (shows while charging in or out of domain) -->
    <Transition name="hold-fade">
      <div v-if="domainHoldProgress > 0.02" class="hold-ring-wrap">
        <svg class="hold-ring-svg" viewBox="0 0 64 64">
          <circle class="hold-ring-track" cx="32" cy="32" r="28" />
          <circle
            class="hold-ring-fill"
            cx="32" cy="32" r="28"
            :stroke="domainActive ? '#f87171' : '#93c5fd'"
            :stroke-dashoffset="holdDashOffset"
          />
        </svg>
        <span class="hold-ring-label" :style="{ color: domainActive ? '#f87171' : '#93c5fd' }">
          {{ domainActive ? 'DISPELLING' : 'SUMMONING' }}
        </span>
      </div>
    </Transition>

    <!-- Domain expansion active -->
    <Transition name="domain-fade">
      <div v-if="domainActive" class="domain-overlay">
        <div class="domain-title">INFINITE VOID</div>
        <div class="domain-bar-track">
          <div class="domain-bar-fill" :style="{ width: (domainProgress * 100) + '%' }"></div>
        </div>
      </div>
    </Transition>

    <!-- Bottom hint -->
    <div class="hint-row">
      <span>Raise hand → Blue / Red</span>
      <span class="sep">·</span>
      <span>Bring together → Purple</span>
      <span class="sep">·</span>
      <span>Flick while holding → Shoot</span>
      <span class="sep">·</span>
      <span>✌ hold → Domain</span>
      <span class="sep">·</span>
      <kbd>D</kbd> Debug
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { AbilityDebugState } from '@/core/AbilityManager'
import { GestureType } from '@/types/gesture'

const props = defineProps<{
  activeAbilities: string[]
  abilityDebug?: AbilityDebugState | null
}>()

const abilitySlots = [
  { key: GestureType.LEFT_HAND_RAISED,  label: 'Red',           color: '#f87171', glowColor: 'rgba(248,113,113,0.4)', active: false },
  { key: GestureType.HANDS_MERGED,      label: 'Hollow Purple', color: '#a78bfa', glowColor: 'rgba(167,139,250,0.4)', active: false },
  { key: GestureType.RIGHT_HAND_RAISED, label: 'Blue',          color: '#60a5fa', glowColor: 'rgba(96,165,250,0.4)',  active: false },
]

const activeSet = computed(() => new Set(props.activeAbilities))

const showMergeBar = computed(() =>
  activeSet.value.has(GestureType.LEFT_HAND_RAISED) &&
  activeSet.value.has(GestureType.RIGHT_HAND_RAISED) &&
  !activeSet.value.has(GestureType.HANDS_MERGED)
)

const mergePercent       = computed(() => props.abilityDebug ? Math.round(props.abilityDebug.mergeProgress * 100) : 0)
const domainActive       = computed(() => props.abilityDebug?.domainActive ?? false)
const domainProgress     = computed(() => props.abilityDebug?.domainProgress ?? 0)
const domainHoldProgress = computed(() => props.abilityDebug?.domainHoldProgress ?? 0)

// SVG ring: circumference = 2π×28 ≈ 175.9; dashoffset 0 = full ring, 175.9 = empty
const CIRC = 2 * Math.PI * 28
const holdDashOffset = computed(() => CIRC * (1 - domainHoldProgress.value))
</script>

<style scoped>
.hud {
  position: absolute;
  inset: 0;
  pointer-events: none;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* ── Character nameplate ── */
.nameplate {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 8px 14px;
}
.char-name {
  font-size: 15px;
  font-weight: 700;
  color: #c4b5fd;
  letter-spacing: 1px;
}
.char-world {
  font-size: 10px;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.5px;
  margin-top: 1px;
}

/* ── Ability slots ── */
.ability-row {
  position: absolute;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 14px;
}

.ability-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  opacity: 0.35;
  transition: opacity 0.3s, transform 0.3s;
}
.ability-slot.active {
  opacity: 1;
  transform: translateY(-2px);
}

.slot-ring {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid;
  position: relative;
  transition: box-shadow 0.3s;
}
.ability-slot.active .slot-ring {
  box-shadow: 0 0 14px var(--glow, rgba(255,255,255,0.3));
}

.slot-dot {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s;
  width: 100%;
  height: 100%;
  top: 0; left: 0;
}
.ability-slot.active .slot-dot {
  opacity: 0.2;
}

.slot-label {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
}

@keyframes slot-pulse {
  0%, 100% { box-shadow: 0 0 10px var(--glow, rgba(255,255,255,0.2)); }
  50%       { box-shadow: 0 0 22px var(--glow, rgba(255,255,255,0.4)); }
}
.ability-slot.pulse .slot-ring {
  animation: slot-pulse 1.8s ease-in-out infinite;
}

/* ── Merge progress bar ── */
.merge-bar-wrap {
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 160px;
}
.merge-bar-label {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(167,139,250,0.7);
}
.merge-bar-track {
  width: 160px;
  height: 3px;
  background: rgba(255,255,255,0.1);
  border-radius: 2px;
  overflow: hidden;
}
.merge-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #60a5fa, #a78bfa, #f87171);
  border-radius: 2px;
  transition: width 0.1s linear;
}

/* ── Domain hold ring ── */
.hold-ring-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hold-ring-svg {
  width: 80px;
  height: 80px;
  transform: rotate(-90deg);
}
.hold-ring-track {
  fill: none;
  stroke: rgba(255,255,255,0.08);
  stroke-width: 4;
}
.hold-ring-fill {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 175.9;
  transition: stroke-dashoffset 0.05s linear;
}
.hold-ring-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  transform: none;
}
.hold-fade-enter-active, .hold-fade-leave-active { transition: opacity 0.25s ease; }
.hold-fade-enter-from,  .hold-fade-leave-to      { opacity: 0; }

/* ── Domain Expansion ── */
.domain-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  pointer-events: none;
}
.domain-title {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: #93c5fd;
  text-shadow: 0 0 20px rgba(96,165,250,0.8), 0 0 40px rgba(96,165,250,0.4);
  animation: domain-pulse 1.2s ease-in-out infinite;
}
.domain-bar-track {
  width: 220px;
  height: 2px;
  background: rgba(96,165,250,0.15);
  border-radius: 2px;
  overflow: hidden;
}
.domain-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #1d4ed8, #60a5fa, #1d4ed8);
  border-radius: 2px;
  transition: width 0.2s linear;
}
@keyframes domain-pulse {
  0%, 100% { opacity: 0.85; text-shadow: 0 0 20px rgba(96,165,250,0.8), 0 0 40px rgba(96,165,250,0.4); }
  50%       { opacity: 1;    text-shadow: 0 0 30px rgba(96,165,250,1),   0 0 60px rgba(96,165,250,0.6); }
}
.domain-fade-enter-active, .domain-fade-leave-active { transition: opacity 0.6s ease; }
.domain-fade-enter-from,  .domain-fade-leave-to      { opacity: 0; }

/* ── Bottom hint ── */
.hint-row {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  color: rgba(255,255,255,0.28);
  white-space: nowrap;
}
.sep { opacity: 0.4; }
kbd {
  font-size: 9px;
  font-family: inherit;
  padding: 1px 5px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 3px;
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.4);
}

@media (max-width: 480px) {
  .nameplate {
    top: max(12px, env(safe-area-inset-top));
    left: max(12px, env(safe-area-inset-left));
  }
  .ability-row {
    bottom: calc(max(12px, env(safe-area-inset-bottom)) + 8px);
    gap: 10px;
  }
  .slot-ring { width: 32px; height: 32px; }
  .merge-bar-wrap {
    bottom: calc(max(12px, env(safe-area-inset-bottom)) + 56px);
  }
  .hint-row { display: none; }
  .domain-title { font-size: 18px; letter-spacing: 5px; }
  .domain-bar-track { width: 180px; }
  .hold-ring-svg { width: 70px; height: 70px; }
  .hold-ring-label { font-size: 8px; letter-spacing: 2px; }
}
</style>
