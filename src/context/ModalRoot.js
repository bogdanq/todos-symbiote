import React from 'react'
import { ModalContext } from './ModalContext'

export const ModalRoot = () => (
	<ModalContext.Consumer>
		{({ state: { render, props }, hideModal }) => {
			return (
				render && render({ props, hideModal })
			)
		}}
	</ModalContext.Consumer>
)