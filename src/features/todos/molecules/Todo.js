import React from 'react'
import PropTypes from 'prop-types'
import { Text, Row, Wrapper } from '../../../ui/atoms'
import { Checkbox } from 'semantic-ui-react'

export const Todo = ({ todo }) => {

	return (
		<Wrapper>
			<Row>
				<Wrapper width='90%'>
					<Text params='name'>{todo.username}</Text>
					<Text params='email'>{todo.email}</Text>
					<Text params='text'>{todo.text}</Text>
				</Wrapper>
					<Checkbox toggle checked={todo.status > 1}/>
			</Row>
		</Wrapper>
	)
}

Todo.propTypes = {
	todo: PropTypes.object
}

Todo.defaultProps = {
	todo: {},
}