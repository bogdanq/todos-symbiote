import React from 'react'
import { NavLink } from 'react-router-dom'
import { Wrapper } from '../../../ui/atoms'

export const NotFound = () => {
	return (
		<Wrapper>
			<NavLink to='/'>На главную</NavLink>
			<h1>Page Not Found</h1>
		</Wrapper>
	)
}
