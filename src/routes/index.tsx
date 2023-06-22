import { component$ } from '@builder.io/qwik'
import { type DocumentHead, useNavigate } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik'

import { Container } from '~/components/container'
import {
	ArrowDown,
	BriefCaseIcon,
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	TelegramIcon,
	TwitterIcon,
} from '~/components/icons'
import { ResumeItem } from '~/components/resume-item'
import { SocialLink } from '~/components/social-link'

import { jobs } from '~/data/jobs'

import { HOME, SITE } from '~/config.mjs'

export default component$(() => {
	const navigate = useNavigate()
	return (
		<>
			<Container class='mt-9'>
				<div class='grid grid-cols-1 place-items-center gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
					<div class='max-w-2xl'>
						<h1 class='font-display text-4xl text-primary-900 font-bold tracking-tight dark:text-primary-100 sm:text-5xl'>
							{HOME.title}
						</h1>
						<p class='mt-6 text-primary-600 dark:text-primary-400 text-base'>
							{HOME.description}
						</p>
						<ul class='mt-6 flex gap-3' role='list'>
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
						</ul>
					</div>
					<div class='lg:pl-12'>
						<div class='max-w-xs px-2.5 lg:max-w-none'>
							<Image
								// TODO: In the future look at blur effects and placeholders
								alt='Image of Cody Brunner'
								class='aspect-square shadow-primary-800/30 shadow-2xl rotate-3 rounded-2xl bg-primary-100 object-cover dark:shadow-primary-100/20 dark:bg-primary-800'
								fetchpriority='high'
								height={300}
								layout='fixed'
								priority
								src='/images/cody-brunner.jpg'
								width={263}
							/>
						</div>
					</div>
				</div>
			</Container>
			<Container class='mt-10'>
				<div class='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:gap-y-0 lg:gap-x-20 lg:max-w-none lg:grid-cols-2'>
					{/* Left Column */}
					<div class='flex flex-col items-center justify-center order-last lg:order-first space-y-16  lg:justify-start lg:items-start lg:space-y-20'>
						<h2 class='text-3xl font-display font-bold'>
							No Posts At This Time
						</h2>
						<Image
							// TODO: In the future look at blur effects and placeholders
							alt='No Posts At This Time'
							class='max-w-xs sm:max-w-sm'
							height={400}
							src='/images/articles.svg'
							width={400}
						/>
					</div>

					{/* Right Column */}
					<div class='space-y-10'>
						{/* Resume */}
						<div class='rounded-2xl border p-6 border-primary-100 dark:border-primary-700/40'>
							<h2 class='flex text-sm text-primary-900 dark:text-primary-100 font-semibold'>
								<BriefCaseIcon />
								<span class='ml-3'>Work</span>
							</h2>
							<ol class='mt-6 space-y-4' role='list'>
								{jobs.map((entry, i) => (
									<li class='flex gap-4' key={i}>
										<ResumeItem {...entry} />
									</li>
								))}
							</ol>
							<button
								class='bg-primary-50 text-primary-900 hover:bg-primary-100 active:bg-primary-100 active:text-primary-900/60 dark:bg-primary-800/50 dark:text-primary-300 dark:hover:bg-primary-800 dark:hover:text-primary-50 dark:active:bg-primary-800/50 dark:active:text-primary-50/70  inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-medium group mt-6 w-full'
								onClick$={() => navigate('/resume.pdf')}
							>
								Download CV
								<ArrowDown />
							</button>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Home',
	meta: [
		{
			name: 'description',
			content: SITE.description,
		},
		{
			property: 'og:description',
			content: SITE.description,
		},
		{
			property: 'og:image',
			content: `/android-chrome-512x512.png`,
		},
		{
			property: 'og:image:alt',
			content: `Logo for ${SITE.title}`,
		},
		{
			property: 'og:image:height',
			content: `512`,
		},
		{
			property: 'og:image:width',
			content: `512`,
		},
		{
			property: 'og:locale',
			content: 'en_US',
		},
		{
			property: 'og:title',
			content: `Home | ${SITE.title}`,
		},
		{
			property: 'og:type',
			content: 'website',
		},
		{
			property: 'og:url',
			content: SITE.origin,
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			name: 'twitter:creator',
			content: SITE.twitter,
		},
		{
			name: 'twitter:description',
			content: SITE.description,
		},
		{
			name: 'twitter:domain',
			content: SITE.origin.replace('https://', ''),
		},
		{
			property: 'twitter:image',
			content: `/android-chrome-512x512.png`,
		},
		{
			property: 'twitter:image:alt',
			content: `Logo for ${SITE.title}`,
		},
		{
			name: 'twitter:site',
			content: SITE.twitter,
		},
		{
			name: 'twitter:title',
			content: `Home | ${SITE.title}`,
		},
		{
			name: 'twitter:url',
			content: SITE.origin,
		},
	],
}
