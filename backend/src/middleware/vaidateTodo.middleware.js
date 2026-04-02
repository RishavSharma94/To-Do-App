const { validate } = require("../models/todo.model");

const vaidateTodo=(req,res,next) =>{
    const {title , description} = req.body;
    if(!title || !description){
        res.status(400).json({message : "all fiels required"})
    }
    next();
};

module.exports = {
    validateTodo,
    
};