import { style } from '@vanilla-extract/css'
import { vars } from '@shared/styles'

export const styles = style({ fill: vars.colors.yellow })

export const rate = style({ display: 'flex', gridColumnGap: '5px', justifyContent: 'center' })
