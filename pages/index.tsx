import React from 'react'

import { withStart } from 'effector-next'
import { useStore } from 'effector-react'
import { $guest } from '@entities/guest'
import { ListOfPopularMovies } from '@entities/movies'
import { MainTemplate } from '@shared/ui'
import { pageLoaded } from 'entities/guest'
import { AuthorizeGuest } from '../processes'
import { Header } from '../widgets/Header'

const enhance = withStart(pageLoaded)

function Home() {
	const guest = useStore($guest)
	// console.log('guest', guest)
	return (
		<AuthorizeGuest>
			<MainTemplate header={<Header />}>
				<ListOfPopularMovies />
			</MainTemplate>
		</AuthorizeGuest>
	)
}

export default enhance(Home)
