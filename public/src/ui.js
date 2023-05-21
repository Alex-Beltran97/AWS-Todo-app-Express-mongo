const templateTask = document.getElementById('template-task').content;
const fragment = document.createDocumentFragment();
const taskContainer = document.getElementById('task-container');

const ui = (info = []) =>{

  info.forEach( item =>{
    const clone = templateTask.cloneNode(true);

    clone.getElementById('taskName').innerHTML = item.name;
    clone.getElementById('deleteTask').setAttribute('value', item._id);
    clone.getElementById('updateTask').setAttribute('name', item.name);
    clone.getElementById('updateTask').setAttribute('value', item._id);

    fragment.appendChild(clone);
  });

  taskContainer.appendChild(fragment);

};

export default ui;