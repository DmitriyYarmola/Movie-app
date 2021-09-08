import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { styles, image, information, name } from './styles.css'
import { ROOT_IMAGE_API_URL } from '@app/config'

interface Props {
	to: string
	title: string
	posterPath: string
	averageVote: number
}
export const Card: FC<Props> = ({ to, averageVote, posterPath, title }) => {
	return (
		<Link href={to} passHref>
			<div className={styles}>
				<div className={image}>
					<Image
						src={`${ROOT_IMAGE_API_URL}${posterPath}`}
						className={image}
						alt={'alt'}
						layout='fill'
						sizes='100vw'
						objectFit='cover'
					/>
				</div>
				<div className={information}>
					<p className={name}>{title}</p>
					<div>{averageVote}</div>
				</div>
			</div>
		</Link>
	)
}
