export interface DefaultOptions {
	slidesToShow?: number
	slidesToScroll?: number
	gap?: number
	isArrow?: boolean
	speed?: number
}
export interface ResponsiveOptions {
	breakpoint: number
	settings: DefaultOptions
}

export type Options = DefaultOptions & Partial<Record<'responsive', ResponsiveOptions[]>>
