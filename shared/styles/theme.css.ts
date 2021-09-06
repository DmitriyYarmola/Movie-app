import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
	colors: {
		purple: '#6644B8',
		'purple-100': '#66448F',
		white: '#ffffff',
		darkPurple: '#4f2aad',
		'darkPurple-100': '#210F37',
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
		tabletS: '480px',
		tablet: '640px',
		laptop: '1240px',
	},
	cardSizes: {
		width: {
			small: '150px',
			large: '355px',
			auto: '100%',
		},
		height: {
			small: '197px',
			large: '225px',
		},
	},
})
