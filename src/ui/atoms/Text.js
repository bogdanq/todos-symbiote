import styled from 'styled-components'

const types = {
	email: `
		font-size: 16px;
		color: darkgrey;
		text-decoration: underline;
		cursor: pointer;
	`,
	
	name: `
		font-size: 16px;
		color: darkgrey;
	`,
	
	text: `
		font-size: 20px;
		color: #1f1616;
		margin: 25px 0
	`,
	err: `
		color: red
	`
}

export const Text = styled.div`
	${(props) => types[props.params]}
`
