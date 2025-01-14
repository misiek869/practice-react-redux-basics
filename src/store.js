import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import reducer from './app/data/duck/reducers'

const store = createStore(reducer, composeWithDevTools())

export default store
