const { fontFamily } = require('tailwindcss/defaultTheme')

const aura = {
  black: '#15141b',
  blue: '#82e2ff',
  gray: '#6d6d6d',
  green: '#61ffca',
  orange: '#ffca85',
  pink: '#f694ff',
  purple: '#a277ff',
  'purple-fading': '#3d375e7f',
  red: '#ff6767',
  white: '#edecee',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        aura: { ...aura },
        black: '#000000',
        current: 'currentColor',
        transparent: 'transparent',
        white: '#ffffff',
      },
      fontFamily: {
        ...fontFamily,
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
