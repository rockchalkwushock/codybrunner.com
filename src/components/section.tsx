import { component$, Slot, useId } from '@builder.io/qwik'

interface Props {
	title: string
}

export const Section = component$<Props>(({ title }) => {
	const id = useId()
	return (
		<section
			aria-labelledby={id}
			class='md:border-l md:border-slate-100 md:pl-6 md:dark:border-slate-700/40'
		>
			<div class='grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4'>
				<h2
					class='text-sm font-semibold text-slate-800 dark:text-slate-100'
					id={id}
				>
					{title}
				</h2>
				<div class='md:col-span-3'>
					<Slot />
				</div>
			</div>
		</section>
	)
})
