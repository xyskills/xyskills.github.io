<template>
  <GojoScene v-if="inScene" />
  <CharacterSelect v-else @start="onStart" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CharacterSelect from './components/CharacterSelect.vue'
import GojoScene from './components/GojoScene.vue'

const inScene = ref(true)   // start directly in scene, Space opens selection

function onStart(_payload: { world: string; character: string }) {
  inScene.value = true
}

function onKeyDown(e: KeyboardEvent) {
  if (e.code === 'Space' && inScene.value) {
    e.preventDefault()
    inScene.value = false
  }
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onUnmounted(() => window.removeEventListener('keydown', onKeyDown))
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
}

button, label, [role="button"] {
  touch-action: manipulation;
}
</style>
