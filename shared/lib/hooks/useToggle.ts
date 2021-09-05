import { useState } from 'react'

type ReturnValue = [boolean, () => void]

export const useToggle = (initialValue = false): ReturnValue => {
	const [isOpen, setIsOpen] = useState(initialValue)

	const toggleValue = () => {
		setIsOpen((prevState) => !prevState)
	}

	return [isOpen, toggleValue]
}
