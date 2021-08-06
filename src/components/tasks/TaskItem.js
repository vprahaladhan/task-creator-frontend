import React from 'react'

const TaskItem = (props) => {
    return (
        <>
        <li>
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
        </li>
        </>
    )
}

export default TaskItem;