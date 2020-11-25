import Board from "../models/boardModel.js";

export const createBoard = async (req, res) => {
  const newBoard = new Board(req.body);
  try {
    await newBoard.save();
    res.status(201).json(newBoard);
  } catch (error) {
    console.log(error);
  }
};

export const getBoard = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    res.json(board);
  } catch (error) {
    console.log(error);
  }
};

export const updateBoard = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
