type Format = 'short' | 'medium' | 'long'

const formatMap: Record<Format, Intl.DateTimeFormatOptions> = {
	short: { day: '2-digit', month: '2-digit', year: 'numeric' },
	medium: { day: 'numeric', month: 'short', year: 'numeric' },
	long: { day: 'numeric', month: 'long', year: 'numeric' },
}

export function formatDate(date: Date, format?: Format): string {
	const { locale } = new Intl.DateTimeFormat().resolvedOptions()
	return new Intl.DateTimeFormat(
		locale ?? 'en-US',
		formatMap[format ?? 'medium']
	).format(date)
}
