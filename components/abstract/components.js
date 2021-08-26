import ModalContent from '../modals/ModalContent'
import NativeModal from 'react-native-modal'
import PropTypes from 'prop-types'
import React from 'react'

export function Modal({isVisible, setIsVisible ,children, justify, align, styles}) {
	return (
		<NativeModal isVisible={isVisible}>
			<ModalContent justify={justify} align={align}>
				{children}
			</ModalContent>
		</NativeModal>
	)
}

Modal.propTypes = {
	children: PropTypes.node,
	isVisible: PropTypes.bool,
	setIsVisible: PropTypes.func,
}
