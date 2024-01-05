import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
    todos: [],  // This is an array of objects with keys {id, task, completed}
    
    // Now adding functionalities to alter this array
    addTodo: (task)=>{},
    editTodo: (id,task)=>{},
    deleteTodo: (id)=>{},
    toggleTodo: (id)=>{}
});

const useTodo = ()=>{
    return useContext(TodoContext);
}

export {TodoContext, useTodo};