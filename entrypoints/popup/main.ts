import { createApp } from 'vue'
import '~/assets/tailwind.css'
import App from './App.vue'
import i18n from '~/utils/i18n'

createApp(App).use(i18n).mount('#app')
