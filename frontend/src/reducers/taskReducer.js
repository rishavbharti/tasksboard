import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../constants/taskConstants";

export const taskReducer = (tasks = [], { type, payload }) => {
  switch (type) {
    case CREATE_TASK:
      return [...tasks, payload];
    case UPDATE_TASK:
      return tasks.map((task) => (task._id === payload._id ? payload : task));
    case DELETE_TASK:
      return tasks.filter((task) => task._id !== payload._id);
    default:
      return tasks;
  }
};
