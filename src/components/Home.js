import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/actions/userActions'
import { TaskList } from './tasks/TaskList';

const Home = (props) => {
    return (
        <div class="main-container">
            <h1>Home</h1>
            {props.currentUser.username}
            <TaskList/>
        </div>


    )
};

export default Home;