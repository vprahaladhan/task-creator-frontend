import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware} from 'redux' 
import currentUser from '../reducers/currentUser.js'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    currentUser
    //
})


const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;