import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { styles, image, information, title } from './styles.css'

interface Props {
	to: string
}
export const Card: FC<Props> = ({ to }) => {
	return (
		<Link href={to} passHref>
			<div className={styles}>
				<div className={image}>
					<Image
						src={
							'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						}
						className={image}
						alt={'alt'}
						layout='fill'
						sizes='100vw'
						objectFit='cover'
					/>
				</div>
				<div className={information}>
					<p className={title}>Avatar</p>
					<div>Rating</div>
				</div>
			</div>
		</Link>
	)
}
