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
			aura: { ...aura },
			black,
			blue: blue['500'],
			current: 'currentColor',
			// bg-linkedin || text-linkedin
			linkedin: '#0072B1',
			red: red['500'],
			transparent: 'transparent',
			// bg-twitter || text-twitter
			twitter: '#1DA1F2',
			white,
			yellow: yellow['500'],
		},
		fontFamily: {
			...fontFamily,
		},
		keyframes: {
			wiggle: {
				'0% 100%': { transform: 'rotate(-12deg) scale(0.95)' },
				'50%': { transform: 'rotate(12deg) scale(0.95)' },
			},
		},
	},
	plugins: [],
	variants: {},
}
