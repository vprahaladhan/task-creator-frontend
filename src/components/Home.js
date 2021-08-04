import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/actions/userActions'

const Home = (props) => {
    return (
        <div class="main-container">
            <h1>Home</h1>
            {props.currentUser.username}
        </div>


    )
};

export default Home;