import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import CommandCard from './CommandCard.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CommandCard', CommandCard)
  }
} satisfies Theme
