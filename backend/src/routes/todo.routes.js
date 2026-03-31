const express=require("express");

const router=express.Router();

const {getTodos,createTodo,updateTodos,deleteTodo}=require("../controllers/todo.controller")

router.get("/",getTodos)

router.post("/",createTodo)

router.put("/:id",updateTodos)

router.delete("/:id",deleteTodo)


module.exports=router;