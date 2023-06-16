import { component$, Slot } from '@builder.io/qwik'

import { Container } from './container'

interface Props {
	readonly intro: string
	readonly title: string
}

export const SimpleLayout = component$<Props>(({ intro, title }) => {
	return (
		<Container class='mt-16 sm:mt-32'>
			<header class='max-w-2xl'>
				<h1 class='text-4xl font-display font-bold tracking-tight text-primary-800 dark:text-primary-100 sm:text-5xl'>
					{title}
				</h1>
				<p class='mt-6 text-base text-primary-600 dark:text-primary-400'>
					{intro}
				</p>
			</header>
			<div class='mt-16 sm:mt-20'>
				<Slot />
			</div>
		</Container>
	)
})
