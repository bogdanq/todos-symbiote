export class TodoApi {
	static apiName = 'TodoApi'
	constructor(api) {
		this.api = api
	}

	getTodoList(url) {
		return this.api.get(url).then(({ data }) => data.message)
	}

	addTodo(url, data) {
		return this.api.post(url, data).then((res) => res)
	}

	editTodo(url, data) {
		return this.api.post(url, data).then((res) => res)
	}
}
