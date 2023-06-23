import type { DocumentHeadProps } from '@builder.io/qwik-city'
import { asyncMap } from './promises'
import { extractSlugFromPath } from './strings'

export interface Post {
	archived: boolean
	author: string
	canonicalUrl: string
	categories?: string[]
	createdAt: Date
	description: string
	draft: boolean
	featured: boolean
	heroImage?: {
		alt: string
		src: string
	}
	language: string[]
	publishedAt?: Date
	slug: string
	tags?: string[]
	title: string
	updatedAt?: Date
}

export async function getPosts(): Promise<Post[]> {
	try {
		const modules = await import.meta.glob('/src/routes/blog/**/*.mdx')

		const posts = await asyncMap(
			Object.entries(modules),
			async ([path, module]) => {
				const { head } = (await module()) as DocumentHeadProps
				return {
					archived: head.frontmatter.archived,
					author: head.frontmatter.author,
					categories: head.frontmatter.categories,
					createdAt: new Date(head.frontmatter.createdAt),
					description:
						head.meta.find(meta => meta.name === 'description')?.content || '',
					draft: head.frontmatter.draft,
					featured: head.frontmatter.featured,
					heroImage: head.frontmatter.heroImage,
					language: head.frontmatter.language,
					publishedAt: head.frontmatter.publishedAt
						? new Date(head.frontmatter.publishedAt)
						: undefined,
					slug: extractSlugFromPath(path),
					tags: head.frontmatter.tags,
					title: head.title,
					updatedAt: head.frontmatter.updatedAt
						? new Date(head.frontmatter.updatedAt)
						: undefined,
				} as Post
			}
		)

		return posts
	} catch (error) {
		throw new Error(error as string)
	}
}
