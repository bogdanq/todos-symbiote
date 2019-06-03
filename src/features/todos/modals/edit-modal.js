import React from 'react'
import PropTypes from 'prop-types'
import { EditTodoForm } from '../forms'
import { Button } from 'semantic-ui-react'
import Modal from 'react-modal'
import { Title, Row } from '../../../ui/atoms'

export const EditTodoModal = ({ onRequestClose, index }) => {
	return (
		<Modal
			ariaHideApp={false}
			isOpen
			onRequestClose={onRequestClose}
			className='wrapperModal'
		>
			<Title>Редактирование задачи</Title>
			<EditTodoForm index={index} />
			<Row params='button'>
				<Button basic onClick={onRequestClose}>
					Закрыть
				</Button>
			</Row>
		</Modal>
	)
}

EditTodoModal.propTypes = {
	onRequestClose: PropTypes.func.isRequired,
	index: PropTypes.number
}

EditTodoModal.defaultProps = {
	index: null
}