import Image from 'next/image'
import { arrow, left, right } from './styles.css'
interface Props {
	type?: 'right' | 'left'
	onClick: VoidFunction
	classes?: string[]
}

export const Arrow = ({ type = 'right', onClick, classes }: Props) => {
	return (
		<svg
			viewBox={`0 0 492.004 492.004`}
			className={`${arrow} ${type === 'left' ? left : right} ${classes?.join(' ')}`}
			onClick={onClick}
		>
			<use xlinkHref='#arrow' />
		</svg>
	)
}
