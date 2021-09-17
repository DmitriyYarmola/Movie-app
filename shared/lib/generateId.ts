export const generateId = (): string => {
	const FROM = 2
	const TO = 5
	const REPRESENT_NUMERIC_VALUE = 36
	return (
		Date.now().toString(REPRESENT_NUMERIC_VALUE) + Math.random().toString(REPRESENT_NUMERIC_VALUE).slice(FROM, TO)
	).toUpperCase()
}
