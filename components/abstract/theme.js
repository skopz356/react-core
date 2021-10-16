/* eslint-disable */
const merge = require('lodash.merge')
import {darkTheme as _darkTheme, lightTheme as _lightTheme} from '~/theme'

export const lightTheme = merge(
	{
		bgColor: '#E0FBFC',
		components: {
			AppButton: {
				buttonBgColor: '#EE6C4D',
				buttonColor: '#3D5A80',
				buttonSecondaryBgColor: '#293241',
				buttonSecondaryColor: '#E0FBFC',
			},
			AppInput: {
				color: null,
				placeholderTextColor: null
			},
			AppLoadingScreen: {
				color: '#000',
				size: 'large' // small, medium, large
			},
			Modal: {
				modalColor: '#E0FBFC',
				CloseButton: {
					iconColor: '#000',
					iconSize: 24,
					margin: 10
				}
			}
		},
		iconsColor: '#3D5A80',
		light: true,
		textColor: '#000',
	},
	_lightTheme
)

export const darkTheme = merge({
		bgColor: '#264653',
		components: {
			AppButton: {
				buttonBgColor: '#98c1d9',
				buttonColor: '#3D5A80',
				buttonSecondaryBgColor: '#E0FBFC',
				buttonSecondaryColor: '#3D5A80',
			},
			AppInput: {
				color: null,
				placeholderTextColor: null
			},
			AppLoadingScreen: {
				color: '#fff',
				size: 'large' // small, medium, large
			},
			Modal: {
				modalColor: '#E0FBFC',
				CloseButton: {
					iconColor: '#000',
					iconSize: 24,
					margin: 10
				}
			}
		},
		iconsColor: '#E0FBFC',
		light: false,
		textColor: '#E0FBFC',

	},
	_darkTheme
)

/* eslint-enable */
