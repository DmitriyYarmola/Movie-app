import { FC } from 'react'
import { styles } from './styles.css'

export const Container: FC = ({ children }) => {
	return <div className={styles}>{children}</div>
}
