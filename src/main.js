import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import getImg from './mixin/getImg';
//Plugins
import VueSmoothScroll from 'v-smooth-scroll'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';

import { VueReCaptcha } from 'vue-recaptcha-v3'

import { registerScrollSpy } from 'vue3-scroll-spy'


const app = createApp(App)
.mixin(getImg)
.use(VueSmoothScroll,{updateHistory: false, offset: -80,})
.use(VueAxios, axios)

// Setup the plugin with optional defaults
.use(SetupCalendar, {})
// Use the components
.component('Calendar', Calendar)
.component('DatePicker', DatePicker)

.use(VueReCaptcha, { siteKey: '6LfjNnIcAAAAAHELMJw_nXOebz0NZhIYmybdXKH1' })

registerScrollSpy(app)

app.mount('#app')
