import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import compress from 'vite-plugin-compress'
import legacy from '@vitejs/plugin-legacy'
import md5 from 'md5'

// https://vitejs.dev/config/
export default defineConfig({
  //base: `https://cdn.cybassets.com/s/files/12556/theme/38737/assets/`,
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
/*       legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
     }) */
  ],
  build: {
    //assetsDir: '/assets/',
    terserOptions: {
      compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
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

       if (id.includes('node_modules')) {
        return md5(id.toString().split('node_modules/')[1].split('/')[0].toString().replace('@','')).substring(0,5);
      } 

       }  
      }
    }
  }
})
