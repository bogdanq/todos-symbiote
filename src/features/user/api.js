export class UserApi {
	static apiName = 'UserApi'
	constructor(api) {
		this.api = api
	}

	getUser(url) {
		return this.api.get(url).then(({ data }) => data.message)
	}

	signIn(url, data) {
		return this.api.post(url, data).then(({ data }) => data)
	}
}
