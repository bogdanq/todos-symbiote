import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'
import { ModalContext } from '../../../context/ModalContext'
import { CreateTodoModal } from '../modals'

export const CreateTodoButton = () => {
	const { showModal } = useContext(ModalContext)

	return (
		<Button
			style={{ display: 'inline-block', margin: '30px auto' }}
			onClick={() =>
				showModal(({ props, hideModal }) => (
					<CreateTodoModal
						onRequestClose={hideModal}
						{...props}
					/>
				))
			}
			positive
			basic
		>
			Создать задачу
		</Button>
	)
}