import React, { useEffect } from 'react'
import { getPopularMovies } from '../model'

interface Props {
	items?: any[]
}
export const ListOfPopularMovies = ({ items }: Props) => {
	useEffect(() => {
		getPopularMovies('popular')
	}, [])

	return <div>popular</div>
}
