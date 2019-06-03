import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import { ModalContext } from '../../../context/ModalContext'
import { EditTodoModal } from '../modals'

export const EditTodoButton = ({ index }) => {
	const { showModal } = useContext(ModalContext)

	return (
		<>
			<Button
				style={{ display: 'inline-block', margin: '30px auto' }}
				onClick={() =>
					showModal(({ props, hideModal }) => (
						<EditTodoModal
							onRequestClose={hideModal}
							index={index}
							{...props}
						/>
					))
				}
				positive
				basic
			>
				редактировать
			</Button>
		</>
	)
}

EditTodoButton.propTypes = {
	index: PropTypes.number
}

EditTodoButton.defaultProps = {
	index: null
}
