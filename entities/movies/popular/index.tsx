import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { MovieCard } from '@entities/movies'
import { getPopularMovies, $popularMovies } from '../model'

export const ListOfPopularMovies = () => {
	const movies = useStore($popularMovies)

	useEffect(() => {
		getPopularMovies('popular')
	}, [])

	console.log('movies', movies)
	return (
		<div>
			{movies.map(({ id, title, poster_path, vote_average }) => {
				return <MovieCard to={''} key={id} title={title} posterPath={poster_path} averageVote={vote_average} />
			})}
		</div>
	)
}
