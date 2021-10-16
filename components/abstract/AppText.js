// https://dev.to/jasurkurbanovinit/how-to-create-custom-fully-responsive-text-component-in-react-native-51d8
import {adjustFont} from '../../utils'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const AppTextContainer = styled.Text`
  text-align: ${props => props.align? props.align: 'center'};
  color: ${props => props.color ? props.color : props.theme.textColor};
  margin-vertical: ${props => props.marginY ? props.marginY : 0};
  margin-horizontal: ${props => props.marginX ? props.marginX : 0};
`

export default function AppText({
	h0, h1, h2, h3, h4, h5, p, bold,
	italic, children, uppercase, align, marginX, marginY, color, fontSize, fontFamily, lineHeight
}) {
	return (
		<AppTextContainer style={[
			h0 && {fontSize: adjustFont(55)},
			h1 && {fontSize: adjustFont(38)},
			h2 && {fontSize: adjustFont(28)},
			h3 && {fontSize: adjustFont(20)},
			h4 && {fontSize: adjustFont(18)},
			h5 && {fontSize: adjustFont(16)},
			p && {fontSize: adjustFont(12)},
			fontSize && {fontSize: adjustFont(fontSize)},
			bold && {fontWeight: 'bold'},
			italic && {fontStyle: 'italic'},
			uppercase && {textTransform: 'uppercase'},
			lineHeight && {lineHeight: lineHeight},
			{fontFamily: fontFamily? fontFamily: global.config.mainFont}
		]} marginX={marginX} marginY={marginY} color={color} align={align}>{children}</AppTextContainer>
	)
}

AppText.propTypes = {
	align: PropTypes.any,
	bold: PropTypes.bool,
	children: PropTypes.node,
	color: PropTypes.string,
	fontSize: PropTypes.number,
	h0: PropTypes.bool,
	h1: PropTypes.bool,
	h2: PropTypes.bool,
	h3: PropTypes.bool,
	h4: PropTypes.bool,
	h5: PropTypes.bool,
	italic: PropTypes.bool,
	lineHeight: PropTypes.number,
	marginX: PropTypes.string,
	marginY: PropTypes.string,
	p: PropTypes.bool,
	uppercase: PropTypes.bool,
}
