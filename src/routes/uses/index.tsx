import { component$, Slot } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import { Section } from '~/components/section'
import { SimpleLayout } from '~/components/simple-layout'
import { USES } from '~/config.mjs'

const Tool = component$<{ title: string }>(({ title }) => {
	return (
		<li class='group relative flex flex-col items-start'>
			<h3 class='text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100'>
				{title}
			</h3>
			<p class='relative z-10 mt-2 text-sm text-slate-600 dark:text-slate-400'>
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
						{USES.workStation.map(({ description, title }, i) => (
							<Tool key={`workstation-${i}`} title={title}>
								{description}
							</Tool>
						))}
					</ul>
				</Section>
				<Section title='Development Tools'>
					<ul class='space-y-16' role='list'>
						{USES.devTools.map(({ description, title }, i) => (
							<Tool key={`devTools-${i}`} title={title}>
								{description}
							</Tool>
						))}
					</ul>
				</Section>
				<Section title='Productivity'>
					<ul class='space-y-16' role='list'>
						{USES.productivity.map(({ description, title }, i) => (
							<Tool key={`productivity-${i}`} title={title}>
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
	title: 'Uses',
	meta: [
		{
			name: 'description',
			content: USES.description,
		},
		{
			name: 'og:title',
			content: 'Uses | codybrunner.com',
		},
		{
			name: 'og:description',
			content: USES.description,
		},
	],
	links: [
		{
			rel: 'canonical',
			href: 'https://codybrunner.com/uses',
		},
	],
}
