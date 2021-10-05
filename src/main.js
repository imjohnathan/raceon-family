import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import getImg from './mixin/getImg';
//Plugins
import VueSmoothScroll from 'v-smooth-scroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import { registerScrollSpy } from 'vue3-scroll-spy'


const app = createApp(App)
.mixin(getImg)
.use(VueSmoothScroll,{updateHistory: false, offset: -80,})
.use(VueAxios, axios)
.use(VueReCaptcha, { siteKey: '6LfjNnIcAAAAAHELMJw_nXOebz0NZhIYmybdXKH1', loaderOptions: {autoHideBadge: true} })

registerScrollSpy(app)

app.mount('#app')
