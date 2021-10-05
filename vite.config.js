import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import compress from 'vite-plugin-compress'
import legacy from '@vitejs/plugin-legacy'


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
    //  legacy({
    //   targets: ['defaults', 'not IE 11']
    // })
  ],
  build: {
    //assetsDir: '/assets/',
    rollupOptions: {
      output: {
        entryFileNames: `fm_[name].js`,
        chunkFileNames: `fm_[name].js`,
        assetFileNames: `fm_[name][extname]`,
         manualChunks(id) {
/*          if (id.includes('node_modules/v-calendar')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }else if (id.includes('node_modules/@vue')){
                return id.toString().split('node_modules/')[1].split('/')[0].toString().replace('@','');
            }else if (id.includes('node_modules/swiper')){
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }else if (id.includes('node_modules')){
               return 'vendor';
           } 
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString().replace('@','');
       } 
       */
       }  
      }
    }
  }
})
