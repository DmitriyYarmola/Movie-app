import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Arrow, Dot } from '@shared/ui'
import { useWindwoSize } from '@shared/lib'
import { slider, track, withArrows, arrow, leftArrow, rightArrow, dots } from './styles.css'
import { DefaultOptions, Options } from './interface'
import { getClosestBreakpoint } from './lib'

const initialOptions = {
	slidesToShow: 1,
	slidesToScroll: 1,
	isArrow: true,
	speed: 500,
	gap: 0,
}

interface Props {
	children: React.ReactNode
	options: Options
}

const INITIAL_ELEMENT_WIDTH = 0
const INITIAL_LEFT_ITEMS_TO_SCROLL = 0
const INITIAL_PORTION_POSITION = 0

export const Slider: React.FC<Props> = ({ children, options }) => {
	const windowSize = useWindwoSize()
	const [elementWidth, setElementWidth] = useState(INITIAL_ELEMENT_WIDTH)
	const [leftToScroll, setLeftToScroll] = useState(INITIAL_LEFT_ITEMS_TO_SCROLL)
	const [formattedOptions, setFormattedOptions] = useState<Required<DefaultOptions>>(initialOptions)
	const trackRef = useRef<HTMLDivElement>(null)
	const portionPosition = useRef(INITIAL_PORTION_POSITION)

	console.log('formattedOptions', formattedOptions)

	const getTotalChildrenCount = useCallback(() => {
		return React.Children.count(children)
	}, [children])

	const calculateElementWidth = useCallback(
		(trackWidth: number) => {
			const { slidesToShow } = formattedOptions
			const gapSize = 10
			return trackWidth / slidesToShow
		},
		[formattedOptions]
	)

	const totalWithoutFirstSlide = useMemo(
		() => getTotalChildrenCount() - formattedOptions.slidesToShow,
		[formattedOptions.slidesToShow, getTotalChildrenCount]
	)

	useEffect(() => {
		setLeftToScroll(getTotalChildrenCount() - formattedOptions.slidesToShow)
	}, [formattedOptions, getTotalChildrenCount])

	useEffect(() => {
		const responsiveOptions = options?.responsive
		setFormattedOptions((prevState) => {
			if (responsiveOptions) {
				const breakpointItem = getClosestBreakpoint(options?.responsive, windowSize.width)
				const { responsive, ...noResponsiveOptions } = options
				console.log({ ...prevState, ...breakpointItem.settings }, 'HERE', breakpointItem.settings)
				if (breakpointItem.breakpoint >= windowSize.width) return { ...prevState, ...breakpointItem.settings }

				return { ...prevState, ...noResponsiveOptions }
			}
			return prevState
		})
		// if (responsiveOptions) {
		// 	const breakpointItem = getClosestBreakpoint(options?.responsive, windowSize.width)
		// 	const { responsive, ...noResponsiveOptions } = options
		// 	if (breakpointItem.breakpoint >= windowSize.width) {
		// 		setFormattedOptions((prevState) => ({ ...prevState, ...breakpointItem.settings }))
		// 		return
		// 	}
		// 	setFormattedOptions((prevState) => ({ ...prevState, ...noResponsiveOptions }))
		// 	return
		// }
		// setFormattedOptions((prevState) => ({ ...prevState, ...options }))
	}, [getTotalChildrenCount, options, windowSize.width])

	useEffect(() => {
		const trackElement = trackRef.current
		if (trackElement) {
			const trackWidth = trackElement.offsetWidth
			const elementWidth = calculateElementWidth(trackWidth)
			setElementWidth(elementWidth)
		}
	}, [calculateElementWidth, options])

	const calculateCountOfSlides = useCallback(() => {
		const { slidesToShow, slidesToScroll } = formattedOptions
		//NOTE: 1 = the first initial slider
		return Math.round((getTotalChildrenCount() - slidesToShow) / slidesToScroll) + 1
	}, [formattedOptions, getTotalChildrenCount])

	const countOfSlidesArray = useMemo(() => new Array(calculateCountOfSlides()).fill(''), [calculateCountOfSlides])

	const changeChildrenStyles = () => {
		return React.Children.map(children, (child: any) =>
			React.cloneElement(child, {
				styles: { minWidth: elementWidth },
			})
		)
	}

	const calculateSliderScrollToRight = (prevValue: number) => {
		const { slidesToScroll } = formattedOptions
		if (leftToScroll < slidesToScroll) return prevValue - elementWidth * leftToScroll
		return prevValue - elementWidth * slidesToScroll
	}

	const calculateSliderScrollToLeft = (prevValue: number) => {
		const { slidesToScroll } = formattedOptions
		if (leftToScroll + slidesToScroll === totalWithoutFirstSlide) return INITIAL_LEFT_ITEMS_TO_SCROLL
		return -(-prevValue - elementWidth * slidesToScroll)
	}

	const calculateSliderScrollByDotClick = (vlaue: number) => {
		const { slidesToScroll, slidesToShow } = formattedOptions
		const hasMoreScrolledThenTotalCount = vlaue * slidesToScroll > getTotalChildrenCount()
		if (hasMoreScrolledThenTotalCount) return vlaue - elementWidth * (getTotalChildrenCount() - slidesToShow)
		return -(elementWidth * (vlaue * slidesToScroll - slidesToShow))
	}

	const changeTrackPosition = (position: number) => {
		const element = trackRef.current
		if (element) element.style.transform = `translateX(${position}px)`
	}

	const onClickLeftArrow = () => {
		const { slidesToScroll } = formattedOptions
		const position = calculateSliderScrollToLeft(portionPosition.current)
		portionPosition.current = position
		changeTrackPosition(position)
		setLeftToScroll((prevState) => prevState + slidesToScroll)
	}

	const onClickRightArrow = () => {
		const { slidesToScroll } = formattedOptions
		const position = calculateSliderScrollToRight(portionPosition.current)
		portionPosition.current = position
		changeTrackPosition(position)
		setLeftToScroll((prevState) => prevState - slidesToScroll)
	}

	const onClickByDot = (value: number) => {
		const { slidesToScroll } = formattedOptions
		const position = calculateSliderScrollByDotClick(value)
		portionPosition.current = position
		changeTrackPosition(position)
		setLeftToScroll(getTotalChildrenCount() - slidesToScroll * value)
	}

	const isLastSlide = useMemo(() => leftToScroll <= INITIAL_LEFT_ITEMS_TO_SCROLL, [leftToScroll])

	const isFirstSlide = useMemo(() => leftToScroll === totalWithoutFirstSlide, [leftToScroll, totalWithoutFirstSlide])

	const { isArrow, speed } = formattedOptions
	return (
		<div className={`${slider} ${isArrow ? withArrows : ''}`}>
			{!isFirstSlide && isArrow && <Arrow type='left' onClick={onClickLeftArrow} classes={[arrow, leftArrow]} />}
			<div className={track} ref={trackRef} style={{ transitionDuration: `${speed}ms` }}>
				{changeChildrenStyles()}
			</div>
			{!isLastSlide && isArrow && <Arrow onClick={onClickRightArrow} classes={[arrow, rightArrow]} />}
			<div className={dots}>
				{countOfSlidesArray.map((_, index) => {
					return <Dot onClick={() => onClickByDot(index + 1)} key={index} />
				})}
			</div>
		</div>
	)
}
