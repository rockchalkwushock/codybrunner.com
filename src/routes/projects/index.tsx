import { component$ } from '@builder.io/qwik'
import { type DocumentHead, Link } from '@builder.io/qwik-city'

import { LinkIcon } from '~/components/icons'
import { SimpleLayout } from '~/components/simple-layout'
import { PROJECTS } from '~/config.mjs'

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
						<div class='relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0'>
							<img
								alt={`Logo for ${name}`}
								class='h-9 rounded-full w-9'
								height={36}
								src={logo}
								width={36}
							/>
						</div>
						<h2 class='mt-6 text-base font-semibold text-slate-800 dark:text-slate-100'>
							<div class='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-800/50 sm:-inset-x-6 sm:rounded-2xl' />
							<Link href={link.href}>
								<span class='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl' />
								<span class='relative z-10'>{name}</span>
							</Link>
						</h2>
						<p class='relative z-10 mt-2 text-sm text-slate-600 dark:text-slate-400'>
							{description}
						</p>
						<p class='relative z-10 mt-6 flex text-sm font-medium text-slate-400 transition group-hover:text-cyan-500 dark:text-slate-200'>
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
	title: 'Projects',
	meta: [
		{
			name: 'description',
			content: PROJECTS.description,
		},
		{
			name: 'og:description',
			content: PROJECTS.description,
		},
		{
			name: 'og:title',
			content: 'Projects | codybrunner.com',
		},
	],
	links: [
		{
			rel: 'canonical',
			href: 'https://codybrunner.com/projects',
		},
	],
}
