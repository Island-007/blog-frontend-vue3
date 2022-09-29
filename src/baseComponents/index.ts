import type { App } from 'vue'
import Button from '@/baseComponents/Button'
import Modal from '@/baseComponents/Modal'
import Dialog from '@/baseComponents/Dialog'
import Card from '@/baseComponents/Card'

const components = [
  Button,
  Modal,
  Dialog,
  Card
]

export default function useBaseComponents(app:App) {
  components.forEach((comp) => {
    app.use(comp)
  })
}