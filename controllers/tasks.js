const Task = require("../models/task.js");
const asyncHandler = require("../middleware/async.js");

// get all tasks
const getAllTasks = asyncHandler(async (req, res) => {
  // find({}) --> get all the tasks
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
// create tasks
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
// get a task
const getTasks = async (req, res) => {
  try {
    4;
    // get id
    const { id: taskID } = req.params;
    // find by id
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `no task with ID ${taskID}` });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// update a task
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `no task with ID ${taskID}` });
    }
    res.status(200).json({ id: taskID, data: req.body });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// delete a task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with ID ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTask,
  deleteTask,
};
