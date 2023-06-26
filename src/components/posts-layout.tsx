import {
	type ResourceReturn,
	type Signal,
	component$,
	Resource,
} from '@builder.io/qwik'

import { NoPostsFound } from './no-posts-found'
import { PostList } from './post-list'
import type { PostSchema as Post } from '~/utils/posts'

interface Props {
	posts: ResourceReturn<Post[]> | Signal<Post[]>
}

export const PostsLayout = component$<Props>(({ posts }) => {
	return (
		// TODO: Revert when posts exist in production.
		// md:border-l md:border-primary-100 md:pl-6 md:dark:border-primary-700/40
		<div class=''>
			<div class='flex max-w-3xl mx-auto flex-col space-y-16'>
				<Resource
					onPending={() => <div>Loading...</div>}
					onRejected={reason => <div>Error: {(reason as Error).message}</div>}
					onResolved={posts =>
						posts.length > 0 ? <PostList posts={posts} /> : <NoPostsFound />
					}
					value={posts}
				/>
			</div>
		</div>
	)
})
