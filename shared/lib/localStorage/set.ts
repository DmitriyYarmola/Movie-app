export const set = (key: string, data: any) => {
	const isString = typeof data === 'string'
	localStorage.setItem(key, isString ? data : JSON.stringify(data))
}
