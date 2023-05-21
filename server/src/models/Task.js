const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String, 
  active: {
    type: Boolean,
    default: true
  }
});

const Task = mongoose.model('tasks', schema);

module.exports = Task;