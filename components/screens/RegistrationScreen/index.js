import React from 'react'
import Register from '@engine/base/Register'
import Screen from '@engine/abstract/styled/Screen'

export default function RegistrationScreen() {
	return (
		<Screen>
			<Register/>
		</Screen>
	)
}

RegistrationScreen._name = 'Registration'
