import React, {  useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Pagination from 'react-js-pagination'
import { getTodoList } from '../actions'
import { ModalContext } from '../../../context/ModalContext'

const getPageCount = (totalTaskCount) => {
	return (totalTaskCount / 3)
}

export const _PaginationView = ({ totalTaskCount, getTodoList }) => {
	const { currentPage, changePage } = useContext(ModalContext)
	useEffect(() => {
		getTodoList(currentPage)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage])

	return (
		<Pagination
			hideDisabled
			activePage={currentPage}
			itemsCountPerPage={1}
			totalItemsCount={totalTaskCount}
			itemClass='item-page'
			activeClass='active-page'
			disabledClass='disabled-pagination'
			onChange={(e) => changePage(e)}
		/>
	)
}

const mapDispachToProps = (dispatch) => ({
	getTodoList: (page) => dispatch(getTodoList(page))
})

const mapStateToProps = (state) => ({
	totalTaskCount: getPageCount(state.todoReducer.totalTaskCount)
})

const enhance = connect(
	mapStateToProps,
	mapDispachToProps,
)

_PaginationView.propTypes = {
	getTodoList: PropTypes.func.isRequired,
	totalTaskCount: PropTypes.number
}

_PaginationView.defaultProps = {
	totalTaskCount: null
}

export const PaginationView = enhance(_PaginationView)