import { dot } from './styles.css'

interface Props {
	onClick: VoidFunction
}

export const Dot = ({ onClick }: Props) => {
	return (
		<svg viewBox='0 0 120 120' className={dot} onClick={onClick}>
			<use xlinkHref='#dot' />
		</svg>
	)
}
