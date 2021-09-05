import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
	colors: {
		purple: '#6644B8',
		'purple-100': '#66448F',
		white: '#ffffff',
		darkPurple: '#4f2aad',
		transparentBlack: 'rgba(0,0,0,.42)',
		black: '#000000',
	},
	space: {
		none: '0',
		auto: 'auto',
		small: '4px',
		medium: '8px',
		large: '16px',
	},
	containerWeights: {
		mobile: '320px',
		tablet: '640px',
		tabletL: '930px',
		laptop: '1240px',
		desktop: '1700px',
	},
})
