import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          reactVendor: ['react', 'react-dom'],
          i18n: ['react-i18next', 'i18next'],
          lottie: ['lottie-react'],
          slider: ['react-slick', 'slick-carousel']
        }
      }
    }
  }
})
