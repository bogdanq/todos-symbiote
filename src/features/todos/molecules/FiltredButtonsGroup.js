import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import { Wrapper } from '../../../ui/atoms'
import { connect } from 'react-redux'
import { actions } from '../../../store/symbiotes/todos'
import filtredButtons from './filtredButtons.json'

export const FiltredButtonsGroupView = ({ filtredTodo, filter }) => {
	return (
		<Wrapper params='tac'>
		{filtredButtons.map((item, id) => (
			<Button
				key={id}
				style={{ display: 'inline-block', margin: '30px 20px' }}
				positive
				basic
				disabled={filter === item.filter}
				onClick={() => filtredTodo(item.filter)}
			>
				{item.text}
			</Button>
		))}
		</Wrapper>
	)
}

const mapDispachToProps = (dispatch) => ({
	filtredTodo: (filter) => dispatch(actions.filtredTodo(filter)),
})

const mapStateToProps = (state) => ({
	filter: state.todoReducer.filter
})

const enhance = connect(
	mapStateToProps,
	mapDispachToProps,
)

FiltredButtonsGroupView.propTypes = {
	filtredTodo: PropTypes.func.isRequired,
	filter: PropTypes.string
}

FiltredButtonsGroupView.defaultProps = {
	filter: ''
}

export const FiltredButtonsGroup = enhance(FiltredButtonsGroupView)
