import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
	colors: {
		purple: '#6339c7',
		white: '#ffffff',
		darkPurple: '#4f2aad',
	},
	font: {
		body: 'arial',
	},
})
