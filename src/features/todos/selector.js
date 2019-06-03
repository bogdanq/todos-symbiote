const getFilters = (filter) => {
	const allFilter = (todo) => todo
	const activeFilter = (todo) => todo.status < 1
	const completedFilter = (todo) => todo.status > 1

	switch (filter) {
		case 'active':
			return activeFilter

		case 'completed':
			return completedFilter

		default:
			return allFilter
	}
}

const getFiltredTodos = (todos, filter) => {
	const fillterName = getFilters(filter)

	return todos.filter(fillterName)
}

const getCurrendTodo = (todos, { index }) => {
	return todos.find(obj => obj.id === index)
}

const updateCheckBox = (status) => {
	if(status === 0) {
		return 10
	} else {
		return 0
	}
}

export { getFiltredTodos, getCurrendTodo, updateCheckBox }