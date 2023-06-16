import { $, component$, useStore } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'
import { MoonIcon, SunIcon } from './icons'

type Theme = 'dark' | 'light'

// toggleTheme runs on the server only.
const toggleTheme = server$(function toggleTheme() {
	const theme = this.cookie.get('theme')

	if (!theme) return { theme: undefined }

	if (theme.value === 'dark') {
		this.cookie.set('theme', 'light')
		return { theme: 'light' }
	} else {
		this.cookie.set('theme', 'dark')
		return { theme: 'dark' }
	}
})

// Determine the current theme from the browser cookie.
function getTheme() {
	if (typeof window === 'undefined') return undefined
	return window.document.cookie.substring(6) as Theme
}

export const ThemeToggle = component$(() => {
	const store = useStore({
		theme: getTheme(),
	})

	const toggleTheme$ = $(async () => {
		// Get back what the server has determined the theme to be.
		const { theme } = await toggleTheme()
		if (store.theme === 'dark') {
			document.documentElement.classList.remove('dark')
			store.theme = theme as Theme
		} else {
			document.documentElement.classList.add('dark')
			store.theme = theme as Theme
		}
	})

	return (
		<button
			aria-label={`Toggle ${store.theme === 'dark' ? 'Light' : 'Dark'} Mode`}
			class='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur transition dark:bg-primary-800/90 dark:ring-white/10 dark:hover:ring-white/20'
			onClick$={toggleTheme$}
			type='button'
		>
			<SunIcon />
			<MoonIcon />
		</button>
	)
})
