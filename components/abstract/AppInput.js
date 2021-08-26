import {useTheme} from 'styled-components/native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

import {TextInput} from 'react-native'

const AppInputText = styled.TextInput`
  color: ${props => props.theme.textColor};
  text-align: center;
`


const AppInput = React.forwardRef((props, ref) => {
	const theme = useTheme()

	return (
		<TextInput
			style={{color: theme.textColor, fontSize: 25, textAlign: 'center'}}
			ref={ref}
			onChangeText={props.onChangeText}
			onBlur={props.onFocus}
			value={props.value}
			placeholder={props.placeholder}
			placeholderTextColor={theme.textColor}
			clearButtonMode={props.clearButtonMode}
		/>
	)
})

AppInput.propTypes = {
	clearButtonMode: PropTypes.string,
	forwardedRef: PropTypes.any,
	onChangeText: PropTypes.func,
	onFocus: PropTypes.func,
	placeholder: PropTypes.string,
	value: PropTypes.any,
}

AppInput.displayName = 'AppInput'

export default AppInput

