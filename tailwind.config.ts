import colors from 'tailwindcss/colors'
import { addDynamicIconSelectors } from '@iconify/tailwind'
export default {
  darkMode: 'class',
  content: ['./entrypoints/**/*.{html,ts,vue,tsx}', './components/**/*.ts'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        gray: colors.slate
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
}
