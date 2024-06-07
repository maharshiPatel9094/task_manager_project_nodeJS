const express = require("express")
const app = express()
const tasks = require("./routes/tasks.js")
const {getAllTasks,createTasks,getTasks,updateTask,deleteTask} = require("./controllers/tasks.js")



// middleware -- makes data available in the req.body
app.use(express.json())

// routes
app.get('/hello', getAllTasks)

// tasks routes
app.use("/api/v1/tasks", tasks)



// port
const PORT = 3000

// app listening
app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`);
})
