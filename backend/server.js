const express = require("express");
const mongoose = require('mongoose')
const Task = require("./models/taskModel")
const taskRoutes = require("./routes/taskRoute");
const dotenv = require('dotenv').config()
const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/tasks",taskRoutes)

app.get("/", (req, res) => {
    res.send("Home Page");
});


const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI
    )
    .then(() => {
        app.listen(PORT, () => {
                  console.log("Server started on port " + PORT);
                });
    })
    .catch(err => console.log(err))
