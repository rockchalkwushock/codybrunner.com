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
		extend: {
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
			// Defines the template areas using 'grid-template-areas':
			// Generates:
			// - grid-areas-mobile
			// - grid-areas-desktop
			gridTemplateAreas: {
				mobile: ['header', 'main', 'nav', 'footer'],
				desktop: [
					'header header header header',
					'main main main aside',
					'nav nav nav nav',
					'footer footer footer footer',
				],
			},
			// Defines the template columns using 'grid-template-columns':
			// Generates:
			// - grid-cols-mobile
			// - grid-cols-desktop
			gridTemplateColumns: {
				mobile: '1fr',
				desktop: 'repeat(4, minmax(0, 1fr))',
			},
			// Defines the template rows using 'grid-template-rows':
			// Generates:
			// - grid-rows-mobile
			// - grid-rows-desktop
			gridTemplateRows: {
				mobile: '1fr',
				desktop: 'auto 1fr auto',
			},
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
	plugins: [
		require('@tailwindcss/typography'),
		require('@savvywombat/tailwindcss-grid-areas'),
	],
	variants: {
		// Will enable the ability to do the following:
		// grid-areas-mobile md:grid-areas-tablet lg:grid-areas-desktop.
		gridTemplateAreas: ['responsive'],
		gridTemplateColumns: ['responsive'],
		gridTemplateRows: ['responsive'],
	},
}
