import { style } from '@vanilla-extract/css'
import { vars } from '@shared/styles/theme.css'

export const styles = style({
	background: vars.colors['purple-100'],
	padding: '10px 0',
})
export const wrapper = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
})
