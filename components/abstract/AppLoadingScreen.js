import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import {useTheme} from 'styled-components/native'

export default function AppLoadingScreen() {
	const theme = useTheme()

	return (
		<View style={{flex: 1, justifyContent: 'center'}}>
			<ActivityIndicator size={theme.components.AppLoadingScreen.size} color={theme.components.AppLoadingScreen.color} />
		</View>
	)
}
