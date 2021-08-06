// API CONSTANTS
import { SET_USER, 
  CLEAR_USER,
  BASE_URL, 
  USERS_URL, 
  PERSIST_USER_URL, 
  LOGIN_URL, 
  SPECIFIC_USER_URL } from "./actionTypes";

// Redux Actions

const setUserAction = userObj => ({
  type: SET_USER,
  payload: userObj
});

const clearUserAction = () => ({
  type: CLEAR_USER
});

// Fetch

const newUserToDB = userObj => dispatch => {
  console.log("User object", JSON.stringify(userObj))
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };
  fetch('http://localhost:3001/users', config)
    .then(result => result.json())
    .then(data => {
      console.log("data", data)
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
    })
    .catch(error => console.log(error))
};

const deleteUserFromDB = userId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(`http://localhost:3001/users/${userId}`, config).then(r => {
    dispatch(clearUserAction());
    localStorage.clear();
  });
};

const loginUserToDB = userCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  };
  fetch('http://localhost:3001/users/login', config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
    });
};

export const getCurrentUser = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ` + localStorage.token
    }
  };
  fetch('http://localhost:3001/get_current_user', config)
    .then(r => r.json())
    .then(userInstance => {
      dispatch(setUserAction(userInstance));
    });
};

export const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};

export default {
  newUserToDB,
  deleteUserFromDB,
  loginUserToDB,
  getCurrentUser,
  logoutUser
};