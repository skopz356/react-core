import {useFirebase} from 'react-redux-firebase'
import {useTranslation} from 'react-i18next'
import AppButton from '@engine/abstract/AppButton'
import AppInput from '@engine/abstract/AppInput'
import AppText from '../abstract/AppText'
import React, {useRef, useState} from 'react'
import Screen from '~/core/components/abstract/styled/Screen'
import styled from 'styled-components/native'


const ErrorContainer = styled.View`

`

export default function RegistrationScreen() {
	const {t} = useTranslation()
	const firebase = useFirebase()

	const inputEmailRef = useRef()
	const inputPasswordRef = useRef()
	const inputPasswordConfirmRef = useRef()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

	const [errors, setErrors] = useState([]) // 0 ... passwords dont match, 1 ... wrong length

	const errorMessages = {
		0: t('Hesla se neschodují')
	}

	const handleButtonRegistrationClick = () => {
		firebase.createUser(
			{email, password},
			{email: email, username: ''}
		).then(userData => {
			console.log(userData)
		})
	}

	const handlePasswordConfirmChangeText = (text) => {
		setPasswordConfirm(text)
		if(password !== text) {
			if(!errors.includes(0)) {
				setErrors([...errors, 0])
			}
		}else {
			const index = errors.indexOf(0)
			console.log('doesnt match')
			if (index > -1) {
				let newArray = [...errors]
				newArray.splice(index, 1)
				setErrors(newArray)
			}
		}
	}


	return (
		<Screen>
			<AppInput ref={inputEmailRef} onChangeText={setEmail} value={email} placeholder={t('Zadejte svůj email')} clearButtonMode='always'/>
			<AppInput ref={inputPasswordRef} onChangeText={setPassword} value={password} placeholder={t('Zadejte heslo')} secureTextEntry={true} clearButtonMode='always'/>
			<AppInput ref={inputPasswordConfirmRef} onChangeText={handlePasswordConfirmChangeText} value={passwordConfirm} placeholder={t('Zadejte heslo')} secureTextEntry={true} clearButtonMode='always'/>

			<AppButton onPress={() => handleButtonRegistrationClick()} title={t('Registrovat')}/>

			<ErrorContainer>

				{errors.map((error, index) => {
					return (
						<AppText key={index}>
							{errorMessages[error]}
						</AppText>
					)
				})}

			</ErrorContainer>
		</Screen>
	)
}


RegistrationScreen._name = 'Registration'
