import { component$, useResource$ } from '@builder.io/qwik'
import { type DocumentHead, useLocation } from '@builder.io/qwik-city'

import { PostsLayout } from '~/components/posts-layout'
import { SimpleLayout } from '~/components/simple-layout'
import { BLOG, SITE } from '~/config.mjs'
import {
	filterPosts,
	getPosts,
	isAfter,
	isPublished,
	sortPosts,
} from '~/utils/posts'

export default component$(() => {
	const loc = useLocation()
	const resource = useResource$(async () => {
		const posts = await getPosts()
		return import.meta.env.PROD
			? sortPosts(filterPosts(posts, isPublished), isAfter)
			: sortPosts(posts, isAfter)
	})
	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		description: BLOG.description,
		name: BLOG.title,
		publisher: {
			'@type': 'ProfilePage',
			name: SITE.title,
		},
		url: loc.url.href,
	})
	return (
		<>
			<script
				dangerouslySetInnerHTML={jsonLd}
				data-testid={loc.url.href}
				id={loc.url.href}
				type='application/ld+json'
			/>
			<SimpleLayout
				imageAlt='Illustration of blog posts.'
				imageSrc='/images/blog-post.svg'
				intro={BLOG.intro}
				title={BLOG.title}
			>
				<PostsLayout posts={resource} />
			</SimpleLayout>
		</>
	)
})

export const head: DocumentHead = ({ head }) => {
	return {
		...head,
		title: BLOG.title,
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
				content: BLOG.title,
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
				content: BLOG.title,
			},
			{
				name: 'twitter:url',
				content: SITE.origin,
			},
		],
	}
}
