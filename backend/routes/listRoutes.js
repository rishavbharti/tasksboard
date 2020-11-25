import express from "express";
import {
  createList,
  deleteList,
  getLists,
  getList,
  updateList,
} from "../controllers/listController.js";
import {
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getLists);
router.get("/:lid", getList);
router.post("/", createList);
router.patch("/:lid", updateList);
router.delete("/:lid", deleteList);

router.post("/:lid/task", createTask);
router.patch("/:lid/task/:tid", updateTask);
router.delete("/:lid/task/:tid", deleteTask);

export default router;
