import React, { useReducer, createContext, useState } from 'react'

const ModalContext = createContext()

const reducer = (state, { render }) => {
	return { ...state, render }
}

const ModalProvider = ({ children }) => {
	
	const showModal = (render) => {
		return dispatch({ render })
	}

	const hideModal = () => {
		return dispatch({ ...state, render: null })
	}

	const [state, dispatch] = useReducer(reducer, {
		render: null
	})

	const [currentPage, changePage] = useState(1)

	return (
		<ModalContext.Provider
			value={{
				state,
				showModal,
				hideModal,
				currentPage,
				changePage
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

export { ModalProvider, ModalContext }
