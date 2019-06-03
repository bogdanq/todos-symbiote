import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Todo } from '../molecules'
import { getFiltredTodos } from '../selector'
import { Container, EditTodoButton } from '../atoms'
import { Spinner } from '../../../ui/atoms'

const TodoListView = ({ todos, user, isLoading }) => {

	if(isLoading) return <Spinner />
	return (
		<>
			{todos.map(todo => (
				<Container key={todo.id}>
					<Todo
						todo={todo}
					/>
				{user && <EditTodoButton index={todo.id}/>} 
				</Container>
			))}
		</>
	)
}

const mapStateToProps = (state) => ({
	todos: getFiltredTodos(state.todoReducer.todos, state.todoReducer.filter),
	user: state.userReducer.user,
	isLoading: state.todoReducer.isLoading
})

const enhance = connect(
	mapStateToProps,
	null,
)

TodoListView.propTypes = {
	todos: PropTypes.array,
	isLoading: PropTypes.bool,
	user: PropTypes.bool
}

TodoListView.defaultProps = {
	todos: [],
	isLoading: false,
	user: false
}

export const TodoList = enhance(TodoListView)
