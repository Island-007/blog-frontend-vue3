import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import Particles from 'particles.vue3'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(Particles)
app.mount('#app')
