import { LOAD_TASKS, CREATE_TASK, TASK_COMPLETED, DELETE_TASK } from '../actions/actionTypes'

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
                    description: action.description,
                    completed: false
                }
            ]
        case TASK_COMPLETED:
            return state.map(task => (task.id === action.id)
                ? { ...task, done: !task.done }
                : task
            )
        case DELETE_TASK:
            return state.filter(task => task.id !== action.id)

        default:
            return state;
    }
}

export default tasksReducer