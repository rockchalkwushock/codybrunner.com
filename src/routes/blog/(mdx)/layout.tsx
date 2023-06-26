import { component$, useStyles$, Slot } from '@builder.io/qwik'
import {
	type DocumentHead,
	useDocumentHead,
	useNavigate,
	useLocation,
} from '@builder.io/qwik-city'

import { BuyMeACoffee } from '~/components/buy-me-a-coffee'
import { Container } from '~/components/container'
import { ArrowLeftIcon } from '~/components/icons'
import { formatDate } from '~/utils/strings'
import rehypePrettyCode from '~/styles/rehype-pretty-code.css?inline'
import { SITE } from '~/config.mjs'
import type { PostSchema as Post } from '~/utils/posts'

export default component$(() => {
	useStyles$(rehypePrettyCode)
	const navigate = useNavigate()
	const loc = useLocation()
	const { frontmatter, meta, title } = useDocumentHead()
	const description = meta.find(meta => meta.name === 'description')?.content
	const { createdAt, draft, heroImage, publishedAt, updatedAt } =
		frontmatter as Post

	// TODO: Read more on BlogPosting JSON-LD
	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		author: {
			'@type': 'Person',
			name: 'Cody Brunner',
		},
		dateModified: updatedAt,
		datePublished: publishedAt,
		description: description,
		headline: title,
		image: heroImage?.src,
		publisher: {
			'@type': 'Organization',
			name: 'codybrunner.com',
			logo: {
				'@type': 'ImageObject',
				url: `${SITE.origin}/icons/logo.svg`,
			},
		},
		url: loc.url.href,
	})

	return (
		<>
			<script
				dangerouslySetInnerHTML={jsonLd}
				data-testid=''
				id=''
				type='application/ld+json'
			/>
			<Container class='mt-16 lg:mt-32'>
				<div class='xl:relative'>
					<div class='mx-auto max-w-2xl'>
						<button
							aria-label='Go back to articles'
							class='group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-primary-800/5 ring-1 ring-primary-900/5 transition dark:border dark:border-primary-700/50 dark:bg-primary-800 dark:ring-0 dark:ring-white/10 dark:hover:border-primary-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0'
							onClick$={() => navigate('/blog')}
							type='button'
						>
							<ArrowLeftIcon class='h-4 w-4 stroke-primary-500 transition group-hover:stroke-primary-700 dark:group-hover:stroke-primary-400' />
						</button>
						<article>
							<header class='flex flex-col'>
								<h1 class='mt-6 text-4xl font-bold tracking-tight text-primary-800 dark:text-primary-100 sm:text-5xl'>
									{title}
								</h1>
								<time
									class='order-first flex items-center text-base text-primary-400 dark:text-primary-500'
									dateTime={new Date(updatedAt ?? publishedAt ?? createdAt)
										.getTime()
										.toString()}
								>
									<span class='h-4 w-0.5 rounded-full bg-primary-200 dark:bg-primary-500' />
									<span class='ml-3'>
										{formatDate(
											new Date(updatedAt ?? publishedAt ?? createdAt)
										)}
										{draft && (
											<span class='bg-[#ef4444] ml-2 text-white text-xs px-1 rounded-full'>
												draft
											</span>
										)}
									</span>
								</time>
							</header>
							<div class='mt-8 prose dark:prose-invert'>
								<Slot />
							</div>
							<BuyMeACoffee />
						</article>
					</div>
				</div>
			</Container>
		</>
	)
})

export const head: DocumentHead = ({ head }) => {
	const description = head.meta.find(
		meta => meta.name === 'description'
	)?.content
	const image = head.meta.find(meta => meta.property === 'og:image')?.content
	const imageAlt = head.meta.find(
		meta => meta.property === 'og:image:alt'
	)?.content
	return {
		...head,
		meta: [
			...head.meta,
			{
				property: 'og:site_name',
				content: SITE.title,
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
				content: description,
			},
			{
				name: 'twitter:domain',
				content: SITE.origin.replace('https://', ''),
			},
			{
				property: 'twitter:image',
				content: image,
			},
			{
				property: 'twitter:image:alt',
				content: imageAlt ?? head.title,
			},
			{
				name: 'twitter:site',
				content: SITE.twitter,
			},
			{
				name: 'twitter:title',
				content: `${head.title} | ${SITE.title}`,
			},
			{
				name: 'twitter:url',
				content: SITE.origin,
			},
		],
	}
}
