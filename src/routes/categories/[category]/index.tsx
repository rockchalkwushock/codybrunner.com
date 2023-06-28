/* eslint-disable no-mixed-spaces-and-tabs */
import { component$ } from '@builder.io/qwik'
import {
	type DocumentHead,
	type StaticGenerateHandler,
	routeLoader$,
	useLocation,
} from '@builder.io/qwik-city'

import { PostsLayout } from '~/components/posts-layout'
import { SimpleLayout } from '~/components/simple-layout'
import {
	type PostSchema as Post,
	type CategoryEnum,
	filterPosts,
	getCategories,
	getPosts,
	hasCategory,
	isAfter,
	isPublished,
	sortPosts,
} from '~/utils/posts'
import { SITE } from '~/config.mjs'

export const useGetPostsByCategoryLoader = routeLoader$<Post[]>(
	async ({ params, status }) => {
		if (typeof params.category === 'undefined') {
			status(404)
		}
		const posts = await getPosts()
		const category = params.category as CategoryEnum

		return import.meta.env.PROD
			? sortPosts(
					filterPosts(filterPosts(posts, isPublished), post =>
						hasCategory(post, category)
					),
					isAfter
			  )
			: sortPosts(
					filterPosts(posts, post => hasCategory(post, category)),
					isAfter
			  )
	}
)

export default component$(() => {
	const { params, url } = useLocation()
	const resource = useGetPostsByCategoryLoader()
	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		description: `All posts associated with the ${params.category} category.`,
		name: `${params.category[0].toUpperCase()}${params.category.slice(1)}`,
		publisher: {
			'@type': 'ProfilePage',
			name: SITE.title,
		},
		url: url.href,
	})
	return (
		<>
			<script
				dangerouslySetInnerHTML={jsonLd}
				data-testid={url.href}
				id={url.href}
				type='application/ld+json'
			/>
			<SimpleLayout
				imageAlt='Illustration of blog posts.'
				imageSrc='/images/blog-post.svg'
				intro={`All posts associated with the ${params.category} category.`}
				title={`${params.category[0].toUpperCase()}${params.category.slice(1)}`}
			>
				<PostsLayout posts={resource} />
			</SimpleLayout>
		</>
	)
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
	const posts = await getPosts()
	const categories = getCategories(
		import.meta.env.PROD ? filterPosts(posts, isPublished) : posts
	)
	return {
		params: Object.keys(categories).map(tag => ({ tag })),
	}
}

export const head: DocumentHead = ({ head }) => {
	return {
		// TODO
		...head,
	}
}
