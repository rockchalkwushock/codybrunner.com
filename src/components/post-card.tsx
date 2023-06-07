import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

import { ChevronRightIcon } from './icons'
import { cx } from '~/utils/cx'
import { formatDate } from '~/utils/strings'

interface Props {
	createdAt: Date
	description: string
	draft: boolean
	publishedAt: Date
	slug: string
	title: string
	updatedAt?: Date
}

export const PostCard = component$<Props>(
	({ createdAt, description, draft, publishedAt, slug, title, updatedAt }) => {
		return (
			<article class='group relative flex flex-col items-start'>
				<h2 class='text-base dark:text-slate-100 font-semibold tracking-tight'>
					<div class='absolute bg-slate-50 dark:bg-cyan-800/50 -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl' />
					<Link href={`/blog/${slug}`}>
						<span class='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl' />
						<span class='relative z-10'>{title}</span>
					</Link>
				</h2>
				<time
					class={cx(
						'relative z-10 text-slate-400 dark:text-slate-500 order-first mb-3 flex items-center text-sm',
						true && 'pl-3.5'
					)}
					dateTime={
						draft
							? createdAt.toISOString()
							: updatedAt
							? updatedAt.toISOString()
							: publishedAt.toISOString()
					}
				>
					{true && (
						<span
							aria-hidden='true'
							class='absolute inset-y-0 left-0 flex items-center'
						>
							<span class='h-4 w-0.5 bg-cyan-600 dark:bg-cyan-500 rounded-full' />
						</span>
					)}
					{formatDate(draft ? createdAt : updatedAt || publishedAt)}
				</time>
				<p class='relative text-slate-600 dark:text-slate-400 z-10 mt-2 text-sm'>
					{description}
				</p>
				<div
					aria-hidden='true'
					class='relative z-10 mt-4 flex items-center text-cyan-600 dark:text-cyan-400 text-sm font-medium'
				>
					Read Article
					<ChevronRightIcon />
				</div>
			</article>
		)
	}
)
