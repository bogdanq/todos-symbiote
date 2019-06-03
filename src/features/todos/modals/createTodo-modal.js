import React from 'react'
import PropTypes from 'prop-types'
import { CreateTodoForm } from '../forms'
import { Button } from 'semantic-ui-react'
import Modal from 'react-modal'
import { Title, Row } from '../../../ui/atoms'

export const CreateTodoModal = ({ onRequestClose }) => {
	return (
		<Modal
			ariaHideApp={false}
			isOpen
			onRequestClose={onRequestClose}
			className='wrapperModal'
		>
			<Title>Введите задачу</Title>
			<CreateTodoForm />
			<Row params='button'>
				<Button basic onClick={onRequestClose}>
					Закрыть
				</Button>
			</Row>
		</Modal>
	)
}

CreateTodoModal.propTypes = {
	onRequestClose: PropTypes.func.isRequired,
}
