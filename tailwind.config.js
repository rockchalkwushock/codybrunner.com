/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const { black, blue, red, white, yellow } = require('tailwindcss/colors')

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
	content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
	theme: {
		colors: {
			aura: { ...aura },
			black,
			blue: blue['500'],
			current: 'currentColor',
			red: red['500'],
			transparent: 'transparent',
			white,
			yellow: yellow['500'],
		},
		fontFamily: {
			...fontFamily,
			sans: ['Quicksand', ...fontFamily.sans],
		},
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						color: aura.white,
						a: {
							color: aura.green,
							fontWeight: theme('fontWeight.semibold'),
						},
						'a code': {
							color: aura.orange,
						},
						blockquote: {
							backgroundColor: aura['purple-fading'],
							borderLeftColor: aura.purple,
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
						'blockquote p code': {
							color: aura.orange,
						},
						code: {
							color: aura.orange,
							fontWeight: theme('fontWeight.normal'),
						},
						del: {
							color: aura.red,
						},
						em: {
							color: aura.blue,
							fontWeight: theme('fontWeight.medium'),
						},
						'h1 a': {
							color: aura.orange,
						},
						'h2 a': {
							color: aura.purple,
						},
						'h3 a': {
							color: aura.purple,
						},
						'h4 a': {
							color: aura.pink,
						},
						img: {
							borderRadius: theme('borderRadius.lg'),
							marginLeft: 'auto',
							marginRight: 'auto',
						},
						p: {
							letterSpacing: theme('letterSpacing.wide'),
						},
						strong: {
							color: aura.red,
							fontWeight: theme('fontWeight.bold'),
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
	variants: {},
}
