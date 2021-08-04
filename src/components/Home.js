import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
import {getCurrentUser} from '../redux/actions/userActions'

const Home = () => {
    const currentUser = useSelector(state => state.currentUser.username)
    console.log(currentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentUser())
      }, [dispatch])
=======
import { getCurrentUser } from '../redux/actions/userActions'

const Home = (props) => {
    return (
        <div class="main-container">
            <h1>Home</h1>
            {props.currentUser.username}
        </div>

        //   const username = useSelector(state => state.currentUser.user.username);
  const text = currentUser ? (
    <h1>{currentUser} is currently logged in</h1>
  ) : (
    <h1>Nobody is logged in</h1>
  );
  return <div>{text}</div>;
};

export default Home;