import React from 'react'
import { styles } from './styles.css'

interface PropsInterface {}
export const Button: React.FC<PropsInterface> = ({ children }) => {
	return <button className={styles}>{children}</button>
}
