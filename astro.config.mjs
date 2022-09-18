import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

// Markdown & MDX Plugins
import rehypeExternalLinks from 'rehype-external-links'
import remarkCodeTitles from 'remark-code-titles'
import remarkValidateLinks from 'remark-validate-links'

// User-Rolled Plugins
import { remarkReadingTime } from './src/utils/remark-reading-time'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		// https://docs.astro.build/en/guides/integrations-guide/sitemap/
		sitemap(),
	],
	markdown: {
		draft: false,
		extendDefaultPlugins: true,
		rehypePlugins: [rehypeExternalLinks],
		remarkPlugins: [remarkCodeTitles, remarkReadingTime, remarkValidateLinks],
		shikiConfig: {
			theme: 'dracula',
			wrap: true,
		},
	},
	output: 'static',
	site: 'https://codybrunner.com',
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
})
