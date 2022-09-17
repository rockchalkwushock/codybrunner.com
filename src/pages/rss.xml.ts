import rss from '@astrojs/rss'
import type { Post } from '@interfaces/post'

const pageResults = import.meta.glob('../data/*.mdx', { eager: true })
const postResults = import.meta.glob('../data/posts/**/*.mdx', { eager: true })
const pages = Object.values(pageResults) as Array<Post>
const posts = Object.values(postResults) as Array<Post>

export const get = () =>
	rss({
		title: 'codybrunner.com',
		description: 'My stretch of pipe in the world wide inter-tubes.',
		site: import.meta.env.SITE,
		items: [...pages, ...posts].map(post => ({
			description: post.frontmatter.description,
			link: post.url as string,
			pubDate: new Date(
				post.frontmatter.publishedAt || post.frontmatter.createdAt
			),
			title: post.frontmatter.title,
		})),
		customData: `<language>en-us</language>`,
		stylesheet: '/rss/pretty-feed-v3.xsl',
	})
