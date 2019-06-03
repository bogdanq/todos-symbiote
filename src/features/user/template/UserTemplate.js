import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from '../../../ui/molecules'
import { Wrapper } from '../../../ui/atoms'

export const UserTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Menu />
				<Wrapper params='tac'>
					{children}
				</Wrapper>
		</Wrapper>
	)
}

UserTemplate.propTypes = {
	children: PropTypes.array.isRequired
}