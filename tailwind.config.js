// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./components/*.tsx', './layouts/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Quicksand', ...fontFamily.sans],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.600'),
            },
            'a code': {
              color: theme('colors.blue.600'),
            },
            blockquote: {
              backgroundColor: theme('colors.indigo.50'),
              borderLeftColor: theme('colors.indigo.500'),
              borderRadius: theme('borderRadius.lg'),
              boxShadow: theme('boxShadow.md'),
              fontWeight: theme('fontWeight.normal'),
              quotes: 'unset',
              textAlign: 'left',
            },
            'blockquote p:first-of-type::before': {
              content: 'unset',
            },
            'blockquote p:last-of-type::after': {
              content: 'unset',
            },
            'blockquote p': {
              marginBottom: 'unset !important',
              marginTop: 'unset !important',
              padding: theme('spacing.3'),
            },
            code: {
              color: theme('colors.indigo.600'),
              fontWeight: theme('fontWeight.normal'),
            },
            del: {
              color: theme('colors.red.600'),
            },
            em: {
              color: theme('colors.green.600'),
              fontWeight: theme('fontWeight.medium'),
            },
            'h1 a': {
              color: theme('colors.slate.900'),
            },
            'h2 a': {
              color: theme('colors.slate.900'),
            },
            'h3 a': {
              color: theme('colors.slate.900'),
            },
            'h4 a': {
              color: theme('colors.slate.900'),
            },
            pre: {},
            'pre code': {},
            strong: {
              color: theme('colors.pink.600'),
              fontWeight: theme('fontWeight.bold'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.blue.500'),
            },
            'a code': {
              color: theme('colors.blue.500'),
            },
            blockquote: {
              backgroundColor: theme('colors.stone.800'),
              borderLeftColor: theme('colors.indigo.500'),
            },
            code: {
              color: theme('colors.indigo.500'),
            },
            del: {
              color: theme('colors.red.500'),
            },
            em: {
              color: theme('colors.green.500'),
              fontWeight: theme('fontWeight.medium'),
            },
            'h1 a': {
              color: theme('colors.white'),
            },
            'h2 a': {
              color: theme('colors.white'),
            },
            'h3 a': {
              color: theme('colors.white'),
            },
            'h4 a': {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.pink.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
