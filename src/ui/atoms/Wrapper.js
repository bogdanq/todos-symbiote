import styled from 'styled-components'

const types = {
	footer: `
		border: 1px solid #e0e0e0;
		margin-top: 150px;
		height: 300px;
	`,

	header: `
		margin: 10px auto;
		margin-bottom: 50px;
		padding: 20px 10px;
		border-bottom: 1px solid #e0e0e0;
	`,

	tac: `
		text-align: center
	`
}

export const Wrapper = styled.div`
	width: ${(props) => props.width};
	margin: 0 auto;
	${(props) => types[props.params]}
	max-width: 1500px;
`
