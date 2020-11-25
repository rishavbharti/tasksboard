import express from "express";
import {
  createBoard,
  getBoard,
  updateBoard,
} from "../controllers/boardController.js";

const router = express.Router();

router.get("/", getBoard);
router.post("/", createBoard);
router.patch("/", updateBoard);

export default router;
