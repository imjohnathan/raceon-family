import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import getImg from './mixin/getImg';

createApp(App).mixin(getImg).mount('#app')
