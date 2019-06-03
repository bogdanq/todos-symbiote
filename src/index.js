import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.css'
import { configureStore } from './store'
import { Provider } from 'react-redux'
import { ModalProvider } from './context/ModalContext'
import { ModalRoot } from './context/ModalRoot'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<ModalProvider>
		<ModalRoot />
			<App />
		</ModalProvider>
	</Provider>,
	document.getElementById('root'),
)
