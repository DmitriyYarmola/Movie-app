import { style } from '@vanilla-extract/css'

export const slider = style({
	width: '100%',
	overflow: 'hidden',
})

export const track = style({
	display: 'flex',
	justifyContent: 'space-between',
	transition: '.5s  ease-in-out',
	// gridColumnGap: '20px',
})
