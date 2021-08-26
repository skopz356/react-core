import {Dimensions} from "react-native";

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
