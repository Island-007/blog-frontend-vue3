import type { App } from 'vue'
import Modal from './src/Modal.vue'

Modal.install = function (app:App) {
  console.log(Modal)
  app.component(Modal.name,Modal)
}

export default Modal;