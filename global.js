import config from '~/global'
const merge = require('lodash.merge')


global.config = merge(
	{analytics: false,
		components: {
			AppLink: {
				primary: false,
			},
			LoginScreen: {
				showGoogleWidget: false,
			},
			Screen: {
				// Component to display on every screen
				componentOnEveryScreen: false
			}
		},

		firebase: null,

		// Whether should be used firebase analytics
		mainFont: 'Arial',

		// Whether should be used logic with WelcomeScreen etc.
		navigationTopHeader: {
			visible: false
		},
		// Main font family used in AppText component
		welcomeScreenLogic: true,

	}, config)
