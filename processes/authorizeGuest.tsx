import { FC, useEffect } from 'react'
import { trackGuestSessionId } from '@entities/guest'

export const AuthorizeGuest: FC = ({ children }) => {
	useEffect(() => {
		trackGuestSessionId()
	}, [])

	return <>{children}</>
}
