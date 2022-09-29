import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import Particles from 'particles.vue3'
import App from './App.vue'
import router from './router'
import Directives from './directives'
import useBaseComponents from './baseComponents'


const app = createApp(App)
app.use(router)
app.use(Particles)
app.use(Directives)
useBaseComponents(app)
app.mount('#app')


