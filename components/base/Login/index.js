import {useFirebase} from 'react-redux-firebase'
import {useNavigation} from '@react-navigation/native'
import {useTranslation} from 'react-i18next'
import AppButton from '@engine/abstract/AppButton'
import AppInput from '@engine/abstract/AppInput'
import AppLink from '@engine/abstract/AppLink'
import AppText from '@engine/abstract/AppText'
import ErrorContainer from '@engine/base/Login/ErrorContainer'
import GoogleButton from '@engine/base/Login/GoogleButton'
import LoginContainer from '@engine/base/Login/LoginContainer'
import PropTypes from 'prop-types'
import React, {useRef, useState} from 'react'
import styled from 'styled-components/native'

const LoginInnerContainer = styled.View`
	${(props) => props.theme.components.Login.innerContainerStyles(props)}
`

export default function Login({where}) {
	const {t} = useTranslation()
	const navigation = useNavigation()
	const firebase = useFirebase()
	const inputEmailRef = useRef()
	const inputPasswordRef = useRef()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState(() => new Set())

	const handleLoginButtonPress = () => {
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
			setErrors()
			firebase.login({
				email, password
			}).then(_data => {
				navigation.navigate(where ? where: global.config.components.Login.where)
			}).catch(err => {
				let errorCode = err.code
				if(errorCode in global.config.components.Login.authenticationErrors) {
					setErrors(() => new Set([global.config.components.Login.authenticationErrors[errorCode]]))
				}else {
					setErrors(() => new Set([global.config.components.Login.authenticationErrors['default']]))
				}
			})
		})
	}

	const handleEmailOnPress = (value) => {
		setEmail(value)
		if(errors) {
			resetErrors()
		}
	}

	const resetErrors = () => {
		setErrors(() => new Set())
	}

	return (
		<LoginContainer>
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
			<LoginInnerContainer>
				<AppInput ref={inputEmailRef} onChangeText={(value) => handleEmailOnPress(value)} value={email} label={t('Zadejte svůj email')}
					clearButtonMode='always'/>
				<AppInput ref={inputPasswordRef} onChangeText={setPassword} value={password}
					label={t('Zadejte heslo')} secureTextEntry={true} clearButtonMode='always'/>
				<AppButton title={t('Přihlásit')}
					onPress={() => global.config.components.Login.onLoginButtonPress ? global.config.components.Login.onLoginButtonPress(handleLoginButtonPress, firebase) : handleLoginButtonPress()}/>
				{global.config.components.Login.showGoogleWidget &&
				<GoogleButton title={t('Přihlasit se pomocí Google')}/>
				}
				{global.config.components.Login.showLinkToRegistrationScreen &&
				<AppLink where='Registration' title={t('Zaregistrujte se')}/>
				}
			</LoginInnerContainer>
		</LoginContainer>
	)
}

Login.propTypes = {
	where: PropTypes.string
}
