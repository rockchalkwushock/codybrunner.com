import { component$ } from '@builder.io/qwik'

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
				<div class='relative shadow-slate-800/5 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-white mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 dark:ring-0'>
					<img
						alt={`Logo for ${company}`}
						class='rounded-full'
						height={40}
						src={logo}
						width={40}
					/>
				</div>
				<dl class='flex flex-auto flex-wrap gap-x-2'>
					<dt class='sr-only'>Company</dt>
					<dd class='w-full text-slate-900 dark:text-slate-100 flex-none text-sm font-medium'>
						{company}
					</dd>
					<dt class='sr-only'>Role</dt>
					<dd class='text-xs text-slate-500 dark:text-slate-400'>{title}</dd>
					<dt class='sr-only'>Date</dt>
					<dd
						aria-label={`${start.getFullYear().toString()} until ${
							end instanceof Date ? end.getFullYear().toString() : end.label
						}`}
						class='ml-auto text-xs text-slate-400 dark:text-slate-500'
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
