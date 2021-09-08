import React from 'react'
import { withStart } from 'effector-next'
import { pageLoaded } from '@entities/guest'

const enhance = withStart(pageLoaded)
const MovieInformation = () => {
	return <div>Movie Page</div>
}

export default enhance(MovieInformation)
