import { component$ } from '@builder.io/qwik'

import { InnerContainer, OuterContainer } from './container'
import { NavLink } from './nav-link'
import { useMenu } from '~/hooks/use-menu'
import { cx } from '~/utils/cx'

import { SITE } from '../config.mjs'

export const Footer = component$(() => {
	const { options, url } = useMenu()
	return (
		<footer class='mt-32'>
			<OuterContainer>
				<div class='border-t border-slate-200 dark:border-slate-700/40 pb-16 pt-10'>
					<InnerContainer>
						<div class='flex flex-col items-center justify-between gap-6 sm:flex-row'>
							<div class='font-medium grid grid-cols-3 grid-rows-2 gap-4 place-items-center text-sm md:flex md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-1'>
								{options.value.map(({ href, text }) => (
									<NavLink
										class={cx(
											href === url
												? 'text-cyan-500 dark:text-cyan-400'
												: 'hover:text-cyan-500 dark:hover:text-cyan-400'
										)}
										href={href}
										key={`footer-link-${text}`}
									>
										{text}
									</NavLink>
								))}
							</div>
							<div class='flex flex-col items-center space-y-1 sm:items-end lg:flex-row lg:space-x-2 lg:space-y-0'>
								{SITE.copyright.map((str, i) => (
									<p
										class='text-center text-sm sm:text-right text-slate-400 dark:text-slate-500'
										key={`copyright--${i}`}
									>
										{str}
									</p>
								))}
							</div>
						</div>
					</InnerContainer>
				</div>
			</OuterContainer>
		</footer>
	)
})
