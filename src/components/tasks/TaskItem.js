import React from 'react'

const TaskItem = (props) => {
    return (
        <>
        <li>{props.task.title}</li>
        <li>{props.task.description}</li>
        </>
    )
}

export default TaskItem;