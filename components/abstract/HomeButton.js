import * as Analytics from 'expo-firebase-analytics'
import {useNavigation, useRoute} from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import AppButton from './AppButton'
import PropTypes from 'prop-types'
import React from 'react'

export default function HomeButton({padding}) {
	const navigation = useNavigation()
	const route = useRoute()
	const { t } = useTranslation()

	const handleButtonPress = () => {
		navigation.navigate('Home')
		if(global.analytics) {
			Analytics.logEvent('BackLinkClick', {
				purpose: 'User clicked on back button',
				screen: route.name
			})
		}
	}

	return (
		<AppButton
			width={'150px'}
			padding={padding}
			secondary
			title={t('Zpět')}
			onPress={() => handleButtonPress()}/>
	)
}

HomeButton.propTypes = {
	padding: PropTypes.string,
}
