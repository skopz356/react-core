import config from '~/global'

global.config = {
	...
		{
			analytics: false, // Whether should be used firebase analytics
			mainFont: 'Arial', // Main font family used in AppText component
			welcomeScreenLogic: true, // Whether should be used logic with WelcomeScreen etc.
			navigationTopHeader: {
				visible: false
			}
		},
	...config
}
