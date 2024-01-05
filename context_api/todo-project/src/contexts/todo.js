import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
    addTodo: (task)=>{},
    editTodo: (id,task)=>{},
    deleteTodo: (id)=>{},
    toggleTodo: (id)=>{}
});

const useTodo = ()=>{
    return useContext(TodoContext);
}

export {TodoContext, useTodo};