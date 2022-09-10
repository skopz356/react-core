import * as Localization from 'expo-localization'
import {initReactI18next} from 'react-i18next'
import i18n from 'i18next'
import translations from '~/translations'

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
		//debug: true,
		fallbackLng: 'cs',
		// cache: {
		//   enabled: true
		// },
		interpolation: {
			escapeValue: false, // not needed for react as it does escape per default to prevent xss!
		},
		keySeparator: false,

		react: {
			useSuspense: false,
		},
		resources: translations
	})

export default i18n
