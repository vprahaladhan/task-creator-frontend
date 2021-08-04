
import {
  LOAD_TASKS,
  CREATE_TASK,
  TASK_COMPLETED,
  DELETE_TASK,
  GET_TASKS_URL
} from './actionTypes'

const loadTasks = tasks => {
  console.log("Load tasks function")
  return {
    type: LOAD_TASKS,
    payload: tasks
  }
}

export const getAllTasks = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ` + localStorage.token
    }
  };
  
  fetch(GET_TASKS_URL, config)
    .then(r => r.json())
    .then(tasks => {
      console.log("Fetch request function ")
      dispatch(loadTasks(tasks));
    });
};

export function createTask(id, title) {
  return {
    type: CREATE_TASK,
    id: id,
    title: title
  }
}

export function taskCompleted(index) {
  return {
    type: TASK_COMPLETED,
    index: index
  }
}

export function deleteTodo(index) {
  return { type: DELETE_TASK, index: index }
}
