<<<<<<< HEAD
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../../redux/actions/taskActions'


export const TaskList = () => {
    const tasks = useSelector(tasks => tasks.getTasksReducer)

    console.log(tasks)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getAllTasks())
    }, [dispatch])

    return (
        <div>
        <h1>Your Tasks</h1>
            <ul className="task-list">

            </ul>
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
