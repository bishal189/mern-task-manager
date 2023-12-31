const Task = require("../models/taskModel")

const createTask = async(req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

const getTask = async(req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findById(id)
        if(!task) {
            return res.status(404).json(`No task with id ${id} found`)
        }
        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

const deleteTask = async(req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).json(`No task with id ${id} found`)
        }
        res.status(200).send()
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

const updateTask = async(req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true}
        )
        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    deleteTask,
    updateTask
}