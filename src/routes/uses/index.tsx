import { component$, Slot } from '@builder.io/qwik'
import { type DocumentHead, Link } from '@builder.io/qwik-city'

import { Section } from '~/components/section'
import { SimpleLayout } from '~/components/simple-layout'
import { SITE, USES } from '~/config.mjs'

interface ToolProps {
	readonly href: string
	readonly title: string
}

const Tool = component$<ToolProps>(({ href, title }) => {
	return (
		<li class='group relative flex flex-col items-start'>
			<h3 class='text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100'>
				<div class='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-primary-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-primary-800/50 sm:-inset-x-6 sm:rounded-2xl' />
				<Link
					aria-label={`Link to ${title} purchase page.`}
					href={href}
					rel='noopener noreferrer'
					target='_blank'
				>
					<span class='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl' />
					<span class='relative z-10'>{title}</span>
				</Link>
			</h3>
			<p class='relative z-10 mt-2 text-sm text-primary-600 dark:text-primary-400'>
				<Slot />
			</p>
		</li>
	)
})

export default component$(() => {
	return (
		<SimpleLayout intro={USES.intro} title={USES.title}>
			<div class='space-y-20'>
				<Section title='Workstation'>
					<ul class='space-y-16' role='list'>
						{USES.workStation.map(({ description, href, title }, i) => (
							<Tool href={href} key={`workstation-${i}`} title={title}>
								{description}
							</Tool>
						))}
					</ul>
				</Section>
				<Section title='Development Tools'>
					<ul class='space-y-16' role='list'>
						{USES.devTools.map(({ description, href, title }, i) => (
							<Tool href={href} key={`devTools-${i}`} title={title}>
								{description}
							</Tool>
						))}
					</ul>
				</Section>
				<Section title='Productivity'>
					<ul class='space-y-16' role='list'>
						{USES.productivity.map(({ description, href, title }, i) => (
							<Tool href={href} key={`productivity-${i}`} title={title}>
								{description}
							</Tool>
						))}
					</ul>
				</Section>
			</div>
		</SimpleLayout>
	)
})

export const head: DocumentHead = {
	title: USES.title,
	meta: [
		{
			property: 'og:description',
			content: USES.description,
		},
		{
			property: 'og:image',
			content: `/favicons/android-chrome-512x512.png`,
		},
		{
			property: 'og:title',
			content: `Uses | ${SITE.title}`,
		},
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:url',
			content: `${SITE.origin}/uses`,
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			name: 'twitter:description',
			content: USES.description,
		},
		{
			property: 'twitter:domain',
			content: SITE.origin.replace('https://', ''),
		},
		{
			name: 'twitter:image',
			content: '/favicons/android-chrome-512x512.png',
		},
		{
			name: 'twitter:title',
			content: `Uses | ${SITE.title}`,
		},
		{
			property: 'twitter:url',
			content: `${SITE.origin}/uses`,
		},
	],
}
