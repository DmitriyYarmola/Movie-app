import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Arrow } from '@shared/ui'
import { slider, track, withArrows, arrow, leftArrow, rightArrow } from './styles.css'

const initialOptions = {
	slidesToShow: 1,
	slidesToScroll: 1,
	isArrow: true,
	speed: 500,
}
interface Props {
	children: React.ReactNode
	options?: {
		slidesToShow?: number
		slidesToScroll?: number
		gap?: number
		isArrow?: boolean
		speed?: number
	}
}

const INITIAL_ELEMENT_WIDTH = 0
const INITIAL_LEFT_ITEMS_TO_SCROLL = 0
const INITIAL_PORTION_POSITION = 0

export const Slider: React.FC<Props> = ({ children, options }) => {
	const formattedOptions = useMemo(() => ({ ...initialOptions, ...options }), [options])

	const [elementWidth, setElementWidth] = useState(INITIAL_ELEMENT_WIDTH)
	const [leftToScroll, setLeftToScroll] = useState(INITIAL_LEFT_ITEMS_TO_SCROLL)
	const trackRef = useRef<HTMLDivElement>(null)
	const portionPosition = useRef(INITIAL_PORTION_POSITION)

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
	}, [formattedOptions.slidesToShow, getTotalChildrenCount])

	useEffect(() => {
		const trackElement = trackRef.current
		if (trackElement) {
			const trackWidth = trackElement.offsetWidth
			const elementWidth = calculateElementWidth(trackWidth)
			setElementWidth(elementWidth)
		}
	}, [calculateElementWidth, options])

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
		</div>
	)
}
