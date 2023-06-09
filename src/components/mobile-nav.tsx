import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik'
import { useContent, useLocation, useNavigate } from '@builder.io/qwik-city'

import { cx } from '~/utils/cx'
import { ChevronDownIcon, CloseIcon } from './icons'
import { isMenuItemVisible } from '~/utils/filters'

export const MobileNav = component$(() => {
	const navigate = useNavigate()
	const { url } = useLocation()
	const ref = useSignal<Element>()
	const isOpen = useSignal(false)
	const { menu } = useContent()
	const options = useSignal(menu?.items?.filter(isMenuItemVisible) ?? [])

	const handleClickOutside = $((event: Event) => {
		if (!ref.value?.contains(event.target as Node)) {
			isOpen.value = false
		}
	})

	const selectMenuItem = $(({ href }: { href?: string }) => {
		isOpen.value = false
		navigate(href)
	})

	const toggleMenu = $(() => (isOpen.value = !isOpen.value))

	useOnDocument('mousedown', handleClickOutside)

	return (
		<div
			class='pointer-events-auto md:hidden'
			data-menu-open={isOpen.value}
			ref={ref}
		>
			<button
				aria-expanded={isOpen.value}
				aria-haspopup='listbox'
				aria-label='Open menu'
				class='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-800/90 dark:text-slate-200 dark:ring-white/10 dark:hover:ring-white/20'
				data-menu-open={isOpen.value}
				onClick$={toggleMenu}
				type='button'
			>
				<span>Menu</span>
				<ChevronDownIcon class='ml-3 stroke-slate-500 group-hover:stroke-slate-700 dark:group-hover:stroke-slate-400' />
			</button>
			<div
				aria-hidden='true'
				class='hidden fixed inset-0 z-50 bg-slate-800/40 backdrop-blur-sm dark:bg-black/80 transition-all transform opacity-0 duration-150 ease-in-out data-[menu-open]:block data-[menu-open]:opacity-100'
				data-menu-open={isOpen.value}
			/>
			<div
				class='hidden fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-slate-900/5 transition-all transform opacity-0 scale-95 ease-in-out dark:bg-slate-900 dark:ring-slate-800 data-[menu-open]:block data-[menu-open]:opacity-100 data-[menu-open]:scale-100'
				data-menu-open={isOpen.value}
				tabIndex={-1}
			>
				<div class='flex flex-row-reverse items-center justify-between'>
					<button
						aria-label='Close menu'
						class='-m-1 p-1'
						data-menu-open={isOpen.value}
						onClick$={toggleMenu}
						tabIndex={isOpen.value ? 0 : -1}
						type='button'
					>
						<CloseIcon class='text-sm h-6 w-6 font-medium text-slate-600 dark:text-slate-400' />
					</button>
					<h2 class='text-sm font-medium text-slate-600 dark:text-slate-400'>
						Navigation
					</h2>
				</div>
				<nav class='mt-6'>
					<ul
						aria-activedescendant={
							options.value.find(v => v.href === url.pathname)?.text
						}
						class='-my-2 divide-y divide-slate-100 text-base text-slate-800 dark:divide-slate-100/5 dark:text-slate-300'
						role='listbox'
						tabIndex={-1}
					>
						{options.value.map(({ href, text }) => (
							<li
								aria-selected={href === url.pathname}
								class={cx(
									'flex py-2',
									href === url.pathname &&
										'text-cyan-500 dark:text-cyan-400 font-semibold'
								)}
								data-menu-open={isOpen.value}
								id={text}
								key={`mobile-nav-link-${text}`}
								onClick$={() => selectMenuItem({ href })}
								role='option'
								tabIndex={0}
							>
								<span class='w-full'>{text}</span>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	)
})
