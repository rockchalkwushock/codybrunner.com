import type { MDXInstance } from 'astro'

export type Category = 'business' | 'food' | 'life' | 'technology' | 'travel'

export type Tag =
	| 'absinthe'
	| 'asd'
	| 'astrojs'
	| 'autism'
	| 'aws'
	| 'cli'
	| 'cloudflare'
	| 'colombia'
	| 'django'
	| 'docker'
	| 'docker-compose'
	| 'docker-swarm'
	| 'ecto'
	| 'elixir'
	| 'erlang'
	| 'expat'
	| 'fly'
	| 'git'
	| 'golang'
	| 'graphql'
	| 'hasura'
	| 'hugo'
	| 'immigration'
	| 'iterm'
	| 'javascript'
	| 'k3s'
	| 'k8s'
	| 'linux'
	| 'liveview'
	| 'macos'
	| 'nextjs'
	| 'netlify'
	| 'nodejs'
	| 'opinion'
	| 'oss'
	| 'personal'
	| 'phoenix'
	| 'postgresql'
	| 'python'
	| 'raspberry-pi'
	| 'reactjs'
	| 'react-query'
	| 'rustlang'
	| 'sql'
	| 'ssh'
	| 'svelte'
	| 'tailscale'
	| 'tailwindcss'
	| 'typescript'
	| 'vercel'
	| 'vscode'

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
