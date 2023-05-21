const Task = require('../models/Task');

const getAllTasks = async (req, res) =>{
  try {

    const tasks = await Task.find({ active: true });

    res.json(tasks);

  } catch (error) {
    
    console.log(error);

    res.status(500).json({
      message: "Something went wrong getting the tasks"
    });

  };
};

const getTask = async (req, res) =>{

  const { id } = req.params;

  try {

    const task = await Task.findById(id);
    
    if(!task) {
      return res.status(404).json({
        message: `Task with id ${ id } not found`
      });
    };

    res.json(task);

  } catch (error) {
    
    console.log(error);

    res.status(500).json({
      message: "Something went wrong getting this task"
    });

  };
};

const createTask = async (req, res) =>{

  const { body } = req;
  try {

    const task = await Task.create(body);

    await task.save();

    res.json(task);

  } catch (error) {
    
    console.log(error);

    res.status(500).json({
      message: "Something went wrong deleting task"
    });

  };
};

const updateTask = async (req, res) =>{

  const { body, params } = req;

  try {

    const task = await Task.findById(params.id);

    if(!task) {
      return req.status(404).json({
        message: `Task with id "${ id } not found"`
      });
    };

    await task.updateOne(body);

    res.json(task);

  } catch (error) {
    
    console.log(error);

    res.status(500).json({
      message: "Something went wrong updating task"
    });

  };
};

const deleteTask = async (req, res) =>{

  const { id } = req.params;

  try {

    const task = await Task.findById(id);

    if(!task) {
      return req.status(404).json({
        message: `Task with id "${ id } not found"`
      });
    };

    await task.updateOne({ active: false });

    res.json(task);

  } catch (error) {
    
    console.log(error);

    res.status(500).json({
      message: "Something went wrong deleting task"
    });

  };
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};