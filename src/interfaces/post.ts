import type { MDXInstance } from 'astro'

export const CATEGORIES = [
	'business',
	'food',
	'life',
	'technology',
	'travel',
] as const
export type CategoryTuple = typeof CATEGORIES
export type Category = CategoryTuple[number]

export const TAGS = [
	'absinthe',
	'asd',
	'astrojs',
	'autism',
	'aws',
	'cli',
	'cloudflare',
	'colombia',
	'django',
	'docker',
	'docker-compose',
	'docker-swarm',
	'ecto',
	'elixir',
	'erlang',
	'expat',
	'fly',
	'git',
	'golang',
	'graphql',
	'hasura',
	'hugo',
	'immigration',
	'iterm',
	'javascript',
	'k3s',
	'k8s',
	'linux',
	'liveview',
	'macos',
	'nextjs',
	'netlify',
	'nodejs',
	'opinion',
	'oss',
	'personal',
	'phoenix',
	'postgresql',
	'python',
	'raspberry-pi',
	'reactjs',
	'react-query',
	'rustlang',
	'sql',
	'ssh',
	'svelte',
	'tailscale',
	'tailwindcss',
	'typescript',
	'vercel',
	'vscode',
] as const
export type TagTuple = typeof TAGS
export type Tag = TagTuple[number]

export interface Frontmatter {
	author: string
	category: Category
	coverImage?: string
	createdAt: string
	description: string
	draft: boolean
	featured: boolean
	keywords: Array<string>
	modifiedAt?: string
	publishedAt?: string
	/* Generated */
	readingTime: string
	/* Generated */
	relatedPosts: Array<Post>
	series?: Record<'entries', Array<string>> | null
	/* Generated */
	slug: string
	tags: Array<Tag>
	title: string
	/* Generated */
	wordCount: number
}

export type Post = MDXInstance<Frontmatter>
