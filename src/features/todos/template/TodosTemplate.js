import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Footer } from '../../../ui/molecules'
import { SortBar } from '../organisms'
import { Row, Wrapper } from '../../../ui/atoms'

export const TodosTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Menu />
			<Row>
				<Wrapper width='70%'>
					{children}
				</Wrapper>
				<SortBar />
			</Row>
			<Footer />
		</Wrapper>
	)
}

TodosTemplate.propTypes = {
	children: PropTypes.array.isRequired
}