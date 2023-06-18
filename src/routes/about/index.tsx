import { component$ } from '@builder.io/qwik'
import { type DocumentHead, Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik'

import { Container } from '~/components/container'
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	MailIcon,
	TelegramIcon,
	TwitterIcon,
} from '~/components/icons'
import { SocialLink } from '~/components/social-link'
import { ABOUT, SITE } from '~/config.mjs'

export default component$(() => {
	return (
		<Container class='mt-16 sm:mt-32'>
			<div class='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
				{/* Image Block */}
				<div class='flex items-center justify-center lg:pl-20 lg:items-start lg:justify-start'>
					<div class='max-w-xs px-2.5 lg:max-w-none'>
						<Image
							// TODO: In the future look at blur effects and placeholders
							alt='Image of Cody Brunner'
							class='aspect-auto rotate-3 rounded-2xl bg-primary-100 object-cover shadow-primary-800/30 shadow-2xl dark:shadow-primary-100/20 dark:bg-primary-800'
							fetchpriority='high'
							height={300}
							layout='fixed'
							priority
							src='/images/cody-brunner-black-and-white.jpg'
							width={300}
						/>
					</div>
				</div>
				{/* Content Block */}
				<div class='lg:order-first lg:row-span-2'>
					<h1 class='text-4xl font-display font-bold tracking-tight text-primary-800 dark:text-primary-100 sm:text-5xl'>
						{ABOUT.title}
					</h1>
					<div class='mt-6 space-y-7 text-base text-primary-600 dark:text-primary-400'>
						{ABOUT.content.map((paragraph, i) => (
							<p key={`about-content-${i}`}>{paragraph}</p>
						))}
						<p>
							As of right now, I am working as a Senior Frontend Developer at{' '}
							<Link
								aria-aria-label='Link to Bitcoin IRA.'
								class='text-secondary-accent-500 dark:text-secondary-accent-400'
								href='https://bitcoinira.com'
								rel='noopener noreferrer'
								target='_blank'
							>
								Bitcoin IRA
							</Link>
							, where we are working on world's first and most trusted crypto
							investment platform. I am also the owner and operator of{' '}
							<Link
								aria-label='Link to JokinglyBadTech LinkedIn Page.'
								class='text-secondary-accent-500 dark:text-secondary-accent-400'
								href='https://www.linkedin.com/company/jokinglybadtech/'
								rel='noopener noreferrer'
								target='_blank'
							>
								JokinglyBadTech LLC
							</Link>
							, a small software development company that specializes in
							building custom web applications for small businesses.
						</p>
						<hr class='border-primary-200 dark:border-primary-700/40' />
						<p>{ABOUT.history}</p>
					</div>
				</div>
				{/* Content Block */}
				<div class='lg:pl-20'>
					<ul class='grid gap-4' role='list'>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on GitHub'
								class='group flex space-x-2 text-primary-800 transition hover:text-accent-500 dark:text-primary-200 dark:hover:text-accent-500'
								href={SITE.socials.github}
							>
								<GitHubIcon class='h-6 w-6 flex-none fill-primary-500 transition group-hover:fill-accent-500 dark:fill-primary-200' />
								<span>Follow on GitHub</span>
							</SocialLink>
						</li>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on Instagram'
								class='group flex space-x-2 text-primary-800 transition hover:text-accent-500 dark:text-primary-200 dark:hover:text-accent-500'
								href={SITE.socials.instagram}
							>
								<InstagramIcon class='h-6 w-6 flex-none fill-primary-500 transition group-hover:fill-accent-500 dark:fill-primary-200' />
								<span>Follow on Instagram</span>
							</SocialLink>
						</li>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on LinkedIn'
								class='group flex space-x-2 text-primary-800 transition hover:text-accent-500 dark:text-primary-200 dark:hover:text-accent-500'
								href={SITE.socials.linkedin}
							>
								<LinkedInIcon class='h-6 w-6 flex-none fill-primary-500 transition group-hover:fill-accent-500 dark:fill-primary-200' />
								<span>Follow on LinkedIn</span>
							</SocialLink>
						</li>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on Telegram'
								class='group flex space-x-2 text-primary-800 transition hover:text-accent-500 dark:text-primary-200 dark:hover:text-accent-500'
								href={SITE.socials.telegram}
							>
								<TelegramIcon class='h-6 w-6 flex-none fill-primary-500 transition group-hover:fill-accent-500 dark:fill-primary-200' />
								<span>Follow on Telegram</span>
							</SocialLink>
						</li>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on Twitter'
								class='group flex space-x-2 text-primary-800 transition hover:text-accent-500 dark:text-primary-200 dark:hover:text-accent-500'
								href={SITE.socials.twitter}
							>
								<TwitterIcon class='h-6 w-6 flex-none fill-primary-500 transition group-hover:fill-accent-500 dark:fill-primary-200' />
								<span>Follow on Twitter</span>
							</SocialLink>
						</li>

						<li class='flex mt-8 border-t border-primary-100 pt-8 dark:border-primary-700/40'>
							<SocialLink
								aria-label='Email me directly'
								class='group flex space-x-2 text-primary-800 transition hover:text-accent-500 dark:text-primary-200 dark:hover:text-accent-500'
								href={`mailto:${SITE.email}`}
							>
								<MailIcon class='h-6 w-6 flex-none fill-primary-500 dark:fill-primary-200 group-hover:fill-accent-500 group-hover:stroke-accent-600' />
								<span>{SITE.email}</span>
							</SocialLink>
						</li>
					</ul>
				</div>
			</div>
		</Container>
	)
})

export const head: DocumentHead = {
	title: 'About',
	meta: [
		{
			property: 'og:description',
			content: ABOUT.description,
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
			content: `About | ${SITE.title}`,
		},
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:url',
			content: `${SITE.origin}/about`,
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
	],
}
