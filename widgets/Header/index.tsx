import Image from 'next/image'
import { Container } from '@shared/ui'
import { Logo } from '@public/images'
import { wrapper } from './styles.css'

export const Header = () => {
	return (
		<header>
			<Container>
				<div className={wrapper}>
					<Image src={Logo} alt='logo' width='155px' height='20px' />
					<div>Right content</div>
				</div>
			</Container>
		</header>
	)
}
