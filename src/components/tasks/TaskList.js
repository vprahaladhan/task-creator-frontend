<<<<<<< HEAD
<<<<<<< HEAD
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../../redux/actions/taskActions'

=======
import React from 'react'
>>>>>>> parent of 25c639e... commit stash

export const TaskList = () => {
    useEffect(() => {

    }, [dispatch])
    return (
        <div>
            
        </div>
    )
=======
import React, { Component } from 'react'
import NewTaskForm from './NewTaskForm'

const api_url = 'https://localhost:3001/api/v1/tasks'

class TaskList extends Component {
    
    constructor(props) {
        super(props)
        //items[0] = #Task 1
        //items[1] = #Task 2
        this.state = {
            tasks: []
        }

        
    }

    componentDidMount() {
        //Get the items from the API
        this.getTasks()
    }

    getTasks = () => {
        
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
>>>>>>> parent of 1a951cc... Auth dOne
}

export default TaskList
