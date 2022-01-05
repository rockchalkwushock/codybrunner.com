// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration
const { colors, fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./components/*.tsx', './layouts/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        // utility: animation-wiggle
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      backgroundImage: {
        // bg-instagram
        instagram:
          'radial-gradient(circle at 30% 107%, #fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)',
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        // bg-linkedin || text-linkedin
        linkedin: '#0072B1',
        // bg-twitter || text-twitter
        twitter: '#1DA1F2',
        ...colors,
      },
      fontFamily: {
        ...fontFamily,
        sans: ['Quicksand', ...fontFamily.sans],
      },
      // Defines the template areas using 'grid-template-areas':
      // Generates:
      // - grid-areas-mobile
      // - grid-areas-tablet
      // - grid-areas-desktop
      gridTemplateAreas: {
        mobile: ['header', 'main', 'footer'],
        tablet: ['header', 'main', 'footer'],
        desktop: ['header header', 'aside main', 'footer footer'],
      },
      // Defines the template columns using 'grid-template-columns':
      // Generates:
      // - grid-cols-mobile
      // - grid-cols-tablet
      // - grid-cols-desktop
      gridTemplateColumns: {
        mobile: '1fr',
        tablet: '1fr',
        desktop: '1fr',
      },
      // Defines the template rows using 'grid-template-rows':
      // Generates:
      // - grid-rows-mobile
      // - grid-rows-tablet
      // - grid-rows-desktop
      gridTemplateRows: {
        mobile: 'auto 1fr auto',
        tablet: 'auto 1fr auto',
        desktop: 'auto 1fr auto',
      },
      keyframes: {
        wiggle: {
          '0% 100%': { transform: 'rotate(-12deg) scale(0.95)' },
          '50%': { transform: 'rotate(12deg) scale(0.95)' },
        },
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
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/typography'),
  ],
  variants: {
    // Will enable the ability to do the following:
    // grid-areas-mobile md:grid-areas-tablet lg:grid-areas-desktop.
    gridTemplateAreas: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridTemplateRows: ['responsive'],
  },
}
