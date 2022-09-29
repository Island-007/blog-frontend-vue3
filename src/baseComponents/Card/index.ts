import type { App } from 'vue'
import Card from './src/Card.vue'

Card.install = function (app:App) {
  app.component(Card.name,Card)
}

export default Card;