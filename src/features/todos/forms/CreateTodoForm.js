import React from 'react'
import PropTypes from 'prop-types'
import { BaseForm } from '../../../lib/BaseForm'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const shema = yup.object().shape({
	username: yup.string().required('введите имя'),
	email: yup
		.string()
		.email('нужно написать почту')
		.required('введите почту'),
	text: yup.string().required('введите описание'),
})

const field = [
	{ name: 'username', placeholder: 'username' },
	{ name: 'email', placeholder: 'email' },
	{ name: 'text', placeholder: 'text' },
]

const initialValues = { username: '', email: '', text: '' }

export const TodoFormView = ({ addTodoStart }) => {
	return (
		<BaseForm
			initialValues={initialValues}
			fields={field}
			shema={shema}
			onSubmit={addTodoStart}
			nameSubmit='Создать'
		/>
	)
}

const mapDispachToProps = (dispatch) => ({
	addTodoStart: (data) => dispatch(addTodo(data)),
})

const mapStateToProps = (state) => ({
	isLoading: state.userReducer.isLoading,
})

const enhance = connect(
	mapStateToProps,
	mapDispachToProps,
)

TodoFormView.propTypes = {
	addTodoStart: PropTypes.func.isRequired
}

export const CreateTodoForm = enhance(TodoFormView)
