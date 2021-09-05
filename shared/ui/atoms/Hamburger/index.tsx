import React from 'react'
import { wrapper, styles } from './styles.css'

interface PropsInterface {
	onClick: VoidFunction
}
export const Hamburger = ({ onClick }: PropsInterface) => {
	return (
		<div className={wrapper} onClick={onClick}>
			<div className={styles} />
		</div>
	)
}
