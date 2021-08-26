import './i18n'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {StatusBar} from 'expo-status-bar'
import {createStackNavigator} from '@react-navigation/stack'
import {screens} from './components/screens/index'
import { useFonts } from 'expo-font'
import AppLoadingScreen from './components/abstract/AppLoadingScreen'
import React, {useState} from 'react'
import ThemeProvider from './components/abstract/ThemeProvider'
import configureStore from './storage/redux/store'

let {store, persistor} = configureStore()

const Stack = createStackNavigator()

export default function App() {
    let fontsLoaded = true;
    /*let [fontsLoaded] = useFonts({
        'Itim': require('./assets/fonts/Itim-Regular.ttf'),
    })*/

    const [showWelcomeScreen, setShowWelcomeScreen] = useState(true)
    const [visible, toggleVisible] = useState(false)
    const beforeLift = () => {
        if (store.getState().showWelcomeScreen) {
            setShowWelcomeScreen(false)
        }
    }
    if (!fontsLoaded) {
        return <AppLoadingScreen/>
    }
    return (
        <Provider store={store}>
            <PersistGate loading={<AppLoadingScreen/>} persistor={persistor} onBeforeLift={beforeLift}>
                <ThemeProvider>
                    <NavigationContainer>
                        <Stack.Navigator headerMode={null}>
                            <Stack.Screen name={WelcomeScreen._name} component={WelcomeScreen}/>
                            {screens.map(screen => {
                                return <Stack.Screen name={screen._name} component={screen} key={screen._name}
                                                     options={screen.options}/>
                            })}
                        </Stack.Navigator>
                    </NavigationContainer>
                    <StatusBar style="auto"/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
