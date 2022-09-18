import rss from '@astrojs/rss'
import type { Post } from '@interfaces/post'
import { byDate, parsePostSlug, sortPosts } from '@utils/post-helpers'

const pageResults = import.meta.glob('../data/*.mdx', { eager: true })
const postResults = import.meta.glob('../data/posts/**/*.mdx', { eager: true })
const pages = Object.values(pageResults) as Array<Post>
const posts = Object.values(postResults) as Array<Post>

const allContent = sortPosts([...pages, ...posts], byDate)

export const get = () =>
	rss({
		title: 'codybrunner.com',
		description: 'My stretch of pipe in the world wide inter-tubes.',
		site: import.meta.env.SITE,
		items: allContent.map(post => ({
			description: post.frontmatter.description,
			link: parsePostSlug(post.url) as string,
			pubDate: new Date(
				post.frontmatter.publishedAt || post.frontmatter.createdAt
			),
			title: post.frontmatter.title,
		})),
		customData: `<language>en-us</language>`,
		stylesheet: '/rss/pretty-feed-v3.xsl',
	})
