require('dotenv').config();
const mongoose = require("mongoose")

// connect mongodb string
mongoose.connect(process.env.MONGO_URI)

// object interects with database
const db = mongoose.connection


// event listners
db.on("connected", ()=>{
    console.log("DATABASE CONNECTED.....");
})  


db.on("error",()=>{
    console.log("DATABASE CONNECTION FAILED.......");
})

db.on("disconnected",()=>{
    console.log("DATABASE DISCONNECTED.......");
})

// export the database object
module.exports = db