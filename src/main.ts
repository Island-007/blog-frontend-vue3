import { createApp } from 'vue'
import VueParticles from 'vue-particles'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(VueParticles)
app.mount('#app')
