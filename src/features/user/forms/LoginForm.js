import React from 'react'
import PropTypes from 'prop-types'
import { BaseForm } from '../../../lib/BaseForm'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { signIn } from '../actions'

const shema = yup.object().shape({
	username: yup.string().required('введите логин'),
	password: yup.string().required('введите пароль'),
})

const field = [
	{ name: 'username', placeholder: 'login' },
	{ name: 'password', placeholder: 'password' },
]

const initialValues = { username: '', password: '' }

const LoginFormView = ({ signInStart, authError }) => {

	return (
		<BaseForm
			initialValues={initialValues}
			fields={field}
			shema={shema}
			onSubmit={signInStart}
			error={authError}
			nameSubmit='Вход'
		/>
	)
}

const mapDispachToProps = (dispatch) => ({
	signInStart: (data) => dispatch(signIn(data)),
})

const mapStateToProps = (state) => ({
	isLoading: state.userReducer.isLoading,
	authError: state.userReducer.authError,
})

const enhance = connect(
	mapStateToProps,
	mapDispachToProps,
)

LoginFormView.propTypes = {
	authError: PropTypes.object,
	signInStart: PropTypes.func.isRequired
}

LoginFormView.defaultProps = {
	authError: {}
}

export const LoginForm = enhance(LoginFormView)
