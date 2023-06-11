import { component$ } from '@builder.io/qwik'
import { type DocumentHead, Link } from '@builder.io/qwik-city'

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
						<img
							alt='Image of Cody Brunner'
							class='aspect-auto rotate-3 rounded-2xl bg-slate-100 object-cover dark:bg-slate-800'
							height={300}
							src='/images/bw-3.jpg'
							width={300}
						/>
					</div>
				</div>
				{/* Content Block */}
				<div class='lg:order-first lg:row-span-2'>
					<h1 class='text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl'>
						{ABOUT.title}
					</h1>
					<div class='mt-6 space-y-7 text-base text-slate-600 dark:text-slate-400'>
						{ABOUT.content.map((paragraph, i) => (
							<p key={`about-content-${i}`}>{paragraph}</p>
						))}
						<p>
							As of right now, I am working as a Senior Frontend Developer at{' '}
							<Link
								class='text-orange-500 dark:text-orange-400'
								href='https://bitcoinira.com'
							>
								Bitcoin IRA
							</Link>
							, where we are working on world's first and most trusted crypto
							investment platform. I am also the owner and operator of{' '}
							<Link
								class='text-orange-500 dark:text-orange-400'
								href='https://www.linkedin.com/company/jokinglybadtech/'
							>
								JokinglyBadTech LLC
							</Link>
							, a small software development company that specializes in
							building custom web applications for small businesses.
						</p>
						<hr class='border-slate-200 dark:border-slate-700/40' />
						<p>{ABOUT.history}</p>
					</div>
				</div>
				{/* Content Block */}
				<div class='lg:pl-20'>
					<ul class='grid gap-4' role='list'>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on GitHub'
								class='group flex space-x-2 text-slate-800 transition hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-500'
								href={SITE.socials.github}
							>
								<GitHubIcon class='h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-cyan-500 dark:fill-slate-200' />
								<span>Follow on GitHub</span>
							</SocialLink>
						</li>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on Instagram'
								class='group flex space-x-2 text-slate-800 transition hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-500'
								href={SITE.socials.instagram}
							>
								<InstagramIcon class='h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-cyan-500 dark:fill-slate-200' />
								<span>Follow on Instagram</span>
							</SocialLink>
						</li>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on LinkedIn'
								class='group flex space-x-2 text-slate-800 transition hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-500'
								href={SITE.socials.linkedin}
							>
								<LinkedInIcon class='h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-cyan-500 dark:fill-slate-200' />
								<span>Follow on LinkedIn</span>
							</SocialLink>
						</li>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on Telegram'
								class='group flex space-x-2 text-slate-800 transition hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-500'
								href={SITE.socials.telegram}
							>
								<TelegramIcon class='h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-cyan-500 dark:fill-slate-200' />
								<span>Follow on Telegram</span>
							</SocialLink>
						</li>
						<li class='flex'>
							<SocialLink
								aria-label='Follow on Twitter'
								class='group flex space-x-2 text-slate-800 transition hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-500'
								href={SITE.socials.twitter}
							>
								<TwitterIcon class='h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-cyan-500 dark:fill-slate-200' />
								<span>Follow on Twitter</span>
							</SocialLink>
						</li>

						<li class='flex mt-8 border-t border-slate-100 pt-8 dark:border-slate-700/40'>
							<SocialLink
								aria-label='Email me directly'
								class='group flex space-x-2 text-slate-800 transition hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-500'
								href={`mailto:${SITE.email}`}
							>
								{/* TODO: Fix hover state */}
								<MailIcon class='h-6 w-6 flex-none fill-slate-500 dark:fill-slate-200 group-hover:fill-cyan-500 group-hover:stroke-cyan-600' />
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
			name: 'description',
			content: ABOUT.description,
		},
		{
			name: 'og:description',
			content: ABOUT.description,
		},
		{
			name: 'og:title',
			content: 'About | codybrunner.com',
		},
	],
	links: [
		{
			rel: 'canonical',
			href: 'https://codybrunner.com/about',
		},
	],
}
