import PropTypes from 'prop-types'
import React from 'react'
import styled, {css} from 'styled-components/native'

const ModalContentContainer = styled.View`
	padding: ${props => props.containerPadding? props.containerPadding: '22px'};
  	justify-content: ${props => props.justify ? props.justify : 'center'};
  	align-items: ${props => props.align ? props.align : 'center'};;
  	border-radius: 12px;
  	border-color: rgba(0, 0, 0, 0.1);
	${props => props.bgColor &&
		css`
			background-color: ${props.bgColor};
		`
}
`

export default function ModalContent({children, justify, align, containerPadding, bgColor}) {
	return (
		<ModalContentContainer containerPadding={containerPadding} justify={justify} align={align} bgColor={bgColor}>
			{children}
		</ModalContentContainer>
	)
}

ModalContent.propTypes = {
	align: PropTypes.string,
	bgColor: PropTypes.string,
	children: PropTypes.node,
	containerPadding: PropTypes.string,
	justify: PropTypes.string,
}
