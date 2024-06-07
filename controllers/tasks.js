const getAllTasks = (req,res)=>{
    res.send("get all tasks")
}

const createTasks = (req,res)=>{
    res.send("create task")
}

const getTasks = (req,res)=>{
    res.send("get a single task")
}

const updateTask = (req,res) =>{
    res.send("update task")
}

const deleteTask = (req,res) =>{
    res.send("delete task")
}


module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTask,
    deleteTask
}