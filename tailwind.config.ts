import colors from 'tailwindcss/colors'
import { addDynamicIconSelectors } from '@iconify/tailwind'
export default {
  darkMode: 'class',
  content: ['./entrypoints/**/*.{html,ts,vue,tsx}', './components/**/*.{ts,vue,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        gray: colors.neutral
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
}
