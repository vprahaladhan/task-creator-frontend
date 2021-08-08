import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions.js';

const NavBar = () => {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
    localStorage.clear();

  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Link to="/">Home</Link>
      {console.log(`Token >> ${localStorage.getItem('token')}`)}
      {!localStorage.getItem('token') && <Link to="/register">Signup</Link>}
      {!localStorage.getItem('token') && <Link to="/login">Login</Link>}
      {
        localStorage.getItem('token') && 
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      }
    </nav>
  );
};

export default NavBar;