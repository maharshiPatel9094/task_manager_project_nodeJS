const express = require("express")
const { getAllTasks,createTasks,getTasks,updateTask,deleteTask} = require("../controllers/tasks")
const router = express.Router()

// get all the tasks
router.get("/", getAllTasks)
// create a new task
router.post("/",createTasks)
// get a single task
router.get("/:id",getTasks)
// update a task
router.patch("/:id",updateTask)
// delete a task
router.delete("/:id",deleteTask)


module.exports = router