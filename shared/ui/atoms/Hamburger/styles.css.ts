import { style, StyleRule } from '@vanilla-extract/css'
import { vars } from '@shared/styles/theme.css'

const pseudoStyles: StyleRule = {
	content: "''",
	position: 'absolute',
	left: 0,
	height: 'inherit',
	width: 'inherit',
	background: 'inherit',
}
export const styles = style({
	position: 'relative',
	width: '30px',
	height: '4px',
	background: vars.colors.white,
	':after': {
		...pseudoStyles,
		top: '8px',
	},
	':before': {
		...pseudoStyles,
		bottom: '8px',
	},
})
export const wrapper = style({})
