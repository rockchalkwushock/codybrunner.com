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
		sitemap({
			changefreq: 'monthly',
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en-US',
					es: 'es-CO',
				},
			},
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
