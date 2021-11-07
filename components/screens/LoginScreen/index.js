import Login from '@engine/base/Login'
import React from 'react'
import Screen from '@engine/abstract/styled/Screen'

export default function LoginScreen() {

	return (
		<Screen>
			<Login/>
		</Screen>
	)
}

LoginScreen._name = 'Login'
