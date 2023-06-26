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
	isPublished,
} from '~/utils/posts'

export const useGetPostsByCategoryLoader = routeLoader$<Post[]>(
	async ({ params, status }) => {
		if (typeof params.category === 'undefined') {
			status(404)
		}
		const posts = await getPosts()
		const category = params.category as CategoryEnum

		return import.meta.env.PROD
			? filterPosts(filterPosts(posts, isPublished), post =>
					hasCategory(post, category)
			  )
			: filterPosts(posts, post => hasCategory(post, category))
	}
)

export default component$(() => {
	const { params } = useLocation()
	const resource = useGetPostsByCategoryLoader()
	return (
		<SimpleLayout
			imageAlt='Illustration of blog posts.'
			imageSrc='/images/blog-post.svg'
			intro={`All posts associated with the ${params.category} category.`}
			title={`${params.category[0].toUpperCase()}${params.category.slice(1)}`}
		>
			<PostsLayout posts={resource} />
		</SimpleLayout>
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
		...head,
	}
}
