import {
	defaultLang,
	routes,
	showDefaultLang,
	translations,
	type AppRoutes,
	type Language,
} from './config'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (typeof lang === 'undefined') return defaultLang
	if (lang in translations) return lang as keyof typeof translations
	return defaultLang
}

export function getRouteFromUrl(url: URL): string | undefined {
	const pathname = new URL(url).pathname
	const parts = pathname?.split('/')
	const path = parts.pop() || parts.pop()

	if (path === undefined) {
		return undefined
	}

	const currentLang = getLangFromUrl(url)

	if (defaultLang === currentLang) {
		const route = Object.values(routes)[0]
		return typeof route !== 'undefined' ? route[path as AppRoutes] : undefined
	}

	const getKeyByValue = (
		obj: Record<string, string>,
		value: string
	): string | undefined => {
		return Object.keys(obj).find(key => obj[key] === value)
	}

	const reversedKey = getKeyByValue(routes[currentLang], path)

	if (reversedKey !== undefined) {
		return reversedKey
	}

	return undefined
}

export function useTranslations(lang: Language) {
	return function t(key: keyof (typeof translations)[typeof defaultLang]) {
		return translations[lang][key] || translations[defaultLang][key]
	}
}

export function useTranslatedPath(lang: Language) {
	return function translatePath(path: string, l: Language = lang) {
		const pathName = path.replaceAll('/', '') as AppRoutes
		const hasTranslation =
			defaultLang !== l &&
			routes[l] !== undefined &&
			routes[l][pathName] !== undefined
		const translatedPathName = hasTranslation ? `/${routes[l][pathName]}` : path
		return !showDefaultLang && l === defaultLang
			? translatedPathName
			: `/${l}${translatedPathName}`
	}
}
