import { createSymbiote } from 'redux-symbiote'

const initialState = {
	isLoading: false,
	hasError: '',
	todos: [],
	filter: "all",
	totalTaskCount: null
}

const symbiotes = {
	getTodoList: {
		start: (state) => ({
			...state,
			isLoading: true,
		}),

		finish: (state, data) => ({
			...state,
			isLoading: false,
			todos: data.tasks,
			totalTaskCount: data.total_task_count
		}),

		failed: (state, error) => ({
			...state,
			isLoading: false,
			hasError: error,
		}),
	},

	addTodo: {
		start: (state) => ({
			...state,
		}),

		finish: (state, data) => ({
			...state,
			todos: [...state.todos, data]
		}),

		failed: (state, error) => ({
			...state,
			hasError: error,
		})
	},

	filtredTodo: (state, filter) => ({
		...state,
		filter: filter
	}),

	editTodo: {
		start: (state) => ({
			...state,
		}),

		finish: (state, text, status, id) => ({
			...state,
			todos: [...state.todos.map(obj =>
				obj.id === id ? { ...obj, text, status: status } : obj)]
		}),

		failed: (state, error) => ({
			...state,
			hasError: error,
		})
	},

	toggleTodo: (state, id, status) => ({
		...state,
		status: status,
		todos: [...state.todos.map(obj =>
			obj.id === id ? { ...obj, status } : obj)]
	})
}

export const { actions, reducer: todoReducer } = createSymbiote(
	initialState,
	symbiotes,
	"todoReducer"
)