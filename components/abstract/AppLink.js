import * as Analytics from 'expo-firebase-analytics'
import {useNavigation, useRoute} from '@react-navigation/native'
import AppButton from './AppButton'
import PropTypes from 'prop-types'
import React from 'react'

export default function AppLink({where, title, analytics, params={}}){
	const navigation = useNavigation()
	const route = useRoute()
	const handleButtonPress = () => {
		navigation.navigate(where, params)
		if(analytics) {
			Analytics.logEvent(analytics.title, { screen: route.name, ...analytics.data})
		}
	}
	return (
		<AppButton secondary
			title={title}
			onPress={() => handleButtonPress()}
		/>
	)
}

AppLink.propTypes = {
	analytics: PropTypes.any,
	params: PropTypes.object,
	title: PropTypes.string,
	where: PropTypes.string,
}
