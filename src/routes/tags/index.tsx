import { component$, useResource$, Resource } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import { SimpleLayout } from '~/components/simple-layout'
import { TagLink } from '~/components/tag-link'
import { BLOG, SITE } from '~/config.mjs'
import { typedEntries } from '~/utils/objects'
import { filterPosts, getPosts, getTags, isPublished } from '~/utils/posts'

export default component$(() => {
	const resource = useResource$(async () => {
		const posts = await getPosts()
		return import.meta.env.PROD
			? getTags(filterPosts(posts, isPublished))
			: getTags(posts)
	})
	return (
		<SimpleLayout
			imageAlt='Illustration of blog posts.'
			imageSrc='/images/blog-post.svg'
			intro={BLOG.intro}
			title={BLOG.title}
		>
			<Resource
				onPending={() => <div>Loading...</div>}
				onRejected={reason => <div>Error: {(reason as Error).message}</div>}
				onResolved={tags => (
					<div class=''>
						<ul class='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4'>
							{typedEntries(tags).map(([tag, count]) => (
								<li class='group px-10 relative' key={tag}>
									<h2 class='text-base flex justify-between items-center font-semibold tracking-tight text-primary-800 dark:text-primary-100'>
										<div class='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-primary-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-primary-800/50 sm:-inset-x-6 sm:rounded-2xl' />
										<TagLink aria-label='//TODO' href={tag}>
											<span class='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl' />
											<span class='relative z-10'>{tag}</span>
										</TagLink>
										<span class=''>{count}</span>
									</h2>
								</li>
							))}
						</ul>
					</div>
				)}
				value={resource}
			/>
		</SimpleLayout>
	)
})

export const head: DocumentHead = ({ head }) => {
	return {
		...head,
		title: `${BLOG.title} | ${SITE.title}`,
		meta: [
			...head.meta,
			{
				name: 'description',
				content: BLOG.description,
			},
			{
				property: 'og:description',
				content: BLOG.description,
			},
			{
				property: 'og:image',
				content: `/android-chrome-512x512.png`,
			},
			{
				property: 'og:image:alt',
				content: `Logo for ${SITE.title}`,
			},
			{
				property: 'og:image:height',
				content: `512`,
			},
			{
				property: 'og:image:width',
				content: `512`,
			},
			{
				property: 'og:locale',
				content: 'en_US',
			},
			{
				property: 'og:title',
				content: `${BLOG.title} | ${SITE.title}`,
			},
			{
				property: 'og:type',
				content: 'website',
			},
			{
				property: 'og:url',
				content: SITE.origin,
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{
				name: 'twitter:creator',
				content: SITE.twitter,
			},
			{
				name: 'twitter:description',
				content: BLOG.description,
			},
			{
				name: 'twitter:domain',
				content: SITE.origin.replace('https://', ''),
			},
			{
				property: 'twitter:image',
				content: `/android-chrome-512x512.png`,
			},
			{
				property: 'twitter:image:alt',
				content: `Logo for ${SITE.title}`,
			},
			{
				name: 'twitter:site',
				content: SITE.twitter,
			},
			{
				name: 'twitter:title',
				content: `${BLOG.title} | ${SITE.title}`,
			},
			{
				name: 'twitter:url',
				content: SITE.origin,
			},
		],
	}
}
