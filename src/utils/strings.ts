type Format = 'short' | 'medium' | 'long'

const formatMap: Record<Format, Intl.DateTimeFormatOptions> = {
	short: { day: '2-digit', month: '2-digit', year: 'numeric' },
	medium: { day: 'numeric', month: 'short', year: 'numeric' },
	long: { day: 'numeric', month: 'long', year: 'numeric' },
}

export function formatDate(date: Date, format?: Format): string {
	const { locale } = new Intl.DateTimeFormat().resolvedOptions()
	return new Intl.DateTimeFormat(locale ?? 'en-US', {
		...formatMap[format ?? 'medium'],
		timeZone: 'UTC',
	}).format(date)
}

export function extractSlugFromPath(path: string): string {
	const regex = /.*\(mdx\)\/(.*\/)index\.mdx$/
	const match = path.replace(regex, '$1')

	if (match === path) {
		throw new Error('The path does not match the expected format')
	}

	return match.endsWith('/') ? match.slice(0, -1) : match
}
