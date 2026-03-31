const Todo=require("../models/todo.model");
const createTodo=async(req,res)=>{
    try {
        const todo=await Todo.create(req.body);
        res.status(200).send("created succesfully")
    }
    catch (error){
        res.status(500).json({error: error.message});

    }
};
const getTodos=async(req,res)=>{
    try{
        const todo=await Todo.find();
        res.status(200).send(todo)
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};

const updateTodos=async(req,res)=>{
    try{
        const {id}=req.params;
        const updateTodos=await Todo.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"todo updated",data:updateTodos});
    }
    catch(error){
        res.status(500).json({error:error.message});

    }
}
const deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete(id);
        res.status(200).json({message:"todo deleted"});

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}

module.exports={ createTodo, getTodos,updateTodos,deleteTodo};