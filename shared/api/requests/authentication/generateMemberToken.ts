import { request } from '../../request'

export const generateMemberToken = () => request({ url: 'authentication/token/new' })
