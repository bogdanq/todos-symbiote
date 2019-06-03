import React from 'react'
import PropTypes from 'prop-types'
import { BaseForm } from '../../../lib/BaseForm'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { editTodo } from '../actions'
import { actions } from '../../../store/symbiotes/todos'
import { Checkbox } from 'semantic-ui-react'
import { getCurrendTodo, updateCheckBox } from '../selector'
import { Row } from '../../../ui/atoms'
import { Spinner } from '../../../ui/atoms'

const shema = yup.object().shape({
	text: yup.string().required('введите описание'),
})

const field = [{ name: 'text', placeholder: 'text' }]

export const EditTodoFormView = ({
	index,
	editTodoStart,
	currentTodo,
	toggleTodo,
}) => {

	if (!currentTodo) {
		return <Spinner />
	} else {
		const initialValues = { text: currentTodo.text, status:  currentTodo.status }

		return (
			<>
				<BaseForm
					initialValues={initialValues}
					fields={field}
					shema={shema}
					onSubmit={(values, status) => editTodoStart(values, status, index)}
					nameSubmit='Редактировать'
				/>
				<Row params='check'>
					<Checkbox
						checked={currentTodo.status > 1}
						onChange={() => toggleTodo(index, updateCheckBox(currentTodo.status))}
						toggle
					/>
				</Row>
			</>
		)
	}
}

const mapDispachToProps = (dispatch) => ({
	editTodoStart: (text, status, index) => dispatch(editTodo(text, status, index)),
	toggleTodo: (id, status) => dispatch(actions.toggleTodo(id, status)),
})

const mapStateToProps = (state, index) => ({
	currentTodo: getCurrendTodo(state.todoReducer.todos, index)
})

const enhance = connect(
	mapStateToProps,
	mapDispachToProps,
)

EditTodoFormView.propTypes = {
	index: PropTypes.number,
	editTodoStart: PropTypes.func.isRequired,
	currentTodo: PropTypes.object,
	toggleTodo: PropTypes.func.isRequired,
}

EditTodoFormView.defaultProps = {
	index: null,
	currentTodo: {}
}

export const EditTodoForm = enhance(EditTodoFormView)
