import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: __dirname,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5174,
    host: true,
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
  },
})
