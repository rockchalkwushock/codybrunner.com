import { component$ } from '@builder.io/qwik'
import { Image } from '@unpic/qwik'

interface Props {
	company: string
	end: Date | { date: Date; label: string }
	logo: string
	start: Date
	title: string
}

export const ResumeItem = component$<Props>(
	({ company, end, logo, start, title }) => {
		return (
			<>
				<div class='relative shadow-primary-800/5 ring-primary-900/5 dark:border dark:border-primary-700/50 dark:bg-white mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 dark:ring-0'>
					<Image
						alt={`Logo for ${company}`}
						class='rounded-full'
						height={40}
						src={logo}
						width={40}
					/>
				</div>
				<dl class='flex flex-auto flex-wrap gap-x-2'>
					<dt class='sr-only'>Company</dt>
					<dd class='w-full text-primary-900 dark:text-primary-100 flex-none text-sm font-medium'>
						{company}
					</dd>
					<dt class='sr-only'>Role</dt>
					<dd class='text-xs text-primary-500 dark:text-primary-400'>
						{title}
					</dd>
					<dt class='sr-only'>Date</dt>
					<dd
						aria-label={`${start.getFullYear().toString()} until ${
							end instanceof Date ? end.getFullYear().toString() : end.label
						}`}
						class='ml-auto text-xs text-primary-400 dark:text-primary-500'
					>
						<time dateTime={start.getFullYear().toString()}>
							{start.getFullYear()}
						</time>
						<span aria-hidden='true'>-</span>
						<time
							dateTime={
								end instanceof Date
									? end.getFullYear().toString()
									: end.date.getFullYear().toString()
							}
						>
							{end instanceof Date ? end.getFullYear() : end.label}
						</time>
					</dd>
				</dl>
			</>
		)
	}
)
