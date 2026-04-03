const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");

const {
    getTodos,
    createTodo,
    updateTodos,
    deleteTodo
} = require("../controllers/todo.controller");

const { validateTodo } = require("../middleware/validateTodo.middleware");

// routes
router.get("/", getTodos);

router.post("/", validateTodo, createTodo); // ✅ FIX

router.put("/:id", validateTodo, updateTodos);

router.delete("/:id", deleteTodo);

module.exports = router;