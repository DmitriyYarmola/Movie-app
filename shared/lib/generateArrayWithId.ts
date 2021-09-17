import { generateId } from './generateId'

export const generateArrayWithId = (count: number): any[] => {
	let array = []

	for (let i = 0; i < count; i++) {
		array.push(generateId())
	}
	return array
}
