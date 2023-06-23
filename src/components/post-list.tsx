import { component$ } from '@builder.io/qwik'

import type { Post } from '~/utils/posts'
import { PostItem } from './post-item'

interface Props {
	posts: Post[]
}

export const PostList = component$<Props>(({ posts }) => {
	return (
		<>
			{posts.map(post => (
				<PostItem key={post.slug} {...post} />
			))}
		</>
	)
})
