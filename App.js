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

let {store, persistor} = configureStore()

const Stack = createNativeStackNavigator()

export default function App({children}) {
	const [showWelcomeScreen, setShowWelcomeScreen] = useState(true)
	const beforeLift = () => {
		if (store.getState().showWelcomeScreen) {
			setShowWelcomeScreen(false)
		}
	}

	return (
		<Provider store={store}>
			<PersistGate loading={<AppLoadingScreen/>} persistor={persistor} onBeforeLift={global.welcomeScreenLogic? beforeLift: () => {}}>
				<ThemeProvider>
					<NavigationContainer>
						<Stack.Navigator headerMode={null}>
							{showWelcomeScreen &&
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
