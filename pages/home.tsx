import React from 'react'

import { withStart } from 'effector-next'
import { useStore } from 'effector-react'
import { $guest } from '@entities/guest'
import { Input } from '@shared/ui'
import { pageLoaded } from 'entities/guest'
import { AuthorizeGuest } from '../processes'

const enhance = withStart(pageLoaded)

function Home() {
	const guest = useStore($guest)
	console.log('guest', guest)
	return <AuthorizeGuest>Home page</AuthorizeGuest>
}

export default enhance(Home)
