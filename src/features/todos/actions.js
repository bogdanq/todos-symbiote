import { actions } from '../../store/symbiotes/todos'

export const getTodoList = (page) => async (dispatch, getState, { TodoApi }) => {
	dispatch(actions.getTodoList.start())

	try {
		const res = await TodoApi.getTodoList(
			`?developer=bogdan&sort_field=id&sort_direction=desc&page=${page}`,
		)
		dispatch(actions.getTodoList.finish(res))
	} catch (err) {
		dispatch(actions.getTodoList.failed(err))
	}
}

export const addTodo = (data) => (dispatch, getState, { TodoApi }) => {
	dispatch(actions.addTodo.start())

	return TodoApi.addTodo('create?developer=bogdan', data).then((res) => {
		if (res.status === 200) {
			dispatch(actions.addTodo.finish(data))
		} else {
			dispatch(actions.addTodo.failed(res.message))
		}
	})
}

export const sortTodo = (param, direction) => async (
	dispatch,
	getState,
	{ TodoApi },
) => {
	dispatch(actions.getTodoList.start())

	try {
		const res = await TodoApi.getTodoList(
			`?developer=bogdan&sort_field=${param}&sort_direction=${direction}`,
		)
		dispatch(actions.getTodoList.finish(res))
	} catch (err) {
		dispatch(actions.getTodoList.failed(err))
	}
}

export const editTodo = ({ text }, { status }, id) => (
	dispatch,
	getState,
	{ TodoApi },
) => {
	dispatch(actions.editTodo.start())
	return TodoApi.editTodo(`edit/${id}?developer=bogdan`, {
		text,
		status,
		token: TodoApi.api.token
	}).then((res) => {
		if (res.status === 200) {
			dispatch(actions.editTodo.finish(text, status, id))
		} else {
			dispatch(actions.editTodo.failed(res.message))
		}
	})
}