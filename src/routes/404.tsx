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
			name: 'description',
			content: NOT_FOUND.description,
		},
		{
			property: 'og:description',
			content: NOT_FOUND.description,
		},
		{
			property: 'og:image',
			content: `/images/page-not-found.svg`,
		},
		{
			property: 'og:image:alt',
			content: `Logo for ${NOT_FOUND.title}`,
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
			content: `${NOT_FOUND.title} | ${SITE.title}`,
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
			content: NOT_FOUND.description,
		},
		{
			name: 'twitter:domain',
			content: SITE.origin.replace('https://', ''),
		},
		{
			property: 'twitter:image',
			content: `/images/page-not-found.svg`,
		},
		{
			property: 'twitter:image:alt',
			content: `Logo for ${NOT_FOUND.title}`,
		},
		{
			name: 'twitter:site',
			content: SITE.twitter,
		},
		{
			name: 'twitter:title',
			content: `${NOT_FOUND.title} | ${SITE.title}`,
		},
		{
			name: 'twitter:url',
			content: SITE.origin,
		},
	],
}
