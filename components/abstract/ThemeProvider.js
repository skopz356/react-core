import {ThemeProvider as _ThemeProvider} from 'styled-components/native'
import {connect} from 'react-redux'
import {darkTheme, lightTheme} from './theme'
import {useOrientation} from '~/core/utils'
import PropTypes from 'prop-types'
import React from 'react'

function ThemeProvider({theme, children}) {
	const orientation = useOrientation()
	return (
		<_ThemeProvider theme={theme === 'light' ? {'orientation': orientation, ...lightTheme}: {'orientation': orientation, ...darkTheme}}>
			{children}
		</_ThemeProvider>
	)
}

ThemeProvider.propTypes = {
	children: PropTypes.node,
	theme: PropTypes.string
}

const mapStateToProps = (state) => {
	return {
		theme: state.core.theme
	}
}

export default connect(mapStateToProps)(ThemeProvider)
