import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './symbiotes'
import thunk from 'redux-thunk'
import { configureApi, initialApis } from '../config-api'
import api from '../api'

export const configureStore = () => {
	return createStore(
		rootReducer,
		applyMiddleware(
			thunk.withExtraArgument(configureApi(api, initialApis))
		),
	)
}
