import { component$ } from '@builder.io/qwik'
import { Image } from '@unpic/qwik'

export const NoPostsFound = component$(() => {
	return (
		<div class='flex flex-col items-center justify-center space-y-16 lg:space-y-20'>
			<h2 class='text-3xl font-display font-bold'>No Posts At This Time</h2>
			<Image
				// TODO: In the future look at blur effects and placeholders
				alt='No Posts At This Time'
				height={400}
				src='/images/articles.svg'
				width={400}
			/>
		</div>
	)
})
