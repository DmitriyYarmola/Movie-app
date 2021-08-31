import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
	colors: {
		white: '#ffffff',
		purple: '#6339c7',
		darkPurple: '#4f2aad',
	},
	font: {
		body: 'arial',
	},
})
