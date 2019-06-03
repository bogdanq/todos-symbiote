import { createSymbiote } from 'redux-symbiote'

const initialState = {
	isLoading: false,
	user: false,
	authError: null
}

const symbiotes = {
	getUser: {
		start: (state) => ({
			...state,
			isLoading: true
		}),

		finish: (state) => ({
			...state,
			isLoading: false,
			user: true
		}),

		failed: (state, error) => ({
			...state,
			isLoading: false,
			authError: error,
			user: false
		}),
	},

	signIn: {
		start: (state) => ({
			...state,
		}),

		finish: (state, token) => ({
			...state,
			user: true
		}),

		failed: (state, error) => ({
			...state,
			authError: error,
			user: false
		}),
	}
}

export const { actions, reducer: userReducer } = createSymbiote(
	initialState,
	symbiotes,
	"userReducer"
)