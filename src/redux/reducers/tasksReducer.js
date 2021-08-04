const getTasksReducer = (tasks = [], action) => {
    switch (action.type) {
      case 'SET_ALL_TASKS':
        return action.payload
      case 'CLEAR_ALL_TASKS':
        return []
      default:
        return tasks;
    }
  };
  
  export default getTasksReducer;