import { component$, useResource$, Resource } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { PostList } from '~/components/post-list'

import { SimpleLayout } from '~/components/simple-layout'
import { BLOG, SITE } from '~/config.mjs'
import { getPosts } from '~/utils/posts'

export default component$(() => {
	const resource = useResource$(getPosts)
	return (
		<SimpleLayout intro={BLOG.intro} title={BLOG.title}>
			<div class='md:border-l md:border-primary-100 md:pl-6 md:dark:border-primary-700/40'>
				<div class='flex max-w-3xl flex-col space-y-16'>
					<Resource
						onPending={() => <div>Loading...</div>}
						onRejected={reason => <div>Error: {reason}</div>}
						onResolved={posts => <PostList posts={posts} />}
						value={resource}
					/>
				</div>
			</div>
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
