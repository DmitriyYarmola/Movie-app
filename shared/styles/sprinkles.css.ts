import { createAtomicStyles, createAtomsFn } from '@vanilla-extract/sprinkles'
import { vars } from './theme.css'

const responsiveStyles = createAtomicStyles({
	conditions: {
		mobile: {},
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
		fontSize: ['.8rem', '1rem'],
		top: ['-10px'],
	},
	shorthands: {
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		placeItems: ['justifyContent', 'alignItems'],
	},
})

const colors = {
	purple: vars.colors.purple,
	white: vars.colors.white,
	darkPurple: vars.colors.darkPurple,
	transparentBlack: vars.colors.transparentBlack,
}

const colorStyles = createAtomicStyles({
	conditions: {
		lightMode: {},
		darkMode: { '@media': '(prefers-color-scheme: dark)' },
	},
	defaultCondition: 'lightMode',
	properties: {
		color: colors,
		background: colors,
	},
})

export const atoms = createAtomsFn(responsiveStyles, colorStyles)

export type Atoms = Parameters<typeof atoms>[0]
