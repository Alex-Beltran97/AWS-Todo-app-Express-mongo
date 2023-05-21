const URL = 'http://localhost:3000/api/v1/tasks';

export let info = [];

export const getData = async () =>{
  try {
    const data = await fetch(URL);
    const tasks = await data.json();

    info = [...tasks];

  } catch (error) {
    console.log('Something went wrong getting the tasks');
    console.log(error);
  };
};

export const createTask = async (name) =>{
  try {
    
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    alert(`Task "${ name }" was created successfully!`);

    location.reload();

  } catch (error) {
    console.log('Something went wrong creating the task');
    console.log(error);
  };
};

export const updateTask = async (id, name) =>{
  try {
    
    await fetch(`${ URL }/${ id }`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    alert(`Task name has been changed to "${ name }" successfully!`);

    location.reload();

  } catch (error) {
    console.log('Something went wrong creating the task');
    console.log(error);
  };
};

export const deleteTask = async (id) =>{
  try {

    await fetch(`${ URL }/${ id }`, {
      method: "DELETE"
    });

    alert('This task was deleted successfully');

    location.reload();

  } catch (error) {
    console.log("Something went wrong while try to delete this task");
    console.log(error);
  };
};