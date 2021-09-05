import Image from 'next/image'
import { Container, Hamburger } from '@shared/ui'
import { useToggle } from '@shared/lib'
import { Logo } from '@public/images'
import { wrapper, styles } from './styles.css'

export const Header = () => {
	const [isOpen, toggleOpen] = useToggle()
	return (
		<header className={styles}>
			<Container>
				<div className={wrapper}>
					<Image src={Logo} alt='logo' width='120px' height='20px' />
					<Hamburger onClick={toggleOpen} />
				</div>
			</Container>
		</header>
	)
}
