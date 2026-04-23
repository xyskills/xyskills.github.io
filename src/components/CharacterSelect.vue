<template>
  <div class="select-screen" @keydown.space.prevent="onActivate">
    <canvas ref="bgCanvas" class="bg-canvas" />

    <div class="content">
      <header class="header">
        <div class="logo-mark">
          <div class="hex hex1"></div>
          <div class="hex hex2"></div>
          <div class="hex hex3"></div>
        </div>
        <h1 class="title">THE STRONGEST</h1>
        <p class="subtitle">Hand-Tracking Ability Simulator</p>
      </header>

      <!-- World Selection -->
      <section class="section">
        <div class="section-label"><span class="label-line"></span>SELECT WORLD<span class="label-line"></span></div>
        <div class="card-row">
          <button
            v-for="w in worlds"
            :key="w.id"
            class="card world-card"
            :class="{ selected: selectedWorld === w.id, locked: w.locked }"
            :disabled="w.locked"
            @click="!w.locked && (selectedWorld = w.id)"
          >
            <div class="card-bg-img" v-if="worldImages[w.id]" :style="{ backgroundImage: `url(${worldImages[w.id]})` }"></div>
            <div class="card-bg" v-else :style="{ background: w.gradient }"></div>
            <div class="card-content">
              <div class="card-name">{{ w.name }}</div>
              <div class="card-sub">{{ w.sub }}</div>
            </div>
            <div v-if="w.locked" class="lock-overlay">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>COMING SOON</span>
            </div>
            <div v-if="selectedWorld === w.id && !w.locked" class="selected-ring"></div>
          </button>
        </div>
      </section>

      <!-- Character Selection -->
      <section class="section">
        <div class="section-label"><span class="label-line"></span>SELECT CHARACTER<span class="label-line"></span></div>
        <div class="card-row">
          <button
            v-for="c in characters"
            :key="c.id"
            class="card char-card"
            :class="{ selected: selectedCharacter === c.id, locked: c.locked }"
            :disabled="c.locked"
            @click="!c.locked && (selectedCharacter = c.id)"
          >
            <div class="card-bg" :style="{ background: charGradient(c) }"></div>
            <div class="card-content">
              <div class="char-avatar" :style="{ borderColor: c.accent }">
                <img v-if="charImages[c.id]" :src="charImages[c.id]" class="avatar-img" :alt="c.name" />
                <span v-else class="avatar-letter">{{ c.name[0] }}</span>
              </div>
              <div class="card-name">{{ c.name }}</div>
              <div class="card-sub">{{ c.sub }}</div>
              <div class="ability-tags">
                <span
                  v-for="ab in c.abilities"
                  :key="ab.name"
                  class="tag"
                  :style="{ color: ab.color, borderColor: ab.color + '44' }"
                >{{ ab.name }}</span>
              </div>
            </div>
            <div v-if="c.locked" class="lock-overlay">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>COMING SOON</span>
            </div>
            <div v-if="selectedCharacter === c.id && !c.locked" class="selected-ring"></div>
          </button>
        </div>
      </section>

      <!-- Start -->
      <button class="start-btn" @click="onActivate">
        <span class="btn-glow"></span>
        <span class="btn-text">ACTIVATE</span>
        <kbd class="kbd">SPACE</kbd>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { worlds, characters } from '@/config/roster'
import type { CharacterDef } from '@/config/roster'

const emit = defineEmits<{
  start: [payload: { world: string; character: string }]
}>()

const selectedWorld = ref('jjk')
const selectedCharacter = ref('gojo')
const bgCanvas = ref<HTMLCanvasElement>()
let animId = 0

// Attempt to load images — if they fail (404), fall back to gradient/letter
const worldImages: Record<string, string> = reactive({})
const charImages: Record<string, string> = reactive({})

function tryLoadImage(src: string | null): Promise<string | null> {
  if (!src) return Promise.resolve(null)
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

onMounted(async () => {
  // Pre-check which images actually exist
  for (const w of worlds) {
    const loaded = await tryLoadImage(w.image)
    if (loaded) worldImages[w.id] = loaded
  }
  for (const c of characters) {
    const loaded = await tryLoadImage(c.image)
    if (loaded) charImages[c.id] = loaded
  }

  initParticles()
})

function charGradient(c: CharacterDef): string {
  const hex = c.accent
  // Parse hex to create a dark gradient
  return `linear-gradient(135deg, ${hex}11 0%, ${hex}22 40%, ${hex}11 100%)`
}

function onActivate() {
  emit('start', { world: selectedWorld.value, character: selectedCharacter.value })
}

// ── Background particles ──
function initParticles() {
  const cv = bgCanvas.value
  if (!cv) return
  const ctx = cv.getContext('2d')!
  const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = []

  function resize() {
    cv.width = cv.clientWidth * window.devicePixelRatio
    cv.height = cv.clientHeight * window.devicePixelRatio
  }
  resize()
  window.addEventListener('resize', resize)

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * cv.clientWidth,
      y: Math.random() * cv.clientHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 1 + Math.random() * 1.5,
      o: 0.12 + Math.random() * 0.25,
    })
  }

  function draw() {
    const dpr = window.devicePixelRatio
    const w = cv.clientWidth, h = cv.clientHeight
    ctx.resetTransform()
    ctx.scale(dpr, dpr)
    ctx.clearRect(0, 0, w, h)

    for (const p of particles) {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(124,58,237,${p.o})`
      ctx.fill()
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const d2 = dx * dx + dy * dy
        if (d2 < 14400) { // 120^2
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(124,58,237,${0.06 * (1 - Math.sqrt(d2) / 120)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
    animId = requestAnimationFrame(draw)
  }
  draw()
}

onUnmounted(() => cancelAnimationFrame(animId))
</script>

<style scoped>
.select-screen {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: #050510;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  outline: none;
}

.bg-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: clamp(20px, 4vh, 48px) clamp(12px, 3vw, 40px);
  gap: clamp(18px, 3vh, 36px);
  justify-content: center;
}

/* ── Header ── */
.header { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; }

.logo-mark { position: relative; width: clamp(36px, 5vw, 50px); height: clamp(36px, 5vw, 50px); margin-bottom: 4px; }
.hex { position: absolute; inset: 0; border: 2px solid rgba(124,58,237,0.5); border-radius: 8px; animation: hex-spin 8s linear infinite; }
.hex2 { animation-delay: -2.6s; border-color: rgba(139,92,246,0.35); }
.hex3 { animation-delay: -5.3s; border-color: rgba(167,139,250,0.2); }

@keyframes hex-spin {
  0%   { transform: rotate(0deg) scale(1); }
  50%  { transform: rotate(180deg) scale(0.85); }
  100% { transform: rotate(360deg) scale(1); }
}

.title {
  font-size: clamp(24px, 4.5vw, 48px);
  font-weight: 800;
  letter-spacing: clamp(3px, 0.8vw, 10px);
  text-transform: uppercase;
  background: linear-gradient(135deg, #7c3aed 0%, #c084fc 30%, #fff 50%, #818cf8 70%, #7c3aed 100%);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 5s ease-in-out infinite;
  line-height: 1.1;
}

@keyframes shimmer { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }

.subtitle {
  font-size: clamp(10px, 1.2vw, 13px);
  letter-spacing: clamp(1px, 0.4vw, 4px);
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  font-weight: 500;
}

/* ── Section ── */
.section { display: flex; flex-direction: column; align-items: center; gap: clamp(8px, 1.2vh, 14px); width: 100%; max-width: 680px; }
.section-label { display: flex; align-items: center; gap: 12px; font-size: clamp(9px, 1vw, 11px); font-weight: 600; letter-spacing: 3px; color: rgba(255,255,255,0.25); width: 100%; justify-content: center; }
.label-line { flex: 1; max-width: 70px; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.25), transparent); }

/* ── Cards ── */
.card-row { display: flex; gap: clamp(8px, 1.2vw, 14px); flex-wrap: wrap; justify-content: center; width: 100%; }

.card {
  position: relative;
  width: clamp(130px, 20vw, 195px);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  font-family: inherit;
  color: #fff;
  padding: 0;
  text-align: center;
}

.card-bg, .card-bg-img { position: absolute; inset: 0; transition: opacity 0.3s; }
.card-bg { opacity: 0.6; }
.card-bg-img { background-size: cover; background-position: center; opacity: 0.35; }

.card-content { position: relative; z-index: 1; padding: clamp(14px, 2vw, 22px) clamp(8px, 1.2vw, 14px) clamp(12px, 1.8vw, 18px); }

.card:hover:not(.locked) { border-color: rgba(124,58,237,0.4); transform: translateY(-3px); box-shadow: 0 8px 32px rgba(124,58,237,0.12); }
.card:hover:not(.locked) .card-bg { opacity: 0.9; }
.card:hover:not(.locked) .card-bg-img { opacity: 0.55; }

.card.selected { border-color: rgba(124,58,237,0.65); box-shadow: 0 0 28px rgba(124,58,237,0.2), inset 0 0 20px rgba(124,58,237,0.05); }
.card.selected .card-bg { opacity: 1; }
.card.selected .card-bg-img { opacity: 0.5; }

.card.locked { opacity: 0.35; cursor: not-allowed; }

.card-name { font-size: clamp(12px, 1.5vw, 15px); font-weight: 700; margin-bottom: 2px; white-space: nowrap; }
.card-sub { font-size: clamp(9px, 1vw, 11px); color: rgba(255,255,255,0.4); line-height: 1.3; }

/* ── Character avatar ── */
.char-avatar {
  width: clamp(44px, 6.5vw, 60px);
  height: clamp(44px, 6.5vw, 60px);
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  background: rgba(0,0,0,0.5);
  overflow: hidden;
}
.avatar-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
.avatar-letter { font-size: clamp(18px, 2.5vw, 24px); font-weight: 800; opacity: 0.5; }

.ability-tags { display: flex; flex-wrap: wrap; gap: 3px; justify-content: center; margin-top: 7px; }
.tag { font-size: clamp(7px, 0.85vw, 9px); font-weight: 600; letter-spacing: 0.3px; padding: 2px 5px; border-radius: 3px; border: 1px solid; background: rgba(0,0,0,0.3); }

/* ── Lock / selection overlays ── */
.lock-overlay { position: absolute; inset: 0; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; background: rgba(0,0,0,0.5); color: rgba(255,255,255,0.35); font-size: 8px; font-weight: 700; letter-spacing: 1.5px; border-radius: 14px; }
.selected-ring { position: absolute; inset: -2px; border-radius: 16px; border: 2px solid rgba(124,58,237,0.55); pointer-events: none; animation: ring-pulse 2s ease-in-out infinite; }
@keyframes ring-pulse { 0%, 100% { box-shadow: 0 0 6px rgba(124,58,237,0.15); } 50% { box-shadow: 0 0 18px rgba(124,58,237,0.35); } }

/* ── Start button ── */
.start-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: clamp(11px, 1.6vh, 15px) clamp(32px, 5vw, 56px);
  border: 1px solid rgba(124,58,237,0.35);
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(109,40,217,0.25));
  color: #fff;
  font-size: clamp(12px, 1.4vw, 15px);
  font-weight: 700;
  font-family: inherit;
  letter-spacing: clamp(2px, 0.5vw, 6px);
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.start-btn:hover { border-color: rgba(124,58,237,0.65); transform: translateY(-2px); box-shadow: 0 6px 36px rgba(124,58,237,0.3); }
.btn-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(124,58,237,0.12), transparent 70%); opacity: 0; transition: opacity 0.3s; }
.start-btn:hover .btn-glow { opacity: 1; }
.btn-text { position: relative; z-index: 1; }

.kbd {
  position: relative;
  z-index: 1;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 4px;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.45);
  font-family: inherit;
  letter-spacing: 0;
}
</style>
