import { createStore } from 'effector-next'
import { Guest } from '../interfaces'
import { changeGuestSessionId } from './events'

export const $guest = createStore<Guest>({ sessionId: null })

$guest.on(changeGuestSessionId, (guest, result) => ({ ...guest, sessionId: result }))
