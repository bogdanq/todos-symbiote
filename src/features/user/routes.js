import { SignIn } from './pages'

export const userRoutes = () => [
	{
		path: '/signin',
		exact: true,
		component: SignIn
	}
]