import axios, { AxiosRequestConfig } from 'axios'

export const request = <T>(config: AxiosRequestConfig): Promise<T> => {
	// const token = ''
	// let headers = {}
	// if (token) headers = { ...headers, Authorization: `Bearer ${token}` }

	const instance = axios.create({
		baseURL: process.env.NEXT_PUBLIC_BASE_URL,
		params: { api_key: process.env.NEXT_PUBLIC_API_KEY },
	})

	return instance(config).then((response) => response.data)
}
