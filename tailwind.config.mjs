import type { Config } from 'tailwindcss'
import { cyan, slate, black, white } from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{astro,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      accent: cyan,
      black,
      current: 'currentColor',
      primary: slate,
      transparent: 'transparent',
      white,
    },
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      animation: {
        // utility: animation-wiggle
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      fontFamily: {
        display: ['Playfair Display Variable', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-12deg) scale(1.25)' },
          '50%': { transform: 'rotate(12deg) scale(0.95)' },
          '100%': { transform: 'rotate(-12deg) scale(1.25)' },
        },
      },
    },
  },
} satisfies Config
