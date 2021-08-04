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
}
