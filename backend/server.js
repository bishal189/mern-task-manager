const express = require("express");
const mongoose = require('mongoose')
const Task = require("./models/taskModel")
const taskRoutes = require("./routes/taskRoute");
require('dotenv').config()
const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/tasks",taskRoutes)

app.get("/", (req, res) => {
    res.send("Home Page");
});


const PORT = process.env.PORT || 5000;
console.log(process.env.MONGO_URI)
mongoose
    .connect(process.env.MONGO_URI
    )
    .then(() => {
        console.log("connected")
    })
    .catch(err => console.log(err))
    app.listen(PORT, () => {
        console.log("Server started on port " + PORT);
      });