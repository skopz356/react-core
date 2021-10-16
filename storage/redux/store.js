import { createMigrate, persistReducer, persistStore } from 'redux-persist'
import {createStore} from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import migrations from '~/migrations'
import reducer from './reducers'

const persistConfig = {
	blacklist: ['firebase'],
	key: global.config.appName,
	migrate: createMigrate(migrations, {debug: global.config.debug}),
	storage: AsyncStorage,
	version: global.config.reduxVersion
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
	let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	let persistor = persistStore(store)
	return { persistor, store }
}
