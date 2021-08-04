import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';                                                                                                                                                          
const NewTaskForm = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [newTask, setNewTask] = useState({
    title: '',
    description: ''
  });

  // Controlled form functions
  const handleChange = e => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
    console.log("new task", newTask)
  }


  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(taskActions.createTask(newTask));
    history.push('/tasks');
  };

  // Destructuring keys from our local state to use in the form
  const { username, password } = signupForm;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>New Task</h1>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Task Title"
      />
      <textarea 
        name="description"
        cols="40"
        rows="5"
        />
      <input type="submit" />
    </form>
  );
};

export default NewTaskForm;