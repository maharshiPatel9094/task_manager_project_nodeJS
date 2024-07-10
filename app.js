require("dotenv").config()
const express = require("express")
const app = express()
const tasks = require("./routes/tasks.js")
const {getAllTasks,createTasks,getTasks,updateTask,deleteTask} = require("./controllers/tasks.js")
const connectDB = require("./db/db.config.js")



// middleware -- makes data available in the req.body
app.use(express.static("./public"))
app.use(express.json())

// tasks routes
app.use("/api/v1/tasks", tasks)



// port
const PORT = process.env.PORT

const start = async() => {
    try {
        await connectDB
        // app listening
        app.listen(PORT, ()=>{
            console.log(`server is listening on ${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()
