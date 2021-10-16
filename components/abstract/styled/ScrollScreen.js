import {ScrollView} from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const ScrollScreenContainer = styled(ScrollView)`
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  position: relative;
`

const BottomBar = styled.View`
  width: 100%;
  background-color: ${props=> props.theme.bgColor};
`

export default function ScrollScreen({children, barContent}) {
	return (
		<>
			<ScrollScreenContainer>
				{global.config.components.Screen.componentOnEveryScreen &&
					React.createElement(global.config.components.Screen.componentOnEveryScreen)
				}
				{children}
			</ScrollScreenContainer>
			{barContent &&
				<BottomBar>
					{barContent}
				</BottomBar>
			}
		</>
	)
}

ScrollScreen.propTypes = {
	barContent: PropTypes.node,
	children: PropTypes.node,
}
