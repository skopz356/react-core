import {TouchableOpacity} from 'react-native'
import {useTheme} from 'styled-components/native'
import AppText from './AppText'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  padding: ${props => props.padding? props.padding: '10px 12px'};
  background-color: ${props => props.bgColor ? props.bgColor : props.secondary ? props.theme.buttonSecondaryBgColor : props.theme.buttonBgColor};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  margin-vertical: ${props => props.marginY ? props.marginY : '10px'};
  margin-horizontal: ${props => props.marginX ? props.marginX : 0};
  elevation: 20;
  width: ${props => props.width ? props.width : 'auto'};
`

export default function AppButton({onPress, onLongPress, title, children, marginX, marginY, secondary, color, width, bgColor, fontSize, padding, withStyles=true}) {
	const theme = useTheme()
	return (
		<React.Fragment>
			{withStyles
				? <ButtonContainer onPress={onPress} onLongPress={onLongPress} marginX={marginX} marginY={marginY} secondary={!!secondary} width={width} bgColor={bgColor} padding={padding}>
					{title &&
				<AppText h4 color={color? color : secondary ? theme.buttonSecondaryColor : theme.buttonColor} fontSize={fontSize}>{title}</AppText>
					}
					{children}
				</ButtonContainer>
				: <TouchableOpacity onPress={onPress} onLongPress={onLongPress} marginX={marginX} marginY={marginY} secondary={!!secondary}
					width={width} bgColor={bgColor}>
					{title &&
				<AppText h4 color={secondary ? theme.buttonSecondaryColor : theme.buttonColor}>{title}</AppText>
					}
					{children}
				</TouchableOpacity>
			}
		</React.Fragment>

	)
}

AppButton.propTypes = {
	children: PropTypes.node,
	marginX: PropTypes.string,
	marginY: PropTypes.string,
	onLongPress: PropTypes.func,
	onPress: PropTypes.func,
	secondary: PropTypes.bool,
	title: PropTypes.string,
	width: PropTypes.string,

}
