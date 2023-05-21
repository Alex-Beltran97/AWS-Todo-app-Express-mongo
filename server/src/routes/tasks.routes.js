const Router = require("express").Router;

const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const router = Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
