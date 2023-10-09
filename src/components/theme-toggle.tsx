import { useEffect, useState } from 'react'

function MoonIcon(): JSX.Element {
	return (
		<svg
			aria-hidden='true'
			className='hidden h-6 w-6 fill-primary-700 stroke-primary-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-primary-400 [@media_not_(prefers-color-scheme:dark)]:fill-accent-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-accent-500'
			view-box='0 0 24 24'
		>
			<path
				d='M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
			/>
		</svg>
	)
}

function SunIcon(): JSX.Element {
	return (
		<svg
			aria-hidden='true'
			className='h-6 w-6 fill-primary-100 stroke-primary-500 transition group-hover:fill-primary-200 group-hover:stroke-primary-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-accent-50 [@media(prefers-color-scheme:dark)]:stroke-accent-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-accent-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-accent-600'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			view-box='0 0 24 24'
		>
			<path d='M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z' />
			<path
				className='fill-none'
				d='M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061'
			/>
		</svg>
	)
}

export function ThemeToggle(): JSX.Element {
	const [isMounted, setIsMounted] = useState(false)
	const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		localStorage.setItem('theme', theme)
	}, [theme])

	if (!isMounted) return <></>

	return (
		<button
			className='group pointer-events-auto rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-primary-800/5 ring-1 ring-primary-900/5 backdrop-blur transition dark:bg-primary-800/90 dark:ring-white/10 dark:hover:ring-white/20'
			onClick={handleClick}
		>
			<SunIcon />
			<MoonIcon />
		</button>
	)
}
