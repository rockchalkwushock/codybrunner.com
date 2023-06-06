import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import { Container } from '~/components/container'
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	TelegramIcon,
	TwitterIcon,
} from '~/components/icons'
import { SocialLink } from '~/components/social-link'
import { SITE } from '~/config.mjs'

export default component$(() => {
	return (
		<>
			<Container class='mt-9'>
				<div class='max-w-2xl'>
					<h1 class='text-4xl text-slate-900 font-bold tracking-tight dark:text-slate-100 sm:text-5xl'>
						Software developer, veteran, and smoker of the meats.
					</h1>
					<p class='mt-6 text-slate-600 dark:text-slate-400 text-base'>
						I’m Cody, an American software developer and entrepreneur based in
						Colombia. I'm a Senior Frontend Developer at Bitcoin IRA where we
						are building the world's first and most trusted crypto IRA platform.
					</p>
					<div class='mt-6 flex gap-3'>
						<SocialLink
							aria-label='Follow me on GitHub'
							href={SITE.socials.github}
						>
							<GitHubIcon />
						</SocialLink>
						<SocialLink
							aria-label='Follow me on Instagram'
							href={SITE.socials.instagram}
						>
							<InstagramIcon />
						</SocialLink>
						<SocialLink
							aria-label='Follow me on LinkedIn'
							href={SITE.socials.linkedin}
						>
							<LinkedInIcon />
						</SocialLink>
						<SocialLink
							aria-label='Follow me on Telegram'
							href={SITE.socials.telegram}
						>
							<TelegramIcon />
						</SocialLink>
						<SocialLink
							aria-label='Follow me on Twitter'
							href={SITE.socials.twitter}
						>
							<TwitterIcon />
						</SocialLink>
					</div>
				</div>
			</Container>
			<Container class='mt-24 md:mt-28'>
				<div class='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
					{/* Left Column */}
					<div class='flex flex-col gap-16'>
						{/* Featured or Recent Posts */}
					</div>
					{/* Right Column */}
					<div class='space-y-10 lg:pl-16 xl:pl-24'>
						{/* Newsletter */}
						{/* Resume */}
					</div>
				</div>
			</Container>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
}
