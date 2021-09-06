import { Container, Hamburger, Logo } from '@shared/ui'
import { useToggle } from '@shared/lib'
import { wrapper, styles } from './styles.css'

export const Header = () => {
	const [isOpen, toggleOpen] = useToggle()
	return (
		<header className={styles}>
			<Container>
				<div className={wrapper}>
					<Logo width='120px' height='20px' to='/' />
					<Hamburger onClick={toggleOpen} />
				</div>
			</Container>
		</header>
	)
}
