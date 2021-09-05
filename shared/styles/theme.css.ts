import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
	colors: {
		purple: '#6644B8',
		white: '#ffffff',
		darkPurple: '#4f2aad',
		transparentBlack: 'rgba(0,0,0,.42)',
	},
	space: {
		none: '0',
		small: '4px',
		medium: '8px',
		large: '16px',
	},
})
