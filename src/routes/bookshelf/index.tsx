import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'

import { Section } from '~/components/section'
import { SimpleLayout } from '~/components/simple-layout'
import { BOOKSHELF } from '~/config.mjs'

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
									<img
										alt={`${title} by ${authors.join(', ')}`}
										class='object-cover w-full h-full'
										height={40}
										src={image}
										width={32}
									/>
								</a>
								<h3 class='relative z-10 mt-2 text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100'>
									<a
										class='relative z-10 text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100'
										href={url}
										target='_blank'
										rel='noopener noreferrer'
									>
										{title}
									</a>
								</h3>
								<p class='relative z-10 mt-2 text-sm text-slate-600 dark:text-slate-400'>
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
								class='group p-2 transition ease-in-out duration-300 hover:bg-slate-100 hover:shadow-md rounded-md dark:hover:bg-slate-700/40'
								key={`fiction-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-slate-800 dark:text-slate-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100 transition ease-in-out duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'>
										{title}
									</h3>
									<p class='text-sm text-slate-600 dark:text-slate-400'>
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
								class='group p-2 transition ease-in-out duration-300 hover:bg-slate-100 hover:shadow-md rounded-md dark:hover:bg-slate-700/40'
								key={`finance-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-slate-800 dark:text-slate-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100 transition ease-in-out duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'>
										{title}
									</h3>
									<p class='text-sm text-slate-600 dark:text-slate-400'>
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
								class='group p-2 transition ease-in-out duration-300 hover:bg-slate-100 hover:shadow-md rounded-md dark:hover:bg-slate-700/40'
								key={`marriage-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-slate-800 dark:text-slate-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100 transition ease-in-out duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'>
										{title}
									</h3>
									<p class='text-sm text-slate-600 dark:text-slate-400'>
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
								class='group p-2 transition ease-in-out duration-300 hover:bg-slate-100 hover:shadow-md rounded-md dark:hover:bg-slate-700/40'
								key={`self-help-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-slate-800 dark:text-slate-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100 transition ease-in-out duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'>
										{title}
									</h3>
									<p class='text-sm text-slate-600 dark:text-slate-400'>
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
								class='group p-2 transition ease-in-out duration-300 hover:bg-slate-100 hover:shadow-md rounded-md dark:hover:bg-slate-700/40'
								key={`technology-${i}`}
							>
								<Link
									class='text-base flex flex-col space-y-1 tracking-tight text-slate-800 dark:text-slate-100'
									href={url}
								>
									<h3 class='text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100 transition ease-in-out duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'>
										{title}
									</h3>
									<p class='text-sm text-slate-600 dark:text-slate-400'>
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
	title: 'Bookshelf',
	meta: [
		{
			name: 'description',
			content: BOOKSHELF.description,
		},
		{
			name: 'og:description',
			content: BOOKSHELF.description,
		},
		{
			name: 'og:title',
			content: 'Bookshelf | codybrunner.com',
		},
	],
	links: [
		{
			rel: 'canonical',
			href: 'https://codybrunner.com/bookshelf',
		},
	],
}
