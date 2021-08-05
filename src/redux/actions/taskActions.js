
import {
  LOAD_TASKS,
  CREATE_TASK,
  TASK_COMPLETED,
  DELETE_TASK,
  TASKS_URL,
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
  
  fetch(TASKS_URL, config)
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

const createTaskToDB = taskObj => dispatch => {
  console.log("Task object:", taskObj )
   const config = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(taskObj)
   };
   fetch(TASKS_URL, config)
     .then(result => result.json())
     .then(data => {
       dispatch(createTask(data.task));
     });
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
  deleteTask
};
