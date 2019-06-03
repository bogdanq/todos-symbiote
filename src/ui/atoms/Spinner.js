import React from 'react'
import { Wrapper } from './Wrapper'
import styled, { keyframes } from 'styled-components'

const types = {
	item1: `
		animation-delay: -0.32s;
	`,
	item2: `
		animation-delay: -0.16s;
	`,
}

const bouncedelay = keyframes`
	0%, 80%, 100% { 
		transform: scale(0);
	} 40% { 
		transform: scale(1.0);
	}
`

const Spiner = styled.div`
	margin: 0 auto;
	width: 70px;
	padding-top: 25px;
	text-align: center;
` 

const SpinerItem = styled.div`
	width: 18px;
	height: 18px;
	background-color: #21ba45;
	border-radius: 100%;
	display: inline-block;
	animation: ${bouncedelay} 1.4s infinite ease-in-out both;
	${props => types[props.setting]}
` 

export const Spinner = () => {
return (
	<Wrapper>
		<Spiner>
			<SpinerItem setting='item1'/>
			<SpinerItem setting='item2'/>
			<SpinerItem setting='item3'/>
		</Spiner>
	</Wrapper>
)
}