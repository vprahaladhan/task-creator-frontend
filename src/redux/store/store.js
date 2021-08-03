import thunk from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux' 
import rootReducer from '../reducers/rootReducer.js'
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;