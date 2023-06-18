import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik'

import { Container } from '~/components/container'
import { NOT_FOUND, SITE } from '~/config.mjs'

export default component$(() => {
	return (
		<Container class='mt-9'>
			<div class='flex flex-col items-center justify-center w-full'>
				<h1 class='sr-only'>{NOT_FOUND.title}</h1>
				<p class='sr-only'>{NOT_FOUND.description}</p>
				<Image
					alt='Not Found'
					height={300}
					src='/images/page-not-found.svg'
					width={400}
				/>
			</div>
		</Container>
	)
})

export const head: DocumentHead = {
	title: NOT_FOUND.title,
	meta: [
		{
			name: 'og:description',
			content: NOT_FOUND.description,
		},
		{
			name: 'og:title',
			content: `${NOT_FOUND.title} | ${SITE.title}`,
		},
	],
}
