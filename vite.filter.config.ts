import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  plugins: [vue(), glsl(), basicSsl()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173,
    open: true,
    host: true,
  },
  build: {
    outDir: 'dist/filter',
    emptyOutDir: false,
  },
  base: '/filter/',
  assetsInclude: ['**/*.task'],
})
