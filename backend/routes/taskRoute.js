const express = require("express")
const Task = require('../models/taskModel')
const { createTask, getAllTasks, getTask, deleteTask, updateTask } = require("../controllers/taskCotroller")
const router = express.Router()

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

// router.post("/" , createTask)
// router.get("/", getAllTasks)
// router.get("/:id", getTask)
// router.delete("/:id", deleteTask)
// router.put("/:id", updateTask)

module.exports = router;