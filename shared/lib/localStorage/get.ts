export const get = (key: string) => {
	const item = localStorage.getItem(key)
	if (item) {
		return item
	}
	return null
}
