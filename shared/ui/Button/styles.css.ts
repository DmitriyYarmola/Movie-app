import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const styles = style({
	background: vars.colors.purple,
	color: vars.colors.white,
	fontSize: '1.5em',
	width: '100%',
	padding: '.7em 0',
	borderRadius: '19px',
	cursor: 'pointer',
	transition: '.2s linear',
	fontFamily: 'SFPro, sans-serif',
	':hover': {
		background: vars.colors.darkPurple,
	},
})
