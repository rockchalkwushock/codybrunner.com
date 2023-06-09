import { component$ } from '@builder.io/qwik'
import { Link, useContent, useLocation } from '@builder.io/qwik-city'

import { Container } from './container'
import { NavLink } from './nav-link'
import { cx } from '~/utils/cx'
import { isMenuItemVisible } from '~/utils/filters'
import { ThemeToggle } from './theme-toggle'
import { MobileNav } from './mobile-nav'

export const Header = component$(() => {
	const { menu } = useContent()
	const { url } = useLocation()

	return (
		<header
			class='pointer-events-none relative z-50 flex flex-col'
			style={{
				height: 'var(--header-height)',
				marginBottom: 'var(--header-mb)',
			}}
		>
			<div
				class='top-0 z-10 h-16 pt-6'
				style={{ position: 'var(--header-position)' }}
			>
				<Container
					class='top-[var(--header-top,theme(spacing.6))] w-full'
					style={{ position: 'var(--header-inner-position)' }}
				>
					<div class='relative flex gap-4'>
						<div class='flex flex-1'>
							{url.pathname !== '/' && (
								<div
									class={cx(
										'h-10 w-10 rounded-full bg-white/90 p-0.5 flex items-center justify-center shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-800/90 dark:ring-white/10'
									)}
								>
									<Link
										aria-label='Home'
										class='flex h-10 w-10 items-center justify-center pointer-events-auto'
										href='/'
									>
										<img
											alt='Logo'
											class='h-8 w-8 rounded-full bg-slate-100 object-cover dark:bg-slate-800'
											height={32}
											src='/icons/logo.svg'
											width={32}
										/>
									</Link>
								</div>
							)}
						</div>
						<div class='flex flex-1 justify-end md:justify-center'>
							{/* Mobile Navigation */}
							<MobileNav />
							{/* Desktop Navigation */}
							<nav class='pointer-events-auto hidden md:block'>
								<ul
									class='bg-white/90
                  ring-slate-900/5 flex rounded-full px-3 text-sm font-medium shadow-lg shadow-slate-800/5 ring-1 backdrop-blur dark:bg-slate-800/90 dark:ring-white/10'
								>
									{menu && menu.items
										? menu.items
												.filter(isMenuItemVisible)
												.map(({ href, text }) => (
													<li key={`header-link-${text}`}>
														<NavLink
															class={cx(
																'relative block px-3 py-2 transition',
																href === url.pathname
																	? 'text-cyan-500 dark:text-cyan-400'
																	: 'hover:text-cyan-500 dark:hover:text-cyan-400'
															)}
															href={href}
														>
															{text}
															{url.pathname === href && (
																<span class='absolute bg-gradient-to-r from-cyan-500 via-cyan-500/40 to-cyan-500 dark:from-cyan-400 dark:via-cyan-400/40 dark:to-cyan-400 inset-x-1 -bottom-px h-px' />
															)}
														</NavLink>
													</li>
												))
										: null}
								</ul>
							</nav>
						</div>
						<div class='flex justify-end md:flex-1'>
							<div class='pointer-events-auto'>
								<ThemeToggle />
							</div>
						</div>
					</div>
				</Container>
			</div>
		</header>
	)
})
