import {Dimensions, PixelRatio} from 'react-native'
import {useEffect, useState} from 'react'

/**
 * A React Hook which updates when the orientation changes
 * @returns whether the user is in 'PORTRAIT' or 'LANDSCAPE'
 */
export function useOrientation() {
	/**
     * Returns true if the screen is in portrait mode
     */
	const isPortrait = () => {
		const dim = Dimensions.get('screen')
		return dim.height >= dim.width
	}

	// State to hold the connection status
	const [orientation, setOrientation] = useState(
		isPortrait() ? 'PORTRAIT' : 'LANDSCAPE',
	)

	useEffect(() => {
		const callback = () => setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE')
		Dimensions.addEventListener('change', callback)
		return () => {
			Dimensions.removeEventListener('change', callback)
		}
	}, [])

	return orientation
}

const pixelRatio = PixelRatio.get()
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export function adjustFont (size) {
	if (pixelRatio >= 2 && pixelRatio < 3) {
		if (deviceWidth < 360) {
			return size * 0.95
		}
		if (deviceHeight < 667) {
			return size
		} if (deviceHeight >= 667 && deviceHeight <= 735) {
			return size * 1.15
		}
		return size * 1.25
	} if (pixelRatio >= 3 && pixelRatio < 3.5) {
		if (deviceWidth <= 360) {
			return size
		}
		if (deviceHeight < 667) {
			return size * 1.15
		}
		if (deviceHeight >= 667 && deviceHeight <= 735) {
			return size * 1.2
		}
		return size * 1.27
	} if (pixelRatio >= 3.5) {
		if (deviceWidth <= 360) {
			return size
		}
		if (deviceHeight < 667) {
			return size * 1.2
		}
		if (deviceHeight >= 667 && deviceHeight <= 735) {
			return size * 1.25
		}
		return size * 1.4
	} return size
}

export const ConditionalWrap = ({condition, wrap, children}) => condition ? wrap(children) : children

export const ifValue = (value, _default) => {
	return value ? value : _default
}
