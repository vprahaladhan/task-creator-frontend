import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import taskActions from '../../redux/actions/taskActions';                                                                                                                                                          
const NewTaskForm = (props) => {
  const currentUser = useSelector(state => state.currentUser)
    console.log("Current user", currentUser)
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    user_id: currentUser.id
  });

  // Controlled form functions
  const handleChange = e => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  }


  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(taskActions.createTaskToDB(newTask));
    history.push('/tasks');
  };

  // Destructuring keys from our local state to use in the form
  const { title, description } = newTask;

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
        value={description}
        onChange={handleChange}
        cols="40"
        rows="5"
        />
      <input type="submit" />
    </form>
  );
};

export default NewTaskForm;