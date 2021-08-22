import { createEffect, createEvent } from 'effector-next'
import { generateGuestToken } from '@/shared/api'
import { customLocalStorage } from '@/shared/lib'
import { GuestResponse } from '../interfaces'

export const pageLoaded = createEvent<any>()
const request = createEffect({
	async handler() {
		return await generateGuestToken<GuestResponse>()
	},
})

request.done.watch(({ result }) => {
	customLocalStorage.set('guest_session_id', result.guest_session_id)
})

export { request as createGust }
