import { component$ } from '@builder.io/qwik'

import { SITE } from '~/config.mjs'

export const BuyMeACoffee = component$(() => {
	return (
		<a
			aria-label="Link to Cody Brunner's Buy Me A Coffee."
			class='bg-accent-500 rounded-lg border flex items-center justify-center p-2.5 shadow-md shadow-primary-800/5 transition hover:bg-accent-600 dark:border-primary-700 dark:hover:bg-accent-700'
			href={SITE.socials.coffee}
			target='_blank'
		>
			<img
				alt='Buy Me A Coffee'
				height={60}
				src='/icons/bmc-full-logo.svg'
				width={217}
			/>
		</a>
	)
})
