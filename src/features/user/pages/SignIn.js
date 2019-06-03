import React from 'react'
import { UserTemplate } from '../template'
import { Title } from '../../../ui/atoms'
import { LoginForm } from '../forms/LoginForm'

export const SignIn = () => {
	return (
		<UserTemplate>
			<Title>Введите логин и пароль</Title>
			<LoginForm />
		</UserTemplate>
	)
}
