import React from 'react'
import {Link} from 'react-router-dom'

const TaskItem = (props) => {
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
            <button>Delete</button>
        </li>
        </>
    )
}

export default TaskItem