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

export const signIn = (data) => async (dispatch, setState, { UserApi }) => {
	dispatch(actions.signIn.start())
	try {
		const res = await UserApi.signIn('login?developer=bogdan', data)
		dispatch(actions.signIn.finish())
		cookies.set('token', res.message.token)
		history.push('/')
	} catch(err) {
		dispatch(actions.signIn.failed(err))
	}
}

export const logOut = () => (dispatch, setState, { UserApi }) => {
	dispatch(actions.getUser.failed())
	history.push('/signin')
	cookies.erase('token')
}