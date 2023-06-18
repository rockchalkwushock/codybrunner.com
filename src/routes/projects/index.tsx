import { component$ } from '@builder.io/qwik'
import { type DocumentHead, Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik'

import { LinkIcon } from '~/components/icons'
import { SimpleLayout } from '~/components/simple-layout'
import { PROJECTS, SITE } from '~/config.mjs'

export default component$(() => {
	return (
		<SimpleLayout intro={PROJECTS.intro} title={PROJECTS.title}>
			<ul
				class='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'
				role='list'
			>
				{PROJECTS.portfolio.map(({ description, link, logo, name }, i) => (
					<li
						class='group relative flex flex-col items-start'
						key={`${name}--${i}`}
					>
						<div class='relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-primary-800/5 ring-1 ring-primary-900/5 dark:border dark:border-primary-700/50 dark:bg-primary-800 dark:ring-0'>
							<Image
								alt={`Logo for ${name}`}
								class='h-9 rounded-full w-9'
								height={36}
								src={logo}
								width={36}
							/>
						</div>
						<h2 class='mt-6 text-base font-semibold text-primary-800 dark:text-primary-100'>
							<div class='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-primary-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-primary-800/50 sm:-inset-x-6 sm:rounded-2xl' />
							<Link href={link.href}>
								<span class='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl' />
								<span class='relative z-10'>{name}</span>
							</Link>
						</h2>
						<p class='relative z-10 mt-2 text-sm text-primary-600 dark:text-primary-400'>
							{description}
						</p>
						<p class='relative z-10 mt-6 flex text-sm font-medium text-primary-400 transition group-hover:text-accent-500 dark:text-primary-200'>
							<LinkIcon />
							<span class='ml-2'>{link.label}</span>
						</p>
					</li>
				))}
			</ul>
		</SimpleLayout>
	)
})

export const head: DocumentHead = {
	title: PROJECTS.title,
	meta: [
		{
			property: 'og:description',
			content: PROJECTS.description,
		},
		{
			property: 'og:image',
			content: `/favicons/android-chrome-512x512.png`,
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
			property: 'og:site_name',
			content: SITE.title,
		},
		{
			property: 'og:title',
			content: `${PROJECTS.title} | ${SITE.title}`,
		},
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:url',
			content: `${SITE.origin}/projects`,
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
	],
}
