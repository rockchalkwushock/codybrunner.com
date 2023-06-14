import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

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
				<div class='border-t border-primary-100 dark:border-primary-300/20 pb-16 pt-10'>
					<InnerContainer>
						<div class='flex flex-col items-center justify-between gap-6 sm:flex-row'>
							<div class='font-medium flex gap-4 place-items-center text-sm md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-1'>
								{options.value.map(({ href, text }) => (
									<NavLink
										class={cx(
											href === url
												? 'text-accent-500 dark:text-accent-400'
												: 'hover:text-accent-500 dark:hover:text-accent-400'
										)}
										href={href}
										key={`footer-link-${text}`}
									>
										{text}
									</NavLink>
								))}
							</div>
							<div class='flex flex-col items-center space-y-1 sm:items-end lg:flex-row lg:space-x-2 lg:space-y-0'>
								<p class='text-center text-sm sm:text-right text-primary-400 dark:text-primary-500'>
									{SITE.copyright[0]}
								</p>
								<Link
									aria-label='All Rights Reserved'
									class='text-center text-sm sm:text-right text-primary-400 dark:text-primary-500 hover:text-accent-500 dark:hover:text-accent-400'
									href={SITE.creativeCommons}
									rel='noopener noreferrer'
									target='_blank'
								>
									{SITE.copyright[1]}
								</Link>
							</div>
						</div>
					</InnerContainer>
				</div>
			</OuterContainer>
		</footer>
	)
})
