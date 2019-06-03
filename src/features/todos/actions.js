import { actions } from '../../store/symbiotes/todos'

export const getTodoList = (page) => async (
	dispatch,
	getState,
	{ TodoApi },
) => {
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

export const addTodo = (data) => async (dispatch, getState, { TodoApi }) => {
	dispatch(actions.addTodo.start())
	try {
		await TodoApi.addTodo('create?developer=bogdan', data)
		dispatch(actions.addTodo.finish(data))
	} catch (err) {
		dispatch(actions.addTodo.failed(err))
	}
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

export const editTodo = ({ text }, { status }, id) => async (
	dispatch,
	getState,
	{ TodoApi },
) => {
	dispatch(actions.editTodo.start())
	try {
		await TodoApi.editTodo(`edit/${id}?developer=bogdan`, {
			text,
			status,
			token: TodoApi.api.token,
		})
		dispatch(actions.editTodo.finish(text, status, id))
	} catch (err) {
		dispatch(actions.editTodo.failed(err))
	}
}