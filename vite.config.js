import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import compress from 'vite-plugin-compress'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    compress({
      brotli: false,
       verbose: true,
        pngquant:{
        quality: [0.3, 0.5]
       }
     }),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `fm_[name].js`,
        chunkFileNames: `fm_[name].js`,
        assetFileNames: `[name].[ext]`,
        manualChunks(id) {
          if (id.includes('node_modules/v-calendar')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }else if (id.includes('node_modules')){
             return 'vendor';
          }
      }
      }
    }
  }
})
