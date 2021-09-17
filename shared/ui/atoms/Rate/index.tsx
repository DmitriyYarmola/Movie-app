import React from 'react'
import { generateArrayWithId } from '@shared/lib'
import { checkIsLastArrayItem } from '@shared/lib'
import { styles, rate } from './styles.css'

interface Props {
	count: number
}
export const Rate = ({ count }: Props) => {
	const WIDTH = 20
	const HEIGHT = 20
	const int_count = Math.floor(count)
	const decimal_count = String(count).split('.')[1]
	const array = generateArrayWithId(int_count)
	return (
		<p className={rate}>
			{array.map((id, index) => {
				const isLastItem = checkIsLastArrayItem(index, array.length)
				return (
					<svg className={`${styles}`} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width={WIDTH} height={HEIGHT} key={id}>
						<use xlinkHref='#star' fill={decimal_count && isLastItem ? 'url(#half)' : ''} />
					</svg>
				)
			})}
		</p>
	)
}
