import axios from 'axios'
import cookies from 'browser-cookies'
import { withThrowError } from './lib/axios-enhancer'
let baseUrl = 'https://cors-anywhere.herokuapp.com/https://uxcandy.com/~shapoval/test-task-backend/v2/'

class Api {
	constructor(url) {
		this.url = url
		this.token = cookies.get('token')
		this.request = withThrowError(axios.create({
			baseURL: baseUrl,
			headers: {
				'Content-Type': 'multipart/form-data',
				'token': this.token
			},
		}))
	}

	get(url) {
		return this.request.get(url)
	}

	post(url, data) {
		const formData = new FormData()
		Object.keys(data).forEach(key => formData.append(key, data[key]))
		return this.request.post(url, formData)
	}
}

export default new Api(baseUrl)