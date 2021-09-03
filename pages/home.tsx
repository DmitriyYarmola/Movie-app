import React from 'react'

import { withStart } from 'effector-next'
import { useStore } from 'effector-react'
import { $guest } from '@/entities/guest'
import { Button } from '@/shared/ui'
import { pageLoaded } from 'entities/guest'
import { AuthorizeGuest } from '../processes'

const enhance = withStart(pageLoaded)

function Home() {
	const guest = useStore($guest)
	console.log('guest', guest)
	return (
		<AuthorizeGuest>
			<Button>Watch movie</Button>
		</AuthorizeGuest>
	)
}

export default enhance(Home)
