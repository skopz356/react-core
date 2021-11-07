import {useTheme} from 'styled-components/native'
import ActivityIndicator from '@engine/abstract/AppLoadingScreen/ActivityIndicator'
import React from 'react'
import Screen from '../styled/Screen'

export default function AppLoadingScreen() {
	const theme = useTheme()

	return (
		<Screen>
			<ActivityIndicator size={theme.components.AppLoadingScreen.size} color={theme.components.AppLoadingScreen.color} />
		</Screen>
	)
}
