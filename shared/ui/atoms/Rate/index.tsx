import React from 'react'
import { activeStyles, styles } from './styles.css'
export const Rate = () => {
	return (
		<p className='c-rate'>
			{/*<svg className={styles} width='32' height='32'>*/}
			{/*	<use xlinkHref='#star' />*/}
			{/*</svg>*/}
			{/*<svg className={styles} width='32' height='32'>*/}
			{/*	<use xlinkHref='#star' />*/}
			{/*</svg>*/}
			{/*<svg className={styles} width='32' height='32'>*/}
			{/*	<use xlinkHref='#star' />*/}
			{/*</svg>*/}
			{/*<svg className={styles} width='32' height='32'>*/}
			{/*	<use xlinkHref='#star' />*/}
			{/*</svg>*/}
			<svg className={`${styles} ${activeStyles}`} viewBox='0 0 32 32' width='32' height='32'>
				<use xlinkHref='#star' fill='url(#half)' />
			</svg>
		</p>
	)
}
