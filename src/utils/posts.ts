import { z, type DocumentHeadProps } from '@builder.io/qwik-city'

import { asyncMap } from './promises'
import { extractSlugFromPath } from './strings'

const CATEGORIES = ['expat', 'personal', 'technology', 'travel'] as const
const CategoriesEnum = z.enum(CATEGORIES)
export type CategoryEnum = z.infer<typeof CategoriesEnum>

const LANGUAGES = ['en_US', 'es_CO'] as const
const LanguagesEnum = z.enum(LANGUAGES)
export type LangEnum = z.infer<typeof LanguagesEnum>

const TAGS = [
	'absinthe',
	'asd',
	'ash',
	'astro',
	'autism',
	'aws',
	'ci-cd',
	'cli',
	'cloudflare',
	'colombia',
	'deploy',
	'django',
	'dns',
	'docker',
	'docker-compose',
	'ecto',
	'elixir',
	'erlang',
	'family',
	'fly',
	'git',
	'github-actions',
	'graphql',
	'hasura',
	'hugo',
	'immigration',
	'iterm',
	'javascript',
	'linux',
	'macos',
	'marriage',
	'mdx',
	'nextjs',
	'netlify',
	'nodejs',
	'opinion',
	'oss',
	'phoenix',
	'phoenix-liveview',
	'planetscale',
	'pnpm',
	'psql',
	'python',
	'qwik',
	'qwik-city',
	'raspberry-pi',
	'reactjs',
	'react-query',
	'remix-run',
	'rust',
	'solidjs',
	'solidstart',
	'sql',
	'ssh',
	'storybookjs',
	'svelte',
	'sveltekit',
	'tailwindcss',
	'trpc',
	'typescript',
	'vercel',
	'vitejs',
	'vitest',
	'vscode',
	'yarn',
	'zsh',
] as const
const TagsEnum = z.enum(TAGS)
export type TagEnum = z.infer<typeof TagsEnum>

const PostSchema = z.object({
	archived: z.boolean().default(false),
	author: z.string().default('Cody Brunner'),
	// FIXME:
	// canonicalUrl: z.string().url(),
	categories: z.array(CategoriesEnum).optional(),
	createdAt: z.date({
		invalid_type_error: 'createdAt is typeof Date',
		required_error: 'createdAt is not defined.',
	}),
	description: z.string(),
	draft: z.boolean().default(true),
	featured: z.boolean().default(false),
	heroImage: z
		.object({
			alt: z.string(),
			src: z.string(),
		})
		.optional(),
	// FIXME:
	// language: z.array(LanguagesEnum).optional(),
	published: z.boolean().default(false),
	publishedAt: z
		.date({
			invalid_type_error: 'publishedAt is typeof Date',
		})
		.optional(),
	slug: z.string(),
	tags: z.array(TagsEnum).optional(),
	title: z.string(),
	updatedAt: z
		.date({
			invalid_type_error: 'updatedAt is typeof Date',
		})
		.optional(),
})

export type PostSchema = z.infer<typeof PostSchema>

export function filterPosts(
	posts: PostSchema[],
	callback: (post: PostSchema) => boolean
): PostSchema[] {
	return posts.filter(callback)
}

export function pickPosts(posts: PostSchema[], idx = 0): PostSchema[] {
	return posts.slice(0, idx)
}

export function sortPosts(
	posts: PostSchema[],
	callback: (a: PostSchema, b: PostSchema) => number
): PostSchema[] {
	return posts.sort(callback)
}

export function isDraft(post: PostSchema): boolean {
	return post.draft
}

export function hasCategory(post: PostSchema, category: CategoryEnum): boolean {
	return Boolean(post.categories?.includes(category))
}

export function hasTag(post: PostSchema, tag: TagEnum): boolean {
	return Boolean(post.tags?.includes(tag))
}

export function isFeatured(post: PostSchema): boolean {
	return post.featured
}

export function isPublished(post: PostSchema): boolean {
	return post.published && post.publishedAt !== undefined && !post.draft
}

export function isAfter(a: PostSchema, b: PostSchema) {
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

export function isBefore(a: PostSchema, b: PostSchema) {
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

export function getCategories(
	posts: PostSchema[]
): Record<CategoryEnum, number> {
	// @ts-expect-error
	const categoryCounts: Record<CategoryEnum, number> = {}

	posts.forEach(({ categories = [] }) => {
		categories.forEach(category => {
			if (categoryCounts[category]) {
				categoryCounts[category] += 1
			} else if (CATEGORIES.includes(category)) {
				categoryCounts[category] = 1
			}
		})
	})

	return categoryCounts
}

export async function getPosts(): Promise<PostSchema[]> {
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
				} as PostSchema
			}
		)

		// Validate posts
		// TODO: 1. Validate that a post marked as published: true 1) has publishedAt, 2) has draft: false
		// TODO: 2. Validate that a post with updatedAt 1) has published: true, 2) has publishedAt, 3) updatedAt > publishedAt 4) draft: false
		// TODO: 3. Validate that a post marked as featured: true 1) has published: true, 2) has publishedAt 3) draft: false
		// TODO: 4. Validate that a post marked archived 1) has published: true 2) has publishedAt 3) draft: false
		posts.map(post => PostSchema.parse(post))

		return posts
	} catch (error) {
		throw new Error(error as string)
	}
}

export function getTags(posts: PostSchema[]): Record<TagEnum, number> {
	// @ts-expect-error
	const tagCounts: Record<TagEnum, number> = {}

	posts.forEach(({ tags = [] }) => {
		tags.forEach(tag => {
			if (tagCounts[tag]) {
				tagCounts[tag] += 1
			} else if (TAGS.includes(tag)) {
				tagCounts[tag] = 1
			}
		})
	})

	return tagCounts
}
