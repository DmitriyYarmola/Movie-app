import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body, body *', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
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
