import { component$, Slot } from '@builder.io/qwik'

export const Wrapper = component$(() => {
	return (
		<>
			<div class='fixed inset-0 flex justify-center sm:px-8'>
				<div class='flex w-full max-w-7xl lg:px-8'>
					<div class='w-full bg-white ring-slate-100 dark:bg-slate-900 dark:ring-slate-300/20 ring-1' />
				</div>
			</div>
			<div class='relative'>
				<Slot />
			</div>
		</>
	)
})
