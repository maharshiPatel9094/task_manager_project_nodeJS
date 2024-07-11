require("dotenv").config()
const express = require("express")
const app = express()
const tasks = require("./routes/tasks.js")
const connectDB = require("./db/db.config.js")
const routeNotAvailable = require("./middleware/error.js")

// middleware for using public static files
app.use(express.static("./public"))
// middleware -- makes data available in the req.body
app.use(express.json())
// middleware not available for no route available
app.use(routeNotAvailable)


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
