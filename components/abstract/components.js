import ModalContent from '../modals/ModalContent'
import NativeModal from 'react-native-modal'
import PropTypes from 'prop-types'
import React from 'react'

export function Modal({isVisible ,children, justify, align}) {
	// TODO: Add support for close button

	return (
		<NativeModal isVisible={isVisible}>
			<ModalContent justify={justify} align={align}>
				{children}
			</ModalContent>
		</NativeModal>
	)
}

Modal.propTypes = {
	align: PropTypes.string,
	children: PropTypes.node,
	isVisible: PropTypes.bool,
	justify: PropTypes.string,
	setIsVisible: PropTypes.func,
}
