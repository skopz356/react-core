import {useFirebase} from 'react-redux-firebase'
import {useNavigation} from '@react-navigation/native'
import {useTranslation} from 'react-i18next'
import AppButton from '@engine/abstract/AppButton'
import AppInput from '@engine/abstract/AppInput'
import AppText from '@engine/abstract/AppText'
import ErrorContainer from '@engine/base/Login/ErrorContainer'
import PropTypes from 'prop-types'
import React, {useRef, useState} from 'react'
import RegisterContainer from '@engine/base/Register/RegisterContainer'
import styled from 'styled-components/native'

const RegisterInnerContainer = styled.View`
	${(props) => props.theme.components.Register.innerContainerStyles(props)}
`

export default function Register({where}) {
	const {t} = useTranslation()
	const firebase = useFirebase()
	const navigation = useNavigation()

	const inputEmailRef = useRef()
	const inputPasswordRef = useRef()
	const inputPasswordConfirmRef = useRef()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

	const [errors, setErrors] = useState(() => new Set())

	const handleButtonRegistrationClick = () => {
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
			firebase.createUser(
				{email, password},
				{email: email, username: ''}
			).then(userData => {
				navigation.navigate(where ? where: global.config.components.Register.where)
			}).catch(err => {
				let errorCode = err.code
				if(errorCode in global.config.components.Register.authenticationErrors) {
					setErrors(prev => new Set(prev).add(global.config.components.Register.authenticationErrors[errorCode]))
				}else {
					setErrors(prev => new Set(prev).add(global.config.components.Register.authenticationErrors['default']))
				}
			})
		})
	}

	const handlePasswordConfirmChangeText = (text) => {
		setPasswordConfirm(text)
		if(password !== text) {
			setErrors(prev => new Set(prev).add(global.config.components.Register.authenticationErrors['passwords-dont-match']))
		}else {
			setErrors(prev => {
				const newErrors = new Set(prev)
				newErrors.delete(global.config.components.Register.authenticationErrors['passwords-dont-match'])
				return newErrors
			})
		}
	}


	return (
		<RegisterContainer>
			{(errors && errors.size !== 0) &&
				<ErrorContainer>
					{[...errors].map((error, index) => {
						return (
							<AppText key={index}>
								{error}
							</AppText>
						)
					})}
				</ErrorContainer>
			}
			<RegisterInnerContainer>
				<AppInput ref={inputEmailRef} onChangeText={setEmail} value={email} label={t('Zadejte svůj email')} clearButtonMode='always'/>
				<AppInput ref={inputPasswordRef} onChangeText={setPassword} value={password} label={t('Zadejte heslo')} secureTextEntry={true} clearButtonMode='always'/>
				<AppInput ref={inputPasswordConfirmRef} onChangeText={handlePasswordConfirmChangeText} value={passwordConfirm} label={t('Potvrďte heslo')} secureTextEntry={true} clearButtonMode='always'/>
				<AppButton onPress={() => handleButtonRegistrationClick()} title={t('Registrovat')}/>
			</RegisterInnerContainer>
		</RegisterContainer>
	)
}

Register.propTypes = {
	where: PropTypes.string
}
