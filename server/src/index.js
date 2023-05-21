const express = require("express");
const PORT = 3000;
const path = require('path');
const connectionDB = require("./db/dbConnection");

const apiPath = '/api/v1';

const taskRoutes = require("./routes/tasks.routes");

const app = express();

connectionDB();

app.use(express.static(path.join(__dirname, "../../public")));

app.use(express.json());

app.use(`${ apiPath }/tasks`, taskRoutes);

app.listen(PORT, ()=>{
  console.log(`Listening in port http://localhost:${ PORT }`);
});



