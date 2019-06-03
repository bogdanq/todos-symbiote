import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import { userRoutes, getUser } from './features/user'
import { todoRoutes } from './features/todos'
import { NotFound } from './features/error'
import { Spinner } from './ui/atoms'
import history from './lib/history'

const routerList = [
	...userRoutes(), 
	...todoRoutes(), 
	{ component: NotFound }
]

const AppView = ({ isLoading, getUserStart }) => {
	useEffect(() => {
		getUserStart()
	}, [getUserStart])

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<Router history={history}>
					<Switch>
						{routerList.map((item, id) => {
							return <Route key={id} {...item} />
						})}
					</Switch>
				</Router>
			)}
		</>
	)
}

const mapDispachToProps = (dispatch) => ({
	getUserStart: () => dispatch(getUser()),
})

const mapStateToProps = (state) => ({
	isLoading: state.userReducer.isLoading,
})

const enhance = connect(
	mapStateToProps,
	mapDispachToProps,
)

AppView.propTypes = {
	isLoading: PropTypes.bool,
	getUserStart: PropTypes.func.isRequired,
}

AppView.defaultProps = {
	isLoading: false,
}

export const App = enhance(AppView)