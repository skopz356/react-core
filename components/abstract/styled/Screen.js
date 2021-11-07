import { SafeAreaView } from 'react-native-safe-area-context'
import {basicMixin} from './mixins'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'


const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  position: relative;
  ${basicMixin}
`

export default function Screen({children, ...rest}) {
	return (
		<ScreenContainer {...rest}>
			{global.config.components.Screen.componentOnEveryScreen &&
				React.createElement(global.config.components.Screen.componentOnEveryScreen)
			}
			{children}
		</ScreenContainer>
	)
}

Screen.propTypes = {
	children: PropTypes.node,
}
