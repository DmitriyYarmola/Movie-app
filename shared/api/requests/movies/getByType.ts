import { request } from '@shared/api/request'

export const getByType = <T>(page: number, type: string): Promise<T> => {
	return request({ method: 'GET', url: `movie/${type}`, params: { page } })
}
