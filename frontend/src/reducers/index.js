import { combineReducers } from "redux";
import { listReducer, listsReducer } from "./listsReducer";
import { taskReducer } from "./taskReducer";

export default combineReducers({
  lists: listsReducer,
  list: listReducer,
  tasks: taskReducer,
});
