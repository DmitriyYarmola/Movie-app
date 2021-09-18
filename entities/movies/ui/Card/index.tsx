import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ROOT_IMAGE_API_URL } from '@app/config'
import { Rate } from '@shared/ui'
import { item, image, information, name } from './styles.css'

interface Props {
	to: string
	title: string
	posterPath: string
	averageVote: number
	styles?: {
		width: number
	}
}
export const Card: FC<Props> = ({ to, averageVote, posterPath, title, styles }) => {
	return (
		<Link href={to} passHref>
			<div className={item} style={styles}>
				<div className={image}>
					<Image
						src={`${ROOT_IMAGE_API_URL}${posterPath}`}
						className={image}
						alt={title}
						layout='fill'
						sizes='100vw'
						objectFit='cover'
					/>
				</div>
				<div className={information}>
					<p className={name}>{title}</p>
					<Rate count={averageVote} />
				</div>
			</div>
		</Link>
	)
}
