import AppButton from '@engine/abstract/AppButton'
import PropTypes from 'prop-types'
import React from 'react'

export default function GoogleButton({title}) {
	return (
		<AppButton onPress={() => {}} title={title}/>
	)
}

GoogleButton.propTypes = {
	title: PropTypes.any
}
