import {basicMixin} from '../abstract/styled/mixins'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const ModalContentContainer = styled.View`
  	position: relative;
	padding: ${props => props.containerPadding? props.containerPadding: '22px'};
  	border-radius: 12px;
  	border-color: rgba(0, 0, 0, 0.1);
  	${basicMixin}
}
`

export default function ModalContent({children, containerPadding, ...rest}) {
	return (
		<ModalContentContainer containerPadding={containerPadding} {...rest}>
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
