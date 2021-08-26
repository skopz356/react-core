import { AntDesign } from '@expo/vector-icons'
import {useTranslation} from 'react-i18next'
import AppButton from './AppButton'
import React, {useState} from 'react'
import styled from 'styled-components/native'
import {useTheme} from 'styled-components/native'

const UserLevelButtonContainer = styled.View`
	position: absolute;
	top: 50px;
	right: 20px;
`


export default function UserLevelButton({visible ,setVisible}) {
	const {t} = useTranslation()
	const theme = useTheme()

	return (
		<UserLevelButtonContainer>
			<AppButton
				onPress={() => setVisible(!visible)}
				withStyles={false}>
				<AntDesign name="user" size={24} color={theme.buttonSecondaryBgColor} />
			</AppButton>
		</UserLevelButtonContainer>
	)
}
