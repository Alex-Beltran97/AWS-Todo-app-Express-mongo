import { getData, info, deleteTask, createTask, updateTask } from './http/http.js';
import ui from './ui.js';

const form = document.getElementById("form");

const main = async () =>{
  
  await getData();

  ui(info);

};

main();

form.addEventListener("submit",function (e) {

  e.preventDefault();

  const formData = new FormData(this);

  const taskName = formData.get("name");

  if(!taskName.trim()) return alert("Please don't let empty fields");

  createTask(taskName);

  this.reset();
});

document.addEventListener("click",(e)=>{
  const id = e.target.id;
  
  switch(id) {
    case "deleteTask":
      deleteTask(e.target.value);
    break;
    case "updateTask":
      changeTaskName(e.target.value, e.target.name);
    break;
  };

});

function changeTaskName(id, name) {
  const newName = prompt('Set the new name for the task:', name);

  updateTask(id, newName);
};