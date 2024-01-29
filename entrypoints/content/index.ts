import '~/assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from '~/utils/i18n'
export default defineContentScript({
  matches: ['<all_urls>'],
  cssInjectionMode: 'ui',
  async main (ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: 'wxt-starter',
      position: 'inline',
      anchor: 'body',
      onMount: (container) => {
        const app = createApp(App)
        app.use(i18n).mount(container)
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          container.classList.add('dark')
        }
        return app
      },
      onRemove: (app) => {
        app?.unmount()
      }
    })
    ui.mount()
  }
})
