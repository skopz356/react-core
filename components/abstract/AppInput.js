import {ifValue} from '../../utils'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'


const _AppInput = styled.TextInput.attrs(props => ({
	placeholderTextColor: ifValue(props.theme.components.AppInput.placeholderTextColor, ifValue(props.theme.components.AppInput.color, props.theme.textColor))
}))`
	color: ${props => ifValue(props.color, ifValue(props.theme.components.AppInput.color, props.theme.textColor))}
  	
`

const AppInput = React.forwardRef(({color, onChangeText, onFocus, value, placeholder, clearButtonMode, secureTextEntry}, ref) => {

	return (
		<_AppInput
			color={color}
			ref={ref}
			onChangeText={onChangeText}
			onBlur={onFocus}
			value={value}
			placeholder={placeholder}
			clearButtonMode={clearButtonMode}
			secureTextEntry={secureTextEntry}
		/>
	)
})

AppInput.propTypes = {
	clearButtonMode: PropTypes.string,
	color: PropTypes.string,
	forwardedRef: PropTypes.any,
	onChangeText: PropTypes.func,
	onFocus: PropTypes.func,
	placeholder: PropTypes.string,
	secureTextEntry: PropTypes.bool,
	value: PropTypes.any,
}

AppInput.displayName = 'AppInput'

export default AppInput

