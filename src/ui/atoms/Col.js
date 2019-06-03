import styled from 'styled-components'

const types = {
	signin: `
		border: 1px solid red;
		height: 140px;
		justify-content: space-between
	`,
}


export const Col = styled.div`
  display: flex;
	flex-direction: column;
	margin: 0 auto;
	${(props) => types[props.params]}
	width: ${props => props.width}
`
