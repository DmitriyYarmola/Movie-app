import { request } from '../../request'

export const generateGuestToken = <T>(): Promise<T> => request({ url: 'authentication/guest_session/new' })
