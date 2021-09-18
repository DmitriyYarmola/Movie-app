import { style } from '@vanilla-extract/css'

export const slider = style({
	width: '100%',
	overflow: 'hidden',
})

export const track = style({
	display: 'flex',
	justifyContent: 'space-between',
	gridColumnGap: '20px',
})
