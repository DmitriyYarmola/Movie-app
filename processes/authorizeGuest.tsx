import { FC, useEffect } from 'react'
import { customLocalStorage } from '@/shared/lib'
import { createGust } from '../entities'

export const AuthorizeGuest: FC = ({ children }) => {
	useEffect(() => {
		const guestSessionId = customLocalStorage.get('guest_session_id')
		if (!guestSessionId) {
			;(async function () {
				await createGust()
			})()
		}
	}, [])

	return <>{children}</>
}
