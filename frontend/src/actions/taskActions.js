import axios from "axios";
import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../constants/taskConstants";

export const createTask = (listId, taskDetails) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `https://tasksboard-app.herokuapp.com/api/list/${listId}/task`,
      taskDetails
    );
    dispatch({ type: CREATE_TASK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (listId, taskId, taskUpdates) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `https://tasksboard-app.herokuapp.com/api/list/${listId}/task/${taskId}`,
      taskUpdates
    );
    // console.log(data);
    dispatch({ type: UPDATE_TASK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (listId, taskId) => async (dispatch) => {
  try {
    await axios.delete(
      `https://tasksboard-app.herokuapp.com/api/list/${listId}/task/${taskId}`
    );
    dispatch({ type: DELETE_TASK });
  } catch (error) {
    console.log(error);
  }
};
