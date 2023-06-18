import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik'

import { Section } from '~/components/section'
import { SimpleLayout } from '~/components/simple-layout'
import { BOOKSHELF, SITE } from '~/config.mjs'

export default component$(() => {
	return (
		<SimpleLayout intro={BOOKSHELF.intro} title={BOOKSHELF.title}>
			<div class='space-y-20'>
				<Section title='Currently Reading'>
					<ul class='space-y-16' role='list'>
						{BOOKSHELF.current.map(({ authors, image, title, url }, i) => (
							<li
								key={`current-${i}`}
								class='group relative flex flex-col items-start'
							>
								<a
									class='relative z-10 flex-shrink-0 w-32 h-48 overflow-hidden rounded-lg shadow-md group-hover:shadow-lg'
									href={url}
								>
									<Image
										alt={`${title} by ${authors.join(', ')}`}
										class='object-cover w-full h-full'
										height={40}
										src={image}
										width={32}
									/>
								</a>
								<h3 class='relative z-10 mt-2 text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100'>
									<a
										class='relative z-10 text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100'
										href={url}
										target='_blank'
										rel='noopener noreferrer'
									>
										{title}
									</a>
								</h3>
								<p class='relative z-10 mt-2 text-sm text-primary-600 dark:text-primary-400'>
									{authors.join(', ')}
								</p>
							</li>
						))}
					</ul>
				</Section>
				<Section title='Fiction'>
					<ul class='space-y-8' role='list'>
						{BOOKSHELF.fiction.map(({ authors, title, url }, i) => (
							<li
								class='group p-2 transition ease-in-out duration-300 hover:bg-primary-100 hover:shadow-md rounded-md dark:hover:bg-primary-700/40'
								key={`fiction-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-primary-800 dark:text-primary-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100 transition ease-in-out duration-300 group-hover:text-accent-600 dark:group-hover:text-accent-400'>
										{title}
									</h3>
									<p class='text-sm text-primary-600 dark:text-primary-400'>
										{authors.join(', ')}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</Section>
				<Section title='Finance'>
					<ul class='space-y-8' role='list'>
						{BOOKSHELF.finance.map(({ authors, title, url }, i) => (
							<li
								class='group p-2 transition ease-in-out duration-300 hover:bg-primary-100 hover:shadow-md rounded-md dark:hover:bg-primary-700/40'
								key={`finance-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-primary-800 dark:text-primary-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100 transition ease-in-out duration-300 group-hover:text-accent-600 dark:group-hover:text-accent-400'>
										{title}
									</h3>
									<p class='text-sm text-primary-600 dark:text-primary-400'>
										{authors.join(', ')}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</Section>
				<Section title='Relationship'>
					<ul class='space-y-8' role='list'>
						{BOOKSHELF.marriage.map(({ authors, title, url }, i) => (
							<li
								class='group p-2 transition ease-in-out duration-300 hover:bg-primary-100 hover:shadow-md rounded-md dark:hover:bg-primary-700/40'
								key={`marriage-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-primary-800 dark:text-primary-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100 transition ease-in-out duration-300 group-hover:text-accent-600 dark:group-hover:text-accent-400'>
										{title}
									</h3>
									<p class='text-sm text-primary-600 dark:text-primary-400'>
										{authors.join(', ')}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</Section>
				<Section title='Self Help'>
					<ul class='space-y-8' role='list'>
						{BOOKSHELF.selfHelp.map(({ authors, title, url }, i) => (
							<li
								class='group p-2 transition ease-in-out duration-300 hover:bg-primary-100 hover:shadow-md rounded-md dark:hover:bg-primary-700/40'
								key={`self-help-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-primary-800 dark:text-primary-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100 transition ease-in-out duration-300 group-hover:text-accent-600 dark:group-hover:text-accent-400'>
										{title}
									</h3>
									<p class='text-sm text-primary-600 dark:text-primary-400'>
										{authors.join(', ')}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</Section>
				<Section title='Technology'>
					<ul class='space-y-8' role='list'>
						{BOOKSHELF.technology.map(({ authors, title, url }, i) => (
							<li
								class='group p-2 transition ease-in-out duration-300 hover:bg-primary-100 hover:shadow-md rounded-md dark:hover:bg-primary-700/40'
								key={`technology-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-primary-800 dark:text-primary-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100 transition ease-in-out duration-300 group-hover:text-accent-600 dark:group-hover:text-accent-400'>
										{title}
									</h3>
									<p class='text-sm text-primary-600 dark:text-primary-400'>
										{authors.join(', ')}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</Section>
			</div>
		</SimpleLayout>
	)
})

export const head: DocumentHead = {
	title: BOOKSHELF.title,
	meta: [
		{
			property: 'og:description',
			content: BOOKSHELF.description,
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
			property: 'og:locale',
			content: 'en_US',
		},

		{
			property: 'og:title',
			content: `${BOOKSHELF.title} | ${SITE.title}`,
		},
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:url',
			content: `${SITE.origin}/bookshelf`,
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
	],
}
