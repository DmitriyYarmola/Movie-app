import React from 'react'
import styles from './style.module.scss'

interface PropsInterface {}
export const Button: React.FC<PropsInterface> = ({ children }) => {
	return <button className={styles.button}>{children}</button>
}
