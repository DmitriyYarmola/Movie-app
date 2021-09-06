import { createEffect } from 'effector'
import { api } from '@shared/api'

export const getMovies = createEffect(async (type: string) => {
	const data = await api.movies.getByType<{ results: any[] }>(1, type)
	return data.results
})
