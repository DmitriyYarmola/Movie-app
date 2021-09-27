import { style } from '@vanilla-extract/css'

export const slider = style({
	width: '100%',
	overflow: 'hidden',
	position: 'relative',
	cursor: 'pointer',
})

export const withArrows = style({ margin: '0 30px' })
export const track = style({
	display: 'flex',
	justifyContent: 'space-between',
	transitionTimingFunction: 'ease-in-out',
})
export const arrow = style({ position: 'absolute', zIndex: 10, top: '50%' })
export const rightArrow = style({ right: 0 })
export const leftArrow = style({ left: 0 })
