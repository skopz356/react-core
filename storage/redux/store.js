import {Platform} from 'react-native'
import { applyMiddleware, compose, createStore} from 'redux'
import { createMigrate, persistReducer, persistStore } from 'redux-persist'
import { getFirebase } from 'react-redux-firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import migrations from '~/migrations'
import reducer from './reducers'
import thunk from 'redux-thunk'

const persistConfig = {
	blacklist: ['firebase'],
	key: global.config.appName,
	migrate: createMigrate(migrations, {debug: global.config.debug}),
	storage: AsyncStorage,
	version: global.config.reduxVersion
}

let middlewares = []

if(global.config.firebase) {
	middlewares.push(thunk.withExtraArgument(getFirebase))
}else {
	middlewares.push(thunk)
}


const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
	let store = createStore(
		persistedReducer,
		Platform.OS === 'web' ?
			compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
			:
			compose(applyMiddleware(...middlewares)),
	)
	let persistor = persistStore(store)
	return { persistor, store }
}
