import { useFirebase } from 'react-redux-firebase'
import {useTranslation} from 'react-i18next'
import AppButton from './../../abstract/AppButton'
import AppInput from '~/core/components/abstract/AppInput'
import React, {useRef, useState} from 'react'
import Screen from '~/core/components/abstract/styled/Screen'

import GoogleButton from '@engine/screens/LoginScreen/GoogleButton'


export default function LoginScreen() {
	const {t} = useTranslation()
	const firebase = useFirebase()
	const inputEmailRef = useRef()
	const inputPasswordRef = useRef()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLoginButtonPress = () => {
		firebase.login({
			email, password
		}).then(data => {
			console.log(data)
		})
	}

	return (
		<Screen>
			<AppInput ref={inputEmailRef} onChangeText={setEmail} value={email} placeholder={t('Zadejte svůj email')} clearButtonMode='always'/>
			<AppInput ref={inputPasswordRef} onChangeText={setPassword} value={password} placeholder={t('Zadejte heslo')} secureTextEntry={true} clearButtonMode='always'/>
			<AppButton title={'Login'} onPress={() => handleLoginButtonPress()}/>
			{global.config.components.LoginScreen.showGoogleWidget &&
				<GoogleButton title={t('Přihlasit se pomocí Google')}/>
			}
		</Screen>
	)
}

LoginScreen._name = 'Login'
