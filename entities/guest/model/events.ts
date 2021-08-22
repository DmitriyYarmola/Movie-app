import { createEvent } from 'effector-next'

export const changeGuestSessionId = createEvent<string>()
export const trackGuestSessionId = createEvent()
