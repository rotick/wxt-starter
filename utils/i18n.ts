import { createI18n } from 'vue-i18n'
// Use your default locale when importing the schema
import type schema from '~/lang/en.json'
import messages from '@intlify/unplugin-vue-i18n/messages'
import locales from '~/locale'

const localeCodes = locales.map(l => l.code)

export type I18nSchema = typeof schema
export type I18nLocales = typeof localeCodes[number]

const browserLanguage = browser.i18n.getUILanguage()
const matchLocale = matchBrowserLocale(locales, [browserLanguage])
let browserLocale = 'en'
if (matchLocale.length) {
  browserLocale = matchLocale.sort((a, b) => b.score - a.score)[0].code
}
const i18n = createI18n<[I18nSchema], I18nLocales>({
  legacy: false,
  locale: browserLocale,
  fallbackLocale: 'en',
  messages: messages as any
})
async function initUserSelectedLocale () {
  const userSelected = await storage.getItem('sync:lang')
  if (userSelected) {
    // @ts-expect-error wtf
    i18n.global.locale.value = userSelected
  }
}
initUserSelectedLocale()
export default i18n

// copy from https://github.com/nuxt-modules/i18n/blob/c9bdcd7773772bff4356111ca50d4c45730bac2e/src/runtime/routing/utils.ts#L179
type TargetLocale = Required<Pick<typeof locales[0], 'code' | 'iso'>>
interface BrowserLocale {
  /**
   * The locale code, such as BCP 47 (e.g `en-US`), or `ja`
   */
  code: string
  /**
   * The score number
   *
   * @remarks
   * The score number that is used by `sorter` of {@link FindBrowserLocaleOptions}
   */
  score: number
}
function matchBrowserLocale (locales: TargetLocale[], browserLocales: string[]): BrowserLocale[] {
  const matchedLocales = [] as BrowserLocale[]

  // first pass: match exact locale.
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find(l => l.iso.toLowerCase() === browserCode.toLowerCase())
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length })
      break
    }
  }

  // second pass: match only locale code part of the browser locale (not including country).
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase()
    const matchedLocale = locales.find(l => l.iso.split('-')[0].toLowerCase() === languageCode)
    if (matchedLocale) {
      // deduct a thousandth for being non-exact match.
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length })
      break
    }
  }

  return matchedLocales
}
