import { createStore } from 'effector-next'
import { Guest, GuestResponse } from '@/entities/guest/interfaces'
import { createGust } from './effect'

export const $guest = createStore<Guest>({ sessionId: null }).on(createGust.doneData, (_, result: GuestResponse) => ({
	sessionId: result.guest_session_id,
}))
