import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles'
import { cardWidth, vars } from './theme.css'

const responsiveStyles = createAtomicStyles({
	conditions: {
		mobile: {},
		tabletS: { '@media': 'screen and (min-width: 568px)' },
		tablet: { '@media': 'screen and (min-width: 768px)' },
		desktop: { '@media': 'screen and (min-width: 1024px)' },
	},
	defaultCondition: 'mobile',
	properties: {
		display: ['none', 'flex', 'block', 'inline'],
		position: ['absolute', 'relative', 'fixed'],
		flexDirection: ['row', 'column'],
		justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
		paddingTop: vars.space,
		paddingBottom: vars.space,
		paddingLeft: vars.space,
		paddingRight: vars.space,
		width: { ...vars.containerWeights, ...vars.cardSizes.width },
		height: { ...vars.cardSizes.height },
		gridTemplateColumns: {
			auto: `repeat(auto-fill, ${cardWidth.auto})`,
			small: `repeat(auto-fill, ${cardWidth.small})`,
			medium: `repeat(auto-fill, ${cardWidth.medium})`,
			large: `repeat(auto-fill, ${cardWidth.large})`,
		},
	},
	shorthands: {
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		placeItems: ['justifyContent', 'alignItems'],
	},
})

const colorStyles = createAtomicStyles({
	conditions: {
		lightMode: { '@media': '(prefers-color-scheme: light)' },
		darkMode: { '@media': '(prefers-color-scheme: dark)' },
	},
	defaultCondition: 'lightMode',
	properties: {
		color: vars.colors,
		background: vars.colors,
	},
})

export const atoms = createAtomsFn(responsiveStyles, colorStyles)

export type Atoms = Parameters<typeof atoms>[0]
