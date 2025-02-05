import { defineCollection, z, type CollectionEntry } from 'astro:content'

export const collections = {
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
}

export type Job = CollectionEntry<'jobs'>
