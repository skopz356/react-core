import { ActivityIndicator as _ActivityIndicator } from 'react-native'
import {useTheme} from 'styled-components/native'
import React from 'react'

export default function ActivityIndicator() {
	const theme = useTheme()

	return (
		<_ActivityIndicator size={theme.components.AppLoadingScreen.size} color={theme.components.AppLoadingScreen.color} />
	)
}

