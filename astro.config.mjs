import { defineConfig, sharpImageService } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	image: {
		service: sharpImageService(),
	},
	integrations: [
		react(),
		tailwind(),
		// TODO: i18n sitemap
		// @see https://docs.astro.build/en/guides/integrations-guide/sitemap/#i18n
		sitemap({
			changefreq: 'monthly',
			lastmod: new Date(),
			priority: 0.7,
		}),
	],
	server: {
		open: true,
		port: 3000,
	},
	site: 'https://codybrunner.com',
})
