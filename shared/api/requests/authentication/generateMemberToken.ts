import { request } from '../../requrest'

export const generateMemberToken = () => request({ url: 'authentication/token/new' })
