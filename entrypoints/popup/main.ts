import { createApp } from 'vue'
import '~/assets/tailwind.css'
import App from './App.vue'
import i18n from '~/utils/i18n'

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
}

createApp(App).use(i18n).mount('#app')
