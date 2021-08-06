import { LOAD_TASKS, CREATE_TASK, TASK_COMPLETED, DELETE_TASK, UPDATE_TASK } from '../actions/actionTypes'

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_TASKS:
            return action.payload
        case CREATE_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    completed: false
                }
            ]
        case UPDATE_TASK:
            return state.map(task => (task.id === action.id)
                ? { ...task, task }
                : task
            )
        case TASK_COMPLETED:
            return state.map(task => (task.id === action.index)
                ? { ...task, done: !task.done }
                : task
            )
        case DELETE_TASK:
            return state.filter(task => task.id !== action.index)

        default:
            return state;
    }
}

export default tasksReducer