import ModalCloseButton from '@engine/abstract/Modal/CloseButton'
import ModalContent from '../../modals/ModalContent'
import NativeModal from 'react-native-modal'
import PropTypes from 'prop-types'
import React from 'react'

export default function Modal({isVisible, setIsVisible, showCloseButton, CloseButton=ModalCloseButton, children, ...rest}) {
	return (
		<NativeModal isVisible={isVisible}>
			<ModalContent {...rest}>
				{(setIsVisible && showCloseButton) &&
					<CloseButton isVisible={isVisible} setIsVisible={setIsVisible}/>
				}
				{children}
			</ModalContent>
		</NativeModal>
	)
}

Modal.propTypes = {
	CloseButton: PropTypes.any,
	align: PropTypes.string,
	children: PropTypes.node,
	isVisible: PropTypes.bool,
	justify: PropTypes.string,
	setIsVisible: PropTypes.func,
	showCloseButton: PropTypes.bool,
}
