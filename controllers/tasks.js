const getAllTasks = (req,res)=>{
    res.send("get all tasks")
}

const createTasks = (req,res)=>{
    const data = req.body
    const response = res.json(data)
    console.log(response)
}

const getTasks = (req,res)=>{
    const id = req.params.id
    const response = res.json({id: id})
}

const updateTask = (req,res) =>{
    const id = req.params.id
    const data = req.body
    const response = res.json({id: id, data: data})
}

const deleteTask = (req,res) =>{
    const id = req.params.id
    const response = res.json({id: id})
}


module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTask,
    deleteTask
}