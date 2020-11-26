import axios from "axios";
import {
  CREATE_LIST,
  DELETE_LIST,
  GET_LIST,
  GET_LISTS,
  UPDATE_LIST,
} from "../constants/listConstants";
import { url } from "../api/index";

export const getLists = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${url}/list`);
    dispatch({ type: GET_LISTS, payload: data });
    // localStorage.setItem("lists", JSON.stringify(getState().lists));
  } catch (error) {
    console.log(error);
  }
};

export const getList = (listId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${url}/list/${listId}`);
    dispatch({ type: GET_LIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createList = (listDetails) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${url}/list`, listDetails);
    dispatch({ type: CREATE_LIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateList = (listId, listUpdates) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${url}/list/${listId}`, listUpdates);
    dispatch({ type: UPDATE_LIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteList = (listId) => async (dispatch) => {
  try {
    await axios.delete(`${url}/list/${listId}`);
    dispatch({ type: DELETE_LIST });
  } catch (error) {
    console.log(error);
  }
};
