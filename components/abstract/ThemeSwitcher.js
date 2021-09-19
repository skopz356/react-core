import {SET_THEME} from '../../storage/redux/types'
import {Switch} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import AppText from './AppText'
import React, {useState} from 'react'
import styled from 'styled-components/native'

const ThemeSwitcherContainer = styled.View`
  justify-content: space-between;
`

export default function ThemeSwitcher() {
	const {t} = useTranslation()
	const theme = useSelector(state => state.core.theme)
	const [isEnabled, setIsEnabled] = useState(theme === 'dark')
	const dispatch = useDispatch()

	const toggleSwitch = () => {
		setIsEnabled(!isEnabled)
		dispatch({payload: !isEnabled ? 'dark' : 'light', type: SET_THEME})
	}

	return (
		<ThemeSwitcherContainer>
			<AppText h5>
				{t('Téma')}
			</AppText>
			<Switch
				trackColor={{false: '#767577', true: '#81b0ff'}}
				thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor="#3e3e3e"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</ThemeSwitcherContainer>
	)
}
