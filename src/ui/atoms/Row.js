import styled from 'styled-components'

const types = {
	check: `
		position: absolute;
		top: 10px;
		right: 50px;
	`,
	button: `
		position: absolute;
		top: 10px;
		left: 10px;
	`
}

export const Row = styled.div`
	display: flex;
	justify-content: space-around;
	height: ${props => props.height};
	${props => types[props.params]}
`
	