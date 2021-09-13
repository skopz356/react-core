import config from '~/global'

global.config = {
	...config,
	...
		{
			components: {
				BackGroundScreen: {
					pathLight: () => require('~/assets/svg/native/background.png'),
					pathDark: () => require('~/assets/svg/native/background_dark.png')
				}
			}
		}
}

