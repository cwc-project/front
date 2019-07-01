import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise'

import reducer from './reducers'

const middlewares = [
    promise,
    logger,
]

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)

export default store