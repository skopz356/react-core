import {SET_SHOW_WELCOME_SCREEN, SET_THEME} from './types'
import { combineReducers } from 'redux'
import appReducer from '~/storage/reducers'

const initialState = {
	showWelcomeScreen: true,
	theme: 'light',
}

function applySetShowWelcomeScreen(state, action) {
	return {
		...state,
		showWelcomeScreen: action.payload
	}
}

function applySetTheme(state, action) {
	return {
		...state,
		theme: action.payload
	}
}

function coreReducer(state = initialState, action) {
	switch (action.type) {
	case SET_THEME:
		return applySetTheme(state, action)
	case SET_SHOW_WELCOME_SCREEN:
		return applySetShowWelcomeScreen(state, action)
	default:
		return state
	}
}

export default combineReducers({appReducer, coreReducer})
