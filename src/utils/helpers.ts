import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function enableBlog(): boolean {
	return import.meta.env.ENABLE_BLOG === 'true'
}

export function enableTranslationSupport(): boolean {
	return import.meta.env.ENABLE_I18N === 'true'
}
