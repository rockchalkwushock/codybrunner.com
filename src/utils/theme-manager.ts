type Theme = 'light' | 'dark'

interface ThemeManagerConfig {
	readonly cookieExpiry: number
	readonly defaultTheme: Theme
	readonly domain: string
	readonly storageKey: string
}

interface WindowWithThemeManager extends Window {
	themeManager: ThemeManager
}

declare const window: WindowWithThemeManager

declare global {
	interface Window {
		themeManager: ThemeManager
	}
}

export class ThemeManager {
	private readonly config: ThemeManagerConfig
	private mediaQuery: MediaQueryList

	constructor(config?: Partial<ThemeManagerConfig>) {
		this.config = {
			defaultTheme: 'light',
			storageKey: 'codybrunner-theme',
			domain: '.codybrunner.com',
			cookieExpiry: 365,
			...config,
		}

		this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		this.initialize()
	}

	private getCookie(name: string): Theme | null {
		const value = `; ${document.cookie}`
		const parts = value.split(`; ${name}=`)
		if (parts.length === 2) {
			const cookieValue = parts.pop()?.split(';').shift()
			return this.isValidTheme(cookieValue) ? cookieValue : null
		}
		return null
	}

	private setCookie(name: string, value: Theme): void {
		const date = new Date()
		date.setTime(
			date.getTime() + this.config.cookieExpiry * 24 * 60 * 60 * 1000
		)
		const expires = `; expires=${date.toUTCString()}`

		document.cookie = [
			`${name}=${value}`,
			expires,
			`path=/`,
			`domain=${this.config.domain}`,
			'SameSite=Lax',
			'Secure',
		].join('; ')
	}

	private isValidTheme(theme: string | null | undefined): theme is Theme {
		return theme === 'light' || theme === 'dark'
	}

	private getSystemPreference(): Theme {
		return this.mediaQuery.matches ? 'dark' : 'light'
	}

	private getTheme(): Theme {
		// Priority: Cookie > localStorage > System Preference > Default
		const cookieTheme = this.getCookie(this.config.storageKey)
		const localTheme = localStorage.getItem(this.config.storageKey)

		// If cookie exists, sync localStorage and return cookie value
		if (cookieTheme) {
			if (localTheme !== cookieTheme) {
				localStorage.setItem(this.config.storageKey, cookieTheme)
			}
			return cookieTheme
		}

		// If localStorage has valid theme, set cookie and return localStorage value
		if (this.isValidTheme(localTheme)) {
			this.setCookie(this.config.storageKey, localTheme)
			return localTheme
		}

		// Fall back to system preference
		const systemTheme = this.getSystemPreference()
		this.setCookie(this.config.storageKey, systemTheme)
		localStorage.setItem(this.config.storageKey, systemTheme)
		return systemTheme
	}

	private applyTheme(theme: Theme): void {
		if (theme === 'light') {
			document.documentElement.classList.remove('dark')
		} else {
			document.documentElement.classList.add('dark')
		}
	}

	private handleSystemThemeChange = (e: MediaQueryListEvent): void => {
		const newTheme: Theme = e.matches ? 'dark' : 'light'
		this.setCookie(this.config.storageKey, newTheme)
		localStorage.setItem(this.config.storageKey, newTheme)
		this.applyTheme(newTheme)
	}

	private initialize(): void {
		const theme = this.getTheme()
		this.applyTheme(theme)

		// Listen for system theme changes
		this.mediaQuery.addEventListener('change', this.handleSystemThemeChange)
	}

	public setTheme(theme: Theme): void {
		this.setCookie(this.config.storageKey, theme)
		localStorage.setItem(this.config.storageKey, theme)
		this.applyTheme(theme)
	}

	public getCurrentTheme(): Theme {
		return this.getTheme()
	}

	public cleanup(): void {
		this.mediaQuery.removeEventListener('change', this.handleSystemThemeChange)
	}
}

// Initialize theme management
const themeManagerInstance = new ThemeManager({
	cookieExpiry: 365,
	defaultTheme: 'light',
	domain: '.codybrunner.com',
	storageKey: 'codybrunner-theme',
})

// Export for use in other scripts
// window.themeManager = themeManager

// Export class for module usage
export { themeManagerInstance, type Theme, type ThemeManagerConfig }
