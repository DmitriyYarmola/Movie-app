import { createEffect, createEvent } from 'effector-next'
import { generateGuestToken } from '@shared/api'
import { customLocalStorage } from '@shared/lib'
import { GuestResponse } from '../interfaces'
import { changeGuestSessionId, trackGuestSessionId } from './events'

export const pageLoaded = createEvent<any>()

const request = createEffect({
	async handler() {
		return await generateGuestToken<GuestResponse>()
	},
})

request.done.watch(({ result: { guest_session_id } }) => {
	customLocalStorage.set('guest_session_id', guest_session_id)
	changeGuestSessionId(guest_session_id)
})

trackGuestSessionId.watch(async () => {
	const sessionId = customLocalStorage.get('guest_session_id')
	if (sessionId) {
		changeGuestSessionId(sessionId)
		return
	}
	await request()
})
