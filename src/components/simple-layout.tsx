import { component$, Slot } from '@builder.io/qwik'
import { Image } from '@unpic/qwik'

import { Container } from './container'

interface Props {
	readonly imageAlt: string
	readonly imageSrc: string
	readonly intro: string
	readonly title: string
}

export const SimpleLayout = component$<Props>(
	({ imageAlt, imageSrc, intro, title }) => {
		return (
			<Container class='mt-16 sm:mt-32'>
				<header class='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
					<div class=''>
						<h1 class='text-4xl font-display font-bold tracking-tight text-primary-800 dark:text-primary-100 sm:text-5xl'>
							{title}
						</h1>
						<p class='mt-6 text-base text-primary-600 dark:text-primary-400'>
							{intro}
						</p>
					</div>
					<div class='flex items-center justify-center lg:pl-20 lg:items-start lg:justify-start'>
						<div class='max-w-xs px-2.5 lg:max-w-none'>
							<Image
								alt={imageAlt}
								class='aspect-auto rotate-3 rounded-2xl bg-primary-100 object-cover shadow-primary-800/30 shadow-2xl dark:shadow-primary-100/20 dark:bg-primary-800'
								fetchpriority='high'
								height={300}
								layout='fixed'
								priority
								src={imageSrc}
								width={300}
							/>
						</div>
					</div>
				</header>
				<div class='mt-16 sm:mt-20'>
					<Slot />
				</div>
			</Container>
		)
	}
)
