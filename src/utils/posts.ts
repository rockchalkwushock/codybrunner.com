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
	published: boolean
	publishedAt?: Date
	slug: string
	tags?: string[]
	title: string
	updatedAt?: Date
}

export function filterPosts(
	posts: Post[],
	callback: (post: Post) => boolean
): Post[] {
	return posts.filter(callback)
}

export function pickPosts(posts: Post[], idx = 0): Post[] {
	return posts.slice(0, idx)
}

export function sortPosts(
	posts: Post[],
	callback: (a: Post, b: Post) => number
): Post[] {
	return posts.sort(callback)
}

export function isDraft(post: Post): boolean {
	return post.draft
}

export function isFeatured(post: Post): boolean {
	return post.featured
}

export function isPublished(post: Post): boolean {
	return post.published && post.publishedAt !== undefined && !post.draft
}

export function isAfter(a: Post, b: Post) {
	const date1 =
		a.updatedAt !== undefined
			? a.updatedAt
			: a.publishedAt !== undefined
			? a.publishedAt
			: a.createdAt
	const date2 =
		b.updatedAt !== undefined
			? b.updatedAt
			: b.publishedAt !== undefined
			? b.publishedAt
			: b.createdAt

	return date1.getTime() < date2.getTime() ? 1 : -1
}

export function isBefore(a: Post, b: Post) {
	const date1 =
		a.updatedAt !== undefined
			? a.updatedAt
			: a.publishedAt !== undefined
			? a.publishedAt
			: a.createdAt
	const date2 =
		b.updatedAt !== undefined
			? b.updatedAt
			: b.publishedAt !== undefined
			? b.publishedAt
			: b.createdAt

	return date1.getTime() > date2.getTime() ? 1 : -1
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
					published: head.frontmatter.published,
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
