
// syncrhonous action creators - state is updated immediately
export const setAllTasks = tasks => {
  return {
    type: "SET_ALL_TASKS", // matches the case in the reducer
    tasks // shorthand version of payload: user
  };
};

export const clearAllTasks = () => {
  return {
    type: "CLEAR_ALL_TASKS"
  };
};

// asynchronous action creators -- requests to the backend are required first
export const getAllTasks = () => {
  return dispatch => {
    return fetch("http://localhost:3001/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(tasks => {
          console.log("All tasks:", tasks)
          dispatch(setAllTasks(tasks.data)); // dispatch action creator
      })
      .catch(console.log);
  }
}