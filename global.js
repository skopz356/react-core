import config from '~/global'
const merge = require('lodash.merge')


global.config = merge(
	{
		// Whether should be used firebase analytics
		analytics: false,
		components: {
			AppLink: {
				primary: false,
			},
			Login: {
				authenticationErrors: {
					'auth/user-not-found': 'No user found',
					'auth/wrong-password': 'Wrong password',
					'default': 'Entered data do not match'
				},
				onLoginButtonPress: null, // type: func
				showGoogleWidget: false,
				showLinkToRegistrationScreen: true,
				where: 'Home' // Url to redirect after successful login, can be modified with where prop on component
			},
			LogoutButton: {
				where: 'Welcome' // Where to redirect after successful login
			},
			Register: {
				// Url to redirect after successful registration, can be modified with where prop on component
				authenticationErrors: {
					'auth/email-already-in-use': 'The email address is already in use',
					'auth/weak-password': 'Entered password is too weak',
					'default': 'Registration was not successful',
					'passwords-dont-match': 'Entered passwords dont match'
				},
				where: 'Home',
			},
			Screen: {
				// Component to display on every screen
				componentOnEveryScreen: false
			}
		},

		firebase: null,

		// Main font family used in AppText component
		mainFont: 'System',

		// Whether should be used logic with WelcomeScreen etc.
		navigationTopHeader: {
			visible: false
		},

		welcomeScreenLogic: true,

	}, config)
