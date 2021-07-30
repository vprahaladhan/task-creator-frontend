import React, { Component } from 'react'
import NewTaskForm from './NewTaskForm'

const api_url = 'https://localhost:3001/api/v1/tasks'

class TaskList extends Component {
    
    constructor(props) {
        super(props)
        //items[0] = #Task 1
        //items[1] = #Task 2
        this.state = {
        }
    }

    
    render() {
        return (
            <div className="task-list">
                <NewTaskForm/>
                <ul>
                    <li>Task #1</li>
                    <li>Task #2</li>
                </ul>
            </div>
        )
    }
}

export default TaskList
