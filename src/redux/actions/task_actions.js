import toast from "toasted-notes";
import "toasted-notes/src/styles.css";
// syncrhonous action creators - state is updated immediately
export const setAllactions = tasks => {
  return {
    type: "SET_ALL_tasks", // matches the case in the reducer
    tasks // shorthand version of payload: user
  };
};

export const clearAllTasks = () => {
  return {
    type: "CLEAR_ALL_tasks"
  };
};

// asynchronous action creators -- requests to the backend are required first
export const getAllTasks = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/tasks", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(tasks => {
        if (tasks.error) {
          // alert(tasks.error);
          toast.notify(tasks.error, {
            position: "bottom-right"
          });
        } else {
          dispatch(setAllTasks(tasks.data)); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};