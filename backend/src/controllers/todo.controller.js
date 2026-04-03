const Todo = require("../models/todo.model");

const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo); // ✅ FIX
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTodos = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            req.body,
            { new: true } // ✅ FIX
        );

        res.status(200).json({
            message: "Todo updated",
            data: updatedTodo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTodo,
    getTodos,
    updateTodos,
    deleteTodo
};