// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./components/*.tsx', './layouts/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Quicksand', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
