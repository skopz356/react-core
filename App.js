import './i18n'
import {ConditionalWrap} from './utils'
import {NavigationContainer} from '@react-navigation/native'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {screens} from '~/components/screens/index'
import { useFonts } from 'expo-font'
import AppLoadingScreen from './components/abstract/AppLoadingScreen'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import ThemeProvider from './components/abstract/ThemeProvider'
import WelcomeScreen from '~/components/screens/WelcomeScreen'
import configureStore from './storage/redux/store'

let firebaseSetup
if(global.config.firebase) {
	firebaseSetup = require('./storage/firebase.setup')
}

let {store, persistor} = configureStore()

const Stack = createNativeStackNavigator()

export default function App({children}) {
	const [showWelcomeScreen, setShowWelcomeScreen] = useState(true)
	let [fontsLoaded] = useFonts(global.config.fonts ? global.config.fonts: null)

	if (global.config.fonts){
		if (!fontsLoaded) {
			return (
				<Provider store={store}>
					<ThemeProvider>
						<AppLoadingScreen/>
					</ThemeProvider>
				</Provider>
			)
		}
	}

	const beforeLift = () => {
		if (store.getState().core.showWelcomeScreen) {
			setShowWelcomeScreen(false)
		}
	}

	console.log(global.config)

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<ConditionalWrap condition={global.config.firebase} wrap={children => <firebaseSetup.FirebaseReduxProvider store={store}>{children}</firebaseSetup.FirebaseReduxProvider>}>
					<ThemeProvider>
						<PersistGate loading={<AppLoadingScreen/>} persistor={persistor} onBeforeLift={global.config.welcomeScreenLogic? beforeLift: () => {}}>
							<NavigationContainer linking={{config: global.config.screensConfig}}>
								<Stack.Navigator screenOptions={{
									headerShown: global.config.navigationTopHeader.visible
								}}>
									{showWelcomeScreen &&
							<Stack.Screen name={WelcomeScreen._name} component={WelcomeScreen}/>
									}
									{screens.map(screen => {
										return <Stack.Screen name={screen._name} component={screen} key={screen._name} options={screen.options}/>
									})}
								</Stack.Navigator>
								{children}
							</NavigationContainer>
							<StatusBar style="auto"/>
						</PersistGate>
					</ThemeProvider>
				</ConditionalWrap>
			</SafeAreaProvider>
		</Provider>
	)
}

App.propTypes = {
	children: PropTypes.node
}
