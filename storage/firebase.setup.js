import 'firebase/auth'
import 'firebase/database'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import React from 'react'
import firebase from 'firebase/app'

firebase.initializeApp(global.config.firebase.config)

let FirebaseReduxProvider = ({store, children}) => {
	const rrfConfig = {
		userProfile: 'users'
	}

	const rrfProps = {
		config: rrfConfig,
		dispatch: store.dispatch,
		firebase: firebase,
	}

	return (
		<ReactReduxFirebaseProvider {...rrfProps}>
			{children}
		</ReactReduxFirebaseProvider>
	)
}

FirebaseReduxProvider.propTypes = {
	children: PropTypes.node,
	store: PropTypes.object
}

exports.FirebaseReduxProvider = FirebaseReduxProvider

