import { actions } from '../../store/symbiotes/user'
import cookies from 'browser-cookies'
import history from '../../lib/history'

export const getUser = () => (dispatch) => {
	dispatch(actions.getUser.start())

	let token = cookies.get('token')

	if (token !== null) {
		dispatch(actions.getUser.finish())
	} else {
		dispatch(actions.getUser.failed())
	}
}

export const signIn = (data) => (dispatch, setState, { UserApi }) => {
	dispatch(actions.signIn.start())
	return UserApi.signIn('login?developer=bogdan', data).then((res) => {
		if (res.status !== 'error') {
			dispatch(actions.signIn.finish())
			cookies.set('token', res.message.token)
			history.push('/')
		} else {
			dispatch(actions.signIn.failed(res.message))
		}	
	})
}

export const logOut = () => (dispatch, setState, { UserApi }) => {
	dispatch(actions.getUser.failed())
	history.push('/signin')
	cookies.erase('token')
}