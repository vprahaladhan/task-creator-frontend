
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import taskActions from '../../redux/actions/taskActions';
import userActions from '../../redux/actions/userActions';                                                                                                                                                          
const InputTaskForm = (props) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser.id)
  const tasks = useSelector(state => state.tasksReducer)
  const location = useLocation()
  const history = useHistory();
  const path = location.pathname
  const params = useParams()
  const taskToEdit = tasks.find(task => task.id == params.id)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(userActions.getCurrentUser());
      console.log("Mounted current user: ", currentUser)
    }
  }, [dispatch])

    // Setting up local state using the useState hook
    const [taskForm, setTaskForm] =  
      useState({
        task: {
          id: (taskToEdit) ? taskToEdit.id : null,
          title: (path === '/tasks/new') ? '' : taskToEdit.title,
          description: (path === '/tasks/new') ? '' : taskToEdit.description,
          user_id: currentUser
        }
      })

      console.log("CURRRRENT USER", taskForm)

  // Controlled form functions
  const handleChange = e => {
    setTaskForm({ ...taskForm, task: {
      ...taskForm.task,
      [e.target.name]: e.target.value 
    }
  });
  }

  const handleCreateTask = async (e) => {
    e.preventDefault();
    console.log("Submitted task is:", taskForm)
    // console.log("This user is", currentUser)
    await dispatch(taskActions.createTaskToDB(taskForm));
    history.push('/tasks');
  };

  const handleEdit = e => {
    e.preventDefault();
    dispatch(taskActions.updateTaskToDB(taskForm));
    history.push('/tasks');
  }

  // Destructuring keys from our local state to use in the form
  const { title, description } = taskForm.task;

  // Component code
  return (
    <form onSubmit={(path === '/tasks/new') ? handleCreateTask : handleEdit}>
      <h1>{(path === '/tasks/new') ? "New Task" : "Edit task" }</h1>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Task Title"
      />
      <br/>
      <textarea 
        name="description"
        value={description}
        onChange={handleChange}
        cols="40"
        rows="5"
        />
      <input type="submit" />
    </form>
  );
};

export default InputTaskForm;