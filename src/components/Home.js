import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/actions/userActions'
import { TaskList } from './tasks/TaskList';

const Home = (props) => {
    return (
        <div class="main-container">
            {props.currentUser.username}

        <div className="tasks-list">
            <TaskList/>
        </div>
        </div>


    )
};

export default Home;