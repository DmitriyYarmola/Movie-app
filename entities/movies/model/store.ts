import { createStore } from 'effector'
import { savePopularMovies } from './events'

export const popularMovies = createStore<any[]>([])
export const topRatedMovies = createStore([])
export const nowPlayingMovies = createStore([])
export const latestMovies = createStore([])

popularMovies.on(savePopularMovies, (_, payload) => payload)
