import {
  CREATE_LIST,
  DELETE_LIST,
  GET_LIST,
  GET_LISTS,
  UPDATE_LIST,
} from "../constants/listConstants";

export const listsReducer = (lists = [], { type, payload }) => {
  switch (type) {
    case GET_LISTS:
      return payload;
    case GET_LIST:
      return payload;
    case CREATE_LIST:
      return [...lists, payload];
    case UPDATE_LIST:
      return lists.map((list) => (list._id === payload._id ? payload : list));
    case DELETE_LIST:
      return lists.filter((list) => list._id !== payload._id);
    default:
      return lists;
  }
};

export const listReducer = (list = [], { type, payload }) => {
  switch (type) {
    case GET_LIST:
      return payload;
    default:
      return list;
  }
};
