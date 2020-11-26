import axios from "axios";
import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../constants/taskConstants";
import { url } from "../api/index";

export const createTask = (listId, taskDetails) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${url}/list/${listId}/task`,
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
      `${url}/list/${listId}/task/${taskId}`,
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
    await axios.delete(`${url}/list/${listId}/task/${taskId}`);
    dispatch({ type: DELETE_TASK });
  } catch (error) {
    console.log(error);
  }
};
