
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';

const Login = props => {
  // initializing dispatch
  const dispatch = useDispatch();
  // Setting up local state using the useState hook
  // Setting up local state using the useState hook
  const [loginForm, setloginForm] = useState({
    user: {
      username: '',
      password: ''
    }
  });

  // Controlled form functions
  const handleChange = e => {

    setloginForm({ ...loginForm, user: {
        ...loginForm.user,
        [e.target.name]: e.target.value }
      }
    );
    console.log("Login form", loginForm)
  }
  // controlled form functions
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(loginForm));
    props.history.push('/');
  };


  // Destructuring keys from our local state to use in the form
  const { username, password } = loginForm.user;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input type="submit" />
    </form>
  );
};

export default Login;