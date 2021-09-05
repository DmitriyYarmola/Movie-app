import { FC, ReactNode } from 'react'
import { Container } from '../Container'
import { template } from './styles.css'

interface PropsTypes {
	header: ReactNode
	footer?: ReactNode
}
export const MainTemplate: FC<PropsTypes> = ({ children, footer, header }) => {
	return (
		<div className={template}>
			{header}
			<Container>{children}</Container>
			{footer}
		</div>
	)
}
