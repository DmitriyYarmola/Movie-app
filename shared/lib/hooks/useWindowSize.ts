import { useEffect, useState } from 'react'

export const useWindwoSize = () => {
	const [size, setSize] = useState({ width: 0, height: 0 })

	useEffect(() => {
		const { innerWidth: width, innerHeight: height } = window
		setSize({ width, height })
	}, [])

	return size
}
