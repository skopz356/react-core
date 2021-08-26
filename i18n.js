import * as Localization from 'expo-localization'
import {initReactI18next} from 'react-i18next'
import i18n from 'i18next'

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
	async: true,

	cacheUserLanguage: () => {
	},
	// flags below detection to be async
	detect: callback => {
		return Localization.getLocalizationAsync().then(({locale}) => {
			callback(locale)
		})
	},
	init: () => {
	},
	type: 'languageDetector',
}
i18n
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'en',
		// cache: {
		//   enabled: true
		// },
		interpolation: {
			escapeValue: false, // not needed for react as it does escape per default to prevent xss!
		},
		
		
		
		keySeparator: false,
		resources: {
			'cs': {
				translation: {
					'Další': 'Další',
					'Nastavení': 'Nastavení',
					'Téma': 'Téma',
					'Vylosovat aktivitu': 'Vylosovat aktivitu',
					'Vítejte': 'Vítejte',
					'Všechny': 'Všechny',
					'Zpět': 'Zpět'
				}
			},
			'en': {
				translation: {
					'Další': 'Next',
					'Nastavení': 'Settings',
					'Téma': 'Theme',
					'Vylosovat aktivitu': 'To lottery',
					'Vítejte': 'Welcome',
					'Všechny': 'Check all!',
					'Zpět': 'Back'
				}
			},
			'en-GB': {
				translation: {
					'Další': 'Next',
					'Nastavení': 'Settings',
					'Téma': 'Theme',
					'Vylosovat aktivitu': 'To lottery',
					'Vítejte': 'Welcome',
					'Všechny': 'Check all!',
					'Zpět': 'Back'
				}
			},
			'en-US': {
				translation: {
					'Další': 'Next',
					'Nastavení': 'Settings',
					'Téma': 'Theme',
					'Vylosovat aktivitu': 'To lottery',
					'Vítejte': 'Welcome',
					'Všechny': 'Check all!',
					'Zpět': 'Back'
				}
			}
		},
	})

export default i18n