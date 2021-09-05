import { style, StyleRule } from '@vanilla-extract/css'
import { vars } from '@shared/styles/theme.css'

export const styles = style({
	position: 'relative',
	border: 0,
	borderBottom: `1px solid ${vars.colors.transparentBlack}`,
	padding: '6px 0 7px',
	fontSize: '1rem',
	transition: '.2s linear',
	':hover': {
		borderColor: vars.colors.black,
	},
})

export const label = style({
	position: 'absolute',
	left: 0,
	zIndex: 1,
	bottom: '8px',
	fontSize: '1rem',
	transition: '200ms linear',
})

const pseudoStyles: StyleRule = {
	position: 'absolute',
	zIndex: 10,
	content: '""',
	display: 'block',
	bottom: 0,
	height: '1px',
	background: vars.colors.purple,
	width: '50%',
	transition: '200ms linear',
}

export const wrapper = style({
	position: 'relative',
	display: 'inline-block',
	margin: '20px',
	'::after': {
		...pseudoStyles,
		right: '50%',
		width: 0,
	},
	'::before': {
		...pseudoStyles,
		left: '50%',
		width: 0,
	},
})

export const activeWrapper = style({
	'::after': {
		width: '50%',
	},
	'::before': {
		width: '50%',
	},
})

export const activeLabel = style({
	color: vars.colors.purple,
	fontSize: '.8rem',
	transform: 'translate(0, -20px) scale(1)',
})
