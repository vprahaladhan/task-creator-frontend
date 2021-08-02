// frontend/reducers/entities_reducer.jsx
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
//tasks reducer
//categories reducer


const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;