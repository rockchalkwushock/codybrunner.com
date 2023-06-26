export function typedEntries<T extends Record<string, any>>(
	obj: T
): [keyof T, T[keyof T]][] {
	return Object.entries(obj) as any
}
