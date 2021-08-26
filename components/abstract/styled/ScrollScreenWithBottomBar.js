import {ScrollScreen as _ScrollScreen} from '../styled'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components/native'

const BottomBar = styled.View`
  width: 100%;
  background-color: ${props=> props.theme.bgColor};
`

const ScrollScreen = styled(_ScrollScreen)`
`

export default function ScrollScreenWithBottomBar({children, barContent}) {
	return (
		<>
			<ScrollScreen>
				{children}
			</ScrollScreen>
			<BottomBar>
				{barContent}
			</BottomBar>
		</>
	)
}

ScrollScreenWithBottomBar.propTypes = {
	barContent: PropTypes.node,
	children: PropTypes.node,
}
