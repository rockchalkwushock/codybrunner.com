import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [
		sitemap(),
		image({ serviceEntryPoint: '@astrojs/image/sharp' }),
	],
	server: {
		open: true,
		port: 3000,
	},
	site: 'https://codybrunner.com',
})
