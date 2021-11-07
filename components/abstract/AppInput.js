import {Input} from 'react-native-elements'
import { OutlinedTextField } from 'rn-material-ui-textfield'
import {Platform} from 'react-native'
import {ifValue} from '../../utils'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const AppInputContainer = styled.View`
	width: ${props => ifValue(props.width, '100%')};
	padding: ${props => ifValue(props.padding, props.theme.components.AppInput.padding)};
`

const _AppInput = styled(Platform.OS !== 'web' ? OutlinedTextField: Input).attrs(props => ({
	placeholderTextColor: ifValue(props.theme.components.AppInput.placeholderTextColor, ifValue(props.theme.components.AppInput.color, props.theme.textColor)),
	tintColor: ifValue(props.outlineColor, props.theme.components.AppInput.outlineColor)
}))`
	color: ${props => ifValue(props.color, ifValue(props.theme.components.AppInput.color, props.theme.textColor))};
`
/*
* Display, specialized TextInput on mobile and on web standard Input from react-native-element
* mobile: placeholder is not shown
* web: use placeholder and label
* */
const AppInput = React.forwardRef(({padding, color, onChangeText, onFocus, value, label, placeholder, clearButtonMode, secureTextEntry, outlineColor}, ref) => {
	return (
		<AppInputContainer>
			<_AppInput
				label={label}
				color={color}
				ref={ref}
				placeholder={Platform.OS === 'web' ? placeholder: null}
				onChangeText={onChangeText}
				onBlur={onFocus}
				value={value}
				clearButtonMode={clearButtonMode}
				secureTextEntry={secureTextEntry}
				outlineColor={outlineColor}
				padding={padding}
			/>
		</AppInputContainer>
	)
})

AppInput.propTypes = {
	clearButtonMode: PropTypes.string,
	color: PropTypes.string,
	forwardedRef: PropTypes.any,
	label: PropTypes.string,
	onChangeText: PropTypes.func,
	onFocus: PropTypes.func,
	outlineColor: PropTypes.string,
	padding: PropTypes.string,
	placeholder: PropTypes.string,
	secureTextEntry: PropTypes.bool,
	value: PropTypes.any
}

AppInput.displayName = 'AppInput'

export default AppInput

