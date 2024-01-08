import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function enableTranslationSupport(): boolean {
	return import.meta.env.VITE_ENABLE_I18N === 'true'
}

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
