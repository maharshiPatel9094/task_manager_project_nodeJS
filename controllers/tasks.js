const Task = require("../models/task.js");
const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTasks = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
};

const getTasks = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task")
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTask,
  deleteTask,
};
