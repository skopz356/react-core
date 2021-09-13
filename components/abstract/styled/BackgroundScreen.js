import {useTheme} from 'styled-components/native'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const _BackgroundScreen = styled.ImageBackground`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.bgColor};
	color: ${props => props.theme.textColor};
`

export function BackgroundScreen({children}) {
	const theme = useTheme()
	return(
		<_BackgroundScreen source={theme.light? global.config.components.BackGroundScreen.pathLight(): global.config.components.BackGroundScreen.pathDark()}>
			{children}
		</_BackgroundScreen>
	)
}

BackgroundScreen.propTypes = {
	children: PropTypes.node
}
