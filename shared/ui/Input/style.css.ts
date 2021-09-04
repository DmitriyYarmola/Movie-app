import { globalStyle, GlobalStyleRule, style } from '@vanilla-extract/css'
import { vars } from '@shared/styles/theme.css'

export const styles = style({
	position: 'relative',
	border: 0,
	borderBottom: `1px solid ${vars.colors.transparentBlack}`,
	padding: '6px 0 7px',
	fontSize: '1rem',
})

export const label = style({
	position: 'absolute',
	left: 0,
	zIndex: 1,
	bottom: '8px',
	fontSize: '1rem',
	transition: '200ms linear',
})

export const wrapper = style({
	position: 'relative',
	margin: '20px',
})

const activeStyles: GlobalStyleRule = {
	color: 'red',
	fontSize: '.8rem',
	transform: 'translate(0, -20px) scale(1)',
}

export const activeStateStyles = style(activeStyles)

globalStyle(`${styles}:focus + label`, activeStyles)
