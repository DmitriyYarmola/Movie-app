import { createStore } from 'effector-next'
import { Movie } from '../interfaces'
import { savePopularMovies } from './events'

export const $popularMovies = createStore<Movie[]>([])
export const $topRatedMovies = createStore([])
export const $nowPlayingMovies = createStore([])
export const $latestMovies = createStore([])

$popularMovies.on(savePopularMovies, (_, payload) => payload)
