import { combineReducers } from 'redux'
import { userReducer } from './user'
import { todoReducer } from './todos'

export const rootReducer = combineReducers({ userReducer, todoReducer })
