import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const FlatList = styled.FlatList`
	width: 100%;
  background-color: ${props => props.theme.bgColor};
`

const BottomBar = styled.View`
  width: 100%;
  background-color: ${props => props.theme.bgColor};
`

export default function FlatListWithBottomBar(props) {
	return (
		<>
			<FlatList {...props} contentContainerStyle={{alignItems: 'center', paddingTop: 50, position: 'relative'}}>
				{global.config.components.Screen.componentOnEveryScreen &&
					React.createElement(global.config.components.Screen.componentOnEveryScreen)
				}
			</FlatList>
			<BottomBar>
				{props.barContent}
			</BottomBar>
		</>
	)
}

FlatListWithBottomBar.propTypes = {
	barContent: PropTypes.node,
	children: PropTypes.node,
}
