import express from "express";
import { createUser, getUserBoard } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
// router.post("/login", authUser); //User is being authenticated using firebase
router.get("/board", getUserBoard);

export default router;
