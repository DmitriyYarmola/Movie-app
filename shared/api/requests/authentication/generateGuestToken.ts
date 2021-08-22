import { request } from '../../requrest'

export const generateGuestToken = <T>(): Promise<T> => request({ url: 'authentication/guest_session/new' })
