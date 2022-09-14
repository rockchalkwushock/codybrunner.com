import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

// Markdown & MDX Plugins
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkNormalizeHeadings from 'remark-normalize-headings'
import remarkValidateLinks from 'remark-validate-links'
// User-Rolled Plugins
import { remarkReadingTime } from './src/utils/remark-reading-time'

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind({ config: { applyBaseStyles: false } })],
	markdown: {
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeExternalLinks],
		remarkPlugins: [
			remarkNormalizeHeadings,
			remarkReadingTime,
			remarkValidateLinks,
		],
		extendDefaultPlugins: true,
	},
	site: 'https://codybrunner.com',
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
})
