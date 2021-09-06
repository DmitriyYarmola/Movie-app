import { createEvent } from 'effector'
import { getMovies } from '@entities/movies'

export const getPopularMovies = createEvent<string>()
export const savePopularMovies = createEvent<any[]>()

getPopularMovies.watch(async (type) => {
	const data = await getMovies(type)
	savePopularMovies(data)
})
