import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [
		sitemap(),
		image({ serviceEntryPoint: '@astrojs/image/sharp' }),
		partytown(),
	],
	server: {
		open: true,
		port: 3000,
	},
	site: 'https://codybrunner.com',
})
