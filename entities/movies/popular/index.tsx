import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { MovieCard } from '@entities/movies'
import { calculateStarCountByRate } from '@shared/lib'
import { Slider } from '@shared/ui'
import { getPopularMovies, $popularMovies } from '../model'
import { styles } from './styles.css'
export const ListOfPopularMovies = () => {
	const movies = useStore($popularMovies)

	useEffect(() => {
		getPopularMovies('popular')
	}, [])

	const options = {
		slidesToShow: 3,
		slidesToScroll: 3,
	}

	return movies.length > 0 ? (
		<div className={styles}>
			<Slider options={options}>
				{movies.map(({ id, title, poster_path, vote_average }) => {
					return (
						<MovieCard
							to={''}
							key={id}
							title={title}
							posterPath={poster_path}
							averageVote={calculateStarCountByRate(vote_average)}
						/>
					)
				})}
			</Slider>
		</div>
	) : (
		<></>
	)
}
