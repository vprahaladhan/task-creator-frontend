import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import taskActions from '../../redux/actions/taskActions';                                                                                                                                                          
const InputTaskForm = (props) => {
  const currentUser = useSelector(state => state.currentUser)
    console.log("Current user", currentUser)
  // initializing dispatch
  const dispatch = useDispatch();
  const location = useLocation()
  const path = location.pathname
  const params = useParams()
  console.log("params: ", params)

  // Setting up local state using the useState hook
    const [task, setTask] =  
      useState({
        title: (path === '/tasks/new') ? '' : 'hello',
        description: (path === '/tasks/new') ? '' : 'description',
        user_id: currentUser.id
      })
      
      console.log(task.task_id)

  // Controlled form functions
  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }


  const handleCreateTask = e => {
    e.preventDefault();
    const { history } = props;
    console.log("This user is", currentUser)
    dispatch(taskActions.createTaskToDB(task));
    history.push('/tasks');
  };

  const handleEditTask = e => {
    e.preventDefault();
    console.log("This user is", currentUser)
    dispatch(taskActions.updateTaskToDB(task));
    // history.push('/tasks');
  }

  // Destructuring keys from our local state to use in the form
  const { title, description } = task;

  // Component code
  return (
    <form onSubmit={(path === '/tasks/new') ? handleCreateTask : handleEditTask}>
      <h1>New Task</h1>
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