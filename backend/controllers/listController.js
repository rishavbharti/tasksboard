import List from "../models/listModel.js";

export const getLists = async (req, res) => {
  try {
    const data = await List.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getList = async (req, res) => {
  try {
    const data = await List.find({ _id: req.params.lid });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const createList = async (req, res) => {
  const newList = new List(req.body);
  try {
    await newList.save();
    res.status(201).json(newList);
  } catch (error) {
    console.log(error);
  }
};

export const updateList = async (req, res) => {
  // console.log(req);
  try {
    const updatedList = await List.findByIdAndUpdate(req.params.lid, req.body, {
      new: true,
    });
    res.status(201).json(updatedList);
  } catch (error) {
    res.send(error);
  }
};

export const deleteList = async (req, res) => {
  try {
    await List.deleteOne({ _id: req.params.lid });
    res.status(201).json({
      message: `Successfuly deleted list with id ${req.params.lid}`,
    });
  } catch (error) {
    res.send(error);
  }
};
