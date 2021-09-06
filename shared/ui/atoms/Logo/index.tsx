import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo as LogoImage } from '@public/images'

interface Props {
	to: string
	height: string
	width: string
}
export const Logo = ({ to, height, width }: Props) => {
	return (
		<Link href={to} passHref>
			<span>
				<Image src={LogoImage} alt='logo' width={width} height={height} />
			</span>
		</Link>
	)
}
