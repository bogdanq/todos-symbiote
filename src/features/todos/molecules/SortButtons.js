import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { SubTitle } from '../../../ui/atoms'
import { Button } from 'semantic-ui-react'
import { ModalContext } from '../../../context/ModalContext'

export const SortButtons = ({ item, sortList, isLoading }) => {
	const { changePage } = useContext(ModalContext)

	return (
		<>
			<SubTitle>Сортировать по {item.title}</SubTitle>
			<Button.Group>
				<Button
					disabled={isLoading}
					onClick={() => sortList(item.param, 'asc', changePage(1))}
				>
					&uArr;
				</Button>
				<Button.Or text='и' />
				<Button
					disabled={isLoading}
					onClick={() => sortList(item.param, 'desc', changePage(1))}
					positive
				>
					&dArr;
				</Button>
			</Button.Group>
		</>
	)
}

SortButtons.propTypes = {
	sortList: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
	item: PropTypes.object,
}

SortButtons.defaultProps = {
	item: {},
	isLoading: false,
}
