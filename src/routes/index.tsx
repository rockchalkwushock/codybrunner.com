import { component$, useStore, useTask$ } from '@builder.io/qwik'
import { type DocumentHead, useNavigate } from '@builder.io/qwik-city'
import { isServer } from '@builder.io/qwik/build'

import { Container } from '~/components/container'
import {
	ArrowDown,
	BriefCaseIcon,
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	MailIcon,
	TelegramIcon,
	TwitterIcon,
} from '~/components/icons'
import { ResumeItem } from '~/components/resume-item'
import { SocialLink } from '~/components/social-link'
import { HOME, SITE } from '~/config.mjs'
import { cx } from '~/utils/cx'

import { jobs } from './jobs'

export default component$(() => {
	const navigate = useNavigate()
	const store = useStore<{ posts?: never[] }>({ posts: undefined })

	useTask$(() => {
		if (isServer) {
			// TODO: Add fetchPosts() in the future.
			store.posts = []
		}
	})

	return (
		<>
			<Container class='mt-9'>
				<div class='grid grid-cols-1 place-items-center gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
					<div class='max-w-2xl'>
						<h1 class='text-4xl text-slate-900 font-bold tracking-tight dark:text-slate-100 sm:text-5xl'>
							{HOME.title}
						</h1>
						<p class='mt-6 text-slate-600 dark:text-slate-400 text-base'>
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
							<img
								alt='Image of Cody Brunner'
								class='aspect-square rotate-3 rounded-2xl bg-slate-100 object-cover dark:bg-slate-800'
								height={300}
								src='/images/cody-brunner.jpg'
								width={263}
							/>
						</div>
					</div>
				</div>
			</Container>
			<Container class='mt-10'>
				<div class='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
					{/* Left Column */}
					<ul
						class={cx(
							'flex flex-col gap-16',
							(typeof store.posts === 'undefined' ||
								store.posts.length === 0) &&
								'hidden'
						)}
						role='list'
					>
						{/* Featured or Recent Posts */}
					</ul>
					{/* Right Column */}
					<div
						class={cx(
							'space-y-10',
							typeof store.posts === 'undefined' || store.posts.length === 0
								? ''
								: ' lg:pl-16 xl:pl-24'
						)}
					>
						{/* Newsletter */}
						<form
							class={cx(
								typeof store.posts === 'undefined' || store.posts.length === 0
									? 'hidden'
									: 'rounded-2xl border-slate-100 dark:border-slate-700/40 border p-6'
							)}
						>
							<h2 class='flex text-sm text-slate-900 dark:text-slate-100 font-semibold'>
								<MailIcon />
								<span class='ml-3'>Stay up to date</span>
							</h2>
							<p class='mt-2 text-slate-600 dark:text-slate-400  text-sm'>
								Get notified when I publish something new, and unsubscribe at
								any time.
							</p>
							<div class='mt-6 flex'>
								<input
									aria-label='Email address'
									class='border-slate-900/10 bg-white shadow-slate-800/5 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-700/[0.15] dark:text-slate-200 dark:placeholder:text-slate-500 min-w-0 flex-auto appearance-none rounded-md border px-3 py-[calc(theme(spacing.2)-1px)] shadow-md focus:outline-none focus:border-cyan-500 focus:ring-cyan-500/10
									dark:focus:border-cyan-400 dark:focus:ring-cyan-400/10 focus:ring-4 sm:text-sm'
									placeholder='Email address'
									required
									type='email'
								/>
							</div>
						</form>
						{/* Resume */}
						<div class='rounded-2xl border p-6 border-slate-100 dark:border-slate-700/40'>
							<h2 class='flex text-sm text-slate-900 dark:text-slate-100 font-semibold'>
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
								class='bg-slate-50 text-slate-900 hover:bg-slate-100 active:bg-slate-100 active:text-slate-900/60 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:active:bg-slate-800/50 dark:active:text-slate-50/70  inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-medium group mt-6 w-full'
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
			name: 'og:description',
			content: SITE.description,
		},
		{
			name: 'og:title',
			content: `Home | ${SITE.title}`,
		},
	],
}
