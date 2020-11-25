import List from "../models/listModel.js";

export const createTask = async (req, res) => {
  const listId = req.params.lid;
  try {
    const list = await List.findById(listId);
    list.tasks.push(req.body);
    await list.save();
    res.status(201).json({ message: "Task Added" });
  } catch (error) {
    res.status(404).json({ message: "List doesn't exist" });
  }
};

export const updateTask = async (req, res) => {
  const listId = req.params.lid;
  const taskId = req.params.tid;
  try {
    const list = await List.findById(listId);
    list.tasks.map((t) => {
      if (t._id.toString() === taskId.toString()) {
        req.body.title && (t.title = req.body.title);
        req.body.description && (t.description = req.body.description);
        (req.body.completed === true || req.body.completed === false) &&
          (t.completed = req.body.completed);
        req.body.deadline && (t.deadline = req.body.deadline);
        return t;
      } else {
        return t;
      }
    });
    list.tasks.sort((a, b) => a.completed - b.completed);
    // console.log(list.tasks);
    await list.save();
    res.status(201).json(list);
  } catch (error) {
    res.status(404).json({ message: "List doesn't exist" });
  }
};

export const deleteTask = async (req, res) => {
  const listId = req.params.lid;
  const taskId = req.params.tid;
  try {
    const list = await List.findById(listId);
    list.tasks.id(taskId).remove();
    await list.save();
    res.status(201).json({
      message: `Successfuly deleted list with id ${req.params.lid}`,
    });
  } catch (error) {
    res.status(404).json({ message: "List doesn't exist" });
  }
};
