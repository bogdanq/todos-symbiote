import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Title } from '../../../ui/atoms'
import { SortButtons } from '../molecules'
import { connect } from 'react-redux'
import { sortTodo } from '../actions'
import sortButtons from './sortButtons.json'

const SortBarView = ({ sortTodoStart, isLoading }) => {

	return (
		<Wrapper width='30%'>
			<Title>Сортировка задач</Title>
			{sortButtons.map(obj => (
				<SortButtons
					key={obj.id}
					item={obj}
					sortList={sortTodoStart}
					isLoading={isLoading}
				/>
			))}
		</Wrapper>
	)
}

const mapDispachToProps = (dispatch) => ({
	sortTodoStart: (param, direction) => dispatch(sortTodo(param, direction)),
})

const mapStateToProps = (state) => ({
	isLoading: state.todoReducer.isLoading,
})

const enhance = connect(
	mapStateToProps,
	mapDispachToProps,
)

SortBarView.propTypes = {
	sortTodoStart: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,  
}

SortBarView.defaultProps = {
	isLoading: false
}

export const SortBar = enhance(SortBarView)
