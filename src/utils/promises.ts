export async function asyncMap<T, U>(
	array: T[],
	callback: (item: T, index: number, array: T[]) => Promise<U>
): Promise<U[]> {
	return await Promise.all(array.map(callback))
}
