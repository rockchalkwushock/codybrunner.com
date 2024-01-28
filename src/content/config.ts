import { defineCollection, z, type CollectionEntry } from 'astro:content'

export const collections = {
	bookshelf: defineCollection({
		schema: z.object({
			authors: z.array(z.string()).default([]),
			category: z.enum([
				'current',
				'fiction',
				'finance',
				'marriage',
				'self-help',
				'technology',
			] as const),
			image: z.string().optional(),
			title: z.string(),
			url: z.string().url(),
		}),
		type: 'data',
	}),
	jobs: defineCollection({
		schema: ({ image }) =>
			z.object({
				company: z.string(),
				end: z.string().optional(),
				logo: image(),
				start: z.string(),
				title: z.string(),
			}),
		type: 'data',
	}),
	projects: defineCollection({
		schema: ({ image }) =>
			z.object({
				description: z.string(),
				link: z.object({
					href: z.string().url(),
					label: z.string(),
				}),
				logo: image(),
				name: z.string(),
			}),
		type: 'data',
	}),
	uses: defineCollection({
		schema: z.object({
			category: z.enum(['dev-tools', 'productivity', 'work-station'] as const),
			description: z.string(),
			href: z.string().url(),
			title: z.string(),
		}),
		type: 'data',
	}),
}

export type Job = CollectionEntry<'jobs'>
