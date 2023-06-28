import { component$ } from '@builder.io/qwik'

import { PostLink } from './post-link'
import { cx } from '~/utils/cx'
import type { PostSchema as Post } from '~/utils/posts'
import { formatDate } from '~/utils/strings'

export const PostItem = component$<Post>(
	({ createdAt, description, draft, publishedAt, slug, title, updatedAt }) => {
		return (
			<article class='md:grid md:grid-cols-4 md:items-baseline'>
				<div class='group relative flex flex-col items-start md:col-span-3'>
					<h2 class='text-base font-semibold tracking-tight text-primary-800 dark:text-primary-100'>
						<div class='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-primary-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-primary-800/50 sm:-inset-x-6 sm:rounded-2xl' />
						<PostLink aria-label={`Link to ${title} post`} href={slug}>
							<span class='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl' />
							<span class='relative z-10'>{title}</span>
						</PostLink>
					</h2>
					<time
						class={cx(
							'relative z-10 order-first mb-3 flex items-center text-sm text-primary-400 dark:text-primary-500',
							'pl-3.5',
							'md:hidden'
						)}
						dateTime={createdAt.getTime().toString()}
					>
						<span
							aria-hidden='true'
							class='absolute inset-y-0 left-0 flex items-center'
						>
							<span class='h-4 w-0.5 rounded-full bg-primary-200 dark:bg-primary-500' />
						</span>
						{formatDate(createdAt)}
						{draft && (
							<span class='bg-[#ef4444] font-medium ml-2 text-white text-xs px-1 rounded-full'>
								draft
							</span>
						)}
					</time>
					<p class='relative z-10 mt-2 text-sm text-primary-600 dark:text-primary-400'>
						{description}
					</p>
					<div
						aria-hidden='true'
						class='relative z-10 mt-4 flex items-center text-sm font-medium text-accent-500'
					>
						<span>Read article</span>
						<svg
							aria-hidden='true'
							class='fill-none ml-1 h-4 w-4 stroke-current'
							view-box='0 0 16 16'
						>
							<path
								d='M6.75 5.75 9.25 8l-2.5 2.25'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='1.5'
							/>
						</svg>
					</div>
				</div>
				<time
					class={cx(
						'relative z-10 order-first mb-3 flex items-center text-sm text-primary-400 dark:text-primary-500',
						'mt-1 hidden md:block'
					)}
					dateTime={String(
						updatedAt?.getTime() ??
							publishedAt?.getTime() ??
							createdAt.getTime()
					)}
				>
					{formatDate(updatedAt ?? publishedAt ?? createdAt)}
					{draft && (
						<span class='bg-[#ef4444] font-medium ml-2 text-white text-xs px-1 rounded-full'>
							draft
						</span>
					)}
				</time>
			</article>
		)
	}
)
