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
 console.log("User object:', userObj")
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };
  fetch(USERS_URL, config)
    .then(result => result.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
    });
};

const deleteUserFromDB = userId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(SPECIFIC_USER_URL(userId), config).then(r => {
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
  fetch(LOGIN_URL, config)
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
  fetch(PERSIST_USER_URL, config)
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