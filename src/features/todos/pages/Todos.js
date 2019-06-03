import React from 'react'
import { TodosTemplate } from '../template'
import { TodoList } from '../organisms'
import { FiltredButtonsGroup, PaginationView } from '../molecules'
import { TodoWrapper, CreateTodoButton } from '../atoms'
import { Title } from '../../../ui/atoms'

export const Todos = () => {
	return (
		<TodosTemplate>
			<Title>Список задач</Title>
			<CreateTodoButton />
			<TodoWrapper>
				<TodoList />
				<FiltredButtonsGroup />
				<PaginationView />
			</TodoWrapper>
		</TodosTemplate>
	)
}
