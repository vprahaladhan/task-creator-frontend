import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware} from 'redux' 
import logger from 'redux-logger'
import currentUser from '../reducers/currentUser.js'
import getTasksReducer from '../reducers/tasksReducer.js'

const rootReducer = combineReducers({
    currentUser,
    getTasksReducer
})


const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;