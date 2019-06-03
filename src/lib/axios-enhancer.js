export function withThrowError(axios) {
	axios.interceptors.response.use((response = {}) => {
		const hasData = response.data

		if (hasData && response.data.status === 'error') {
			return Promise.reject(response.data.message)
		}

		return response
	})

	return axios
}
