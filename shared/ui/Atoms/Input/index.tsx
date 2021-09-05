import { useEffect, useState } from 'react'
import { ChangeValue } from '@shared/interfaces'
import { useToggle } from '@shared/lib/hooks'
import { activeLabel, label, styles, wrapper, activeWrapper } from './style.css'

interface PropsInterface {
	name: string
	initialValue?: string
	isDisabled?: boolean
	placeholder?: string
}
export const Input = ({ isDisabled = false, name, placeholder, initialValue }: PropsInterface) => {
	const [value, setValue] = useState('')
	const [isFocused, toggleFocus] = useToggle()

	useEffect(() => {
		if (initialValue) {
			setValue(initialValue)
		}
	}, [initialValue])

	const onChange: ChangeValue = (e) => {
		const value = e.target.value
		setValue(value)
	}

	const onClick = () => {
		toggleFocus()
	}

	const onBlur = () => {
		toggleFocus()
	}

	const isActive = isFocused || value.length
	return (
		<div className={`${wrapper} ${isActive ? activeWrapper : ''}`}>
			<input
				id={'standard-input'}
				value={value}
				onChange={onChange}
				disabled={isDisabled}
				name={`${name}-input`}
				className={styles}
				onClick={onClick}
				onBlur={onBlur}
			/>
			<label htmlFor='standard-input' className={`${label} ${isActive ? activeLabel : ''}`}>
				{placeholder}
			</label>
		</div>
	)
}
