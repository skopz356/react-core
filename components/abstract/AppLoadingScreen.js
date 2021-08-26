import { ActivityIndicator, View } from 'react-native'
import React from 'react'

export default function AppLoadingScreen() {
	return (
		<View style={{flex: 1, justifyContent: 'center'}}>
			<ActivityIndicator size="large" color="#000000" />
		</View>
	)
}
