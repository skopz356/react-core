import {connect} from 'react-redux'
import { isLoaded} from 'react-redux-firebase'
import ActivityIndicator from '@engine/abstract/AppLoadingScreen/ActivityIndicator'
import React from 'react'


export const AuthLoadingWrapper = Component =>
	class AuthLoadingWrapper extends React.Component {
		render() {
			if (!isLoaded(!this.props.auth)) {
				return (
					<ActivityIndicator/>
				)
			}
			return (
				<Component {...this.props}/>
			)
		}
	}

export const authRedirect = (Component, ifSigned=false, where = 'Home' ) =>
	// eslint-disable-next-line react/display-name
	class extends React.Component {
		componentDidMount() {
			this.checkAuthentication()
		}

		checkAuthentication() {
			if(!ifSigned) {
				if(this.props.auth && this.props.auth.isEmpty) {
					this.props.navigation.navigate(where)
				}
			}else {
				if(this.props.auth && !this.props.auth.isEmpty) {
					this.props.navigation.navigate(where)
				}
			}
		}

		render() {
			return (
				<Component {...this.props}/>
			)
		}
	}

const _enhance = connect(
	({ firebase: { auth, profile } }) => ({
		auth,
		profile
	})
)

export const enhance = Component => _enhance(AuthLoadingWrapper(Component))


