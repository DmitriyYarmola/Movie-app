import { useEffect, useState } from 'react'
import { ChangeValue } from '@shared/interfaces'
import { activeStateStyles, label, styles, wrapper } from './style.css'

interface PropsInterface {
	name: string
	initialValue?: string
	isDisabled?: boolean
	placeholder?: string
}
export const Input = ({ isDisabled = false, name, placeholder, initialValue }: PropsInterface) => {
	const [value, setValue] = useState('')

	useEffect(() => {
		if (initialValue) {
			setValue(initialValue)
		}
	}, [initialValue])

	const onChange: ChangeValue = (e) => {
		const value = e.target.value
		setValue(value)
	}

	return (
		<div className={wrapper}>
			<input
				id={'standard-input'}
				value={value}
				onChange={onChange}
				disabled={isDisabled}
				name={`${name}-input`}
				className={styles}
			/>
			<label htmlFor='standard-input' className={`${label} ${value.length ? activeStateStyles : ''}`}>
				{placeholder}
			</label>
		</div>
	)
}
