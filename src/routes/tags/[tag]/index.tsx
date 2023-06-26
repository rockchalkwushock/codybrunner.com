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
	type TagEnum,
	filterPosts,
	getPosts,
	getTags,
	hasTag,
	isPublished,
} from '~/utils/posts'

export const useGetPostsByTagLoader = routeLoader$<Post[]>(
	async ({ params, status }) => {
		if (typeof params.tag === 'undefined') {
			status(404)
		}
		const posts = await getPosts()
		const tag = params.tag as TagEnum

		return import.meta.env.PROD
			? filterPosts(filterPosts(posts, isPublished), post => hasTag(post, tag))
			: filterPosts(posts, post => hasTag(post, tag))
	}
)

export default component$(() => {
	const { params } = useLocation()
	const resource = useGetPostsByTagLoader()
	return (
		<SimpleLayout
			imageAlt='Illustration of blog posts.'
			imageSrc='/images/blog-post.svg'
			intro={`All posts associated with the ${params.tag} tag.`}
			title={`${params.tag[0].toUpperCase()}${params.tag.slice(1)}`}
		>
			<PostsLayout posts={resource} />
		</SimpleLayout>
	)
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
	const posts = await getPosts()
	const tags = getTags(
		import.meta.env.PROD ? filterPosts(posts, isPublished) : posts
	)
	return {
		params: Object.keys(tags).map(tag => ({ tag })),
	}
}

export const head: DocumentHead = ({ head }) => {
	return {
		...head,
	}
}
