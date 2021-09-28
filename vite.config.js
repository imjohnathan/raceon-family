import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS()
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `fm_[name].js`,
        chunkFileNames: `fm_[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
})
