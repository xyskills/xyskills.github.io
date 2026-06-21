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
    host: true,   // bind to 0.0.0.0 so LAN devices can reach it
    // https is handled by basicSsl plugin above
  },
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.task'],
})
