import {FontAwesome} from '@expo/vector-icons'
import {adjustFont} from '../../../utils'
import AppButton from '@engine/abstract/AppButton'
import PropTypes from 'prop-types'
import React from 'react'
import styled, {useTheme} from 'styled-components/native'

const _CloseButton = styled(AppButton)`
  position: absolute;
  right: ${props => `${props.theme.components.Modal.CloseButton.iconSize}px`};
  top: ${props => `${props.theme.components.Modal.CloseButton.iconSize}px`};;
`

export default function CloseButton({isVisible, setIsVisible}) {
	const theme = useTheme()

	const handleButtonPress = () => {
		setIsVisible(!isVisible)
	}

	return (
		<_CloseButton withStyles={false} onPress={() => handleButtonPress()}>
			<FontAwesome name="close" size={adjustFont(theme.components.Modal.CloseButton.iconSize)} color={theme.components.Modal.CloseButton.iconColor} />
		</_CloseButton>
	)
}

CloseButton.propTypes = {
	isVisible: PropTypes.bool,
	setIsVisible: PropTypes.func
}
