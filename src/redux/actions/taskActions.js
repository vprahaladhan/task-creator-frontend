
import {
  LOAD_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  TASK_COMPLETED,
  DELETE_TASK,
  CREATE_TASK_URL,
  GET_TASKS_URL,
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

  fetch('http://localhost:3001/tasks', config)
    .then(r => r.json())
    .then(tasks => {
      console.log("Fetch request function ")
      dispatch(loadTasks(tasks));
    });
};


export function createTask(task) {
  console.log("THE TASK", task)
  return {
    type: CREATE_TASK,
    task
  }
}
export function updateTask(task) {
  console.log("THE TASK", task)
  return {
    type: UPDATE_TASK,
    task
  }
}
const updateTaskToDB = taskObj => dispatch => {
  console.log("Task object:", taskObj)
  const config = {
    method: 'PUT',
    headers: {
      Authorization: `bearer ` + localStorage.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskObj)
  };
  fetch(`http://localhost:3001/tasks/${taskObj.task_id}`, config)
    .then(result => result.json())
    .then(data => {
      console.log("the data", data.task)
      dispatch(updateTask(data.task));
    })
    .catch(error => console.log(error))
};

const createTaskToDB = taskObj => dispatch => {
  console.log("Task object:", taskObj)
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskObj)
  };
  fetch('http://localhost:3001/create-new-task', config)
    .then(result => result.json())
    .then(data => {
      console.log("the data")
      dispatch(createTask(data.task));
    })
    .catch(error => console.log(error))
};

export function taskCompleted(index) {
  return {
    type: TASK_COMPLETED,
    index: index
  }
}

export function deleteTask(index) {
  return { type: DELETE_TASK, index: index }
}

export default {
  loadTasks,
  getAllTasks,
  createTask,
  createTaskToDB,
  updateTaskToDB,
  deleteTask
};
