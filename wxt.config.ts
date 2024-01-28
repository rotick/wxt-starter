import { defineConfig } from 'wxt'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  imports: {
    presets: ['vue'],
    addons: {
      vueTemplate: true
    }
  },
  manifest: {
    permissions: ['storage'],
    name: '__MSG_extName__',
    description: '__MSG_extDescription__',
    default_locale: 'en'
  },
  vite: () => ({
    plugins: [
      vue(),
      vueI18n({
        include: 'lang/*.json'
      })
    ]
  })
})
