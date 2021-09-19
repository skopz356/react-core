import './i18n'
import {NavigationContainer} from '@react-navigation/native'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {StatusBar} from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {screens} from '~/components/screens/index'
import AppLoadingScreen from './components/abstract/AppLoadingScreen'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import ThemeProvider from './components/abstract/ThemeProvider'
import WelcomeScreen from '~/components/screens/WelcomeScreen'
import configureStore from './storage/redux/store'
import { useFonts } from 'expo-font'

let {store, persistor} = configureStore()

const Stack = createNativeStackNavigator()

export default function App({children}) {
	const [showWelcomeScreen, setShowWelcomeScreen] = useState(true)

	if (global.config.fonts){
		let [fontsLoaded] = useFonts(global.config.fonts)
		if (!fontsLoaded) {
			return <AppLoadingScreen/>
		}
	}

	const beforeLift = () => {
		if (store.getState().core.showWelcomeScreen) {
			setShowWelcomeScreen(false)
		}
	}

	return (
		<Provider store={store}>
			<PersistGate loading={<AppLoadingScreen/>} persistor={persistor} onBeforeLift={global.config.welcomeScreenLogic? beforeLift: () => {}}>
				<ThemeProvider>
					<NavigationContainer>
						<Stack.Navigator screenOptions={{
							headerShown: global.config.navigationTopHeader.visible
						}}>
							{!showWelcomeScreen &&
							<Stack.Screen name={WelcomeScreen._name} component={WelcomeScreen}/>
							}
							{screens.map(screen => {
								return <Stack.Screen name={screen._name} component={screen} key={screen._name} options={screen.options}/>
							})}
						</Stack.Navigator>
					</NavigationContainer>
					{children}
					<StatusBar style="auto"/>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	)
}

App.propTypes = {
	children: PropTypes.node
}
