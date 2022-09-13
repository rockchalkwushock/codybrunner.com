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
		},
	},
	plugins: [],
	variants: {},
}
