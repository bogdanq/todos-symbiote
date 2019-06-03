import { UserApi } from './features/user/api'
import { TodoApi } from './features/todos/api'

export const initialApis = [UserApi, TodoApi]

const initialApi = {}

export const configureApi = (baseApi, apis = []) => {
	return apis.reduce(
		(acc, Api) => ({
			...acc,
			[Api.apiName]: new Api(baseApi),
		}),
		initialApi,
	)
}