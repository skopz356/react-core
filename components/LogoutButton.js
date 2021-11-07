import {useFirebase} from 'react-redux-firebase'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import AppButton from './abstract/AppButton'
import PropTypes from 'prop-types'
import React from 'react'

export default function LogoutButton({where}) {
	const firebase = useFirebase()
	const {t} = useTranslation()
	const navigation = useNavigation()

	const x = useSelector(state => state.firebase.profile)

	const handleButtonPress = () => {
		firebase.logout().then(() => {
			navigation.navigate(where ? where: global.config.components.LogoutButton.where)
		})
	}

	return (
		<AppButton onPress={handleButtonPress} title={t('Odhlasit')}/>
	)
}

LogoutButton.propTypes = {
	where: PropTypes.string
}
