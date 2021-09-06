import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@shared/styles/theme.css'

globalStyle('html, body, body *', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
	fontFamily: 'SFPro, sans-serif',
})

globalStyle('a', {
	color: 'inherit',
	textDecoration: 'none',
})

globalStyle('input, textarea, button', {
	outline: 'none',
})

globalStyle('button', {
	border: 0,
	background: 'transparent',
})

globalStyle('body', {
	background: vars.colors['darkPurple-100'],
})
