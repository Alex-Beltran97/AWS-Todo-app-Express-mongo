const mongoose = require("mongoose");

const connectionDB = async () =>{
  try { 

    await mongoose.connect('mongodb://localhost:27017/todo');

    console.log("MongoDB is connected!")

  } catch (error) {
    console.log('Connection to DB went wrong');
    console.log(error);
  };
};

module.exports = connectionDB;