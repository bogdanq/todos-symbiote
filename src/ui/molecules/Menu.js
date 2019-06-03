import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Wrapper } from '../atoms'
import { connect } from 'react-redux'
import { logOut } from '../../features/user'

const MenuView = ({ user, logOut }) => {
	return (
		<Wrapper params='header'>
			
			<NavLink to='/'>Список задач</NavLink>
			{
				user
				? <NavLink onClick={logOut} to='/signin'>Выход</NavLink>
				: <NavLink to='/signin'>Авторизаця</NavLink>
			}
		</Wrapper>
	)
}

const mapStateToProps = (state) => ({
	user: state.userReducer.user,
})

const mapDispatchToProps = dispatch => ({
	logOut: () => dispatch(logOut())
})

const enhance = connect(
	mapStateToProps,
	mapDispatchToProps,
)

MenuView.propTypes = {
	user: PropTypes.bool,
	logOut: PropTypes.func,
}

MenuView.defaultProps = {
	user: false,
	logOut: () => {}
}

export const Menu = enhance(MenuView)
