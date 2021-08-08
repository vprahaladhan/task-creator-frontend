import React from 'react'
import {Link} from 'react-router-dom'

// import taskActions from '../../redux/actions/taskAction';

const TaskItem = (props) => {
    const handleDeleteTask = () => {
      // taskActions.deleteTaskFromDB
    } 

    return (
        <>
        <li>
        <Link to={ { 
            pathname: `/task/${props.task.id}`,
            state: {
                task: props.task.id
            }}}> 
            <h2>{props.task.title}</h2>
        </Link>
            <p>{props.task.description}</p>
            <Link to={ { pathname: `/tasks/${props.task.id}/edit` }}>
                <button> Edit </button>
            </Link>
            <button onClick={handleDeleteTask}>Delete</button>
        </li>
        </>
    )
}

export default TaskItem