import {AuthLoadingWrapper, authRedirect, enhance} from '../../../decorators'
import LogoutButton from '../../LogoutButton'
import React from 'react'
import Screen from '../../abstract/styled/Screen'

function UserSettingsScreen() {
	return (
		<Screen>
			<LogoutButton/>
		</Screen>
	)
}

let enhancedUserSettingsScreen = enhance(authRedirect(AuthLoadingWrapper(UserSettingsScreen)))
enhancedUserSettingsScreen._name = 'UserSettings'

export default enhancedUserSettingsScreen
