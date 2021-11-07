/* eslint-disable */
// Colors stolen from https://coolors.co/000000-14213d-fca311-e5e5e5-ffffff
const merge = require('lodash.merge')
import {css} from 'styled-components/native'
import {darkTheme as _darkTheme, lightTheme as _lightTheme} from '~/theme'

export const lightTheme = merge(
	{
		bgColor: '#e5e5e5',
		errorColor: '#CE4257',
		errorBgColor: '#FF7F51',
		components: {
			AppButton: {
				buttonBgColor: '#14213d',
				buttonColor: '#e5e5e5',
				buttonSecondaryBgColor: '#FCA311',
				buttonSecondaryColor: '#e5e5e5',
			},
			AppInput: {
				color: null,
				placeholderTextColor: null,
				outlineColor: '#FCA311',
				padding: '2.5px 0'
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
			},
			ErrorContainer: {
				styles: (props) => css`
					padding: 20px;
					width: 100%;
				`
			},
			Login: {
				containerStyles: (props) => css`
					width: 100%;
				`,
				innerContainerStyles: (props) => css`
					padding-top: 20px;
				`
			},
			Register: {
				containerStyles: (props) => css`
					width: 100%;
				`,
				innerContainerStyles: (props) => css`
					padding-top: 20px;
				`
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
				placeholderTextColor: null,
				outlineColor: '#E0FBFC'
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
			},
			ErrorContainer: {
				styles: (props) => css`
					padding: 20px;
					width: 100%;
				`
			},
			Login: {
				containerStyles: (props) => css`
					width: 100%;
				`,
				innerContainerStyles: (props) => css`
					padding-top: 20px;
				`
			},
			Register: {
				containerStyles: (props) => css`
					width: 100%;
				`,
				innerContainerStyles: (props) => css`
					padding-top: 20px;
				`
			}
		},
		iconsColor: '#E0FBFC',
		light: false,
		textColor: '#E0FBFC',

	},
	_darkTheme
)

/* eslint-enable */
