import { useEffect, useState } from "react"
import { TodoContext } from "./contexts/todo"
import {TodoForm, TodoItem} from "./components/index"

export default function App(){
  const [todos,setTodos] = useState([]);

  function addTodo(task) {
    const todo = {
      id: Date.now(),
      task: task,
      completed: false
    };

    setTodos([...todos, todo]);
  }

  function editTodo(id, task) {
    let temp = [...todos];
    setTodos(temp.map(todo => {
      if (todo.id == id){
        todo.id = Date.now();
        todo.task = task;
      }
      return todo;
    }));
  }

  function deleteTodo(id) {
    let temp = [...todos];
    setTodos(temp.filter(todo => {
      return todo.id != id;
    }))
  }

  function toggleTodo(id) {
    let temp = [...todos];
    setTodos(temp.map(todo => {
      if (todo.id == id){
        let flag = todo.completed;
        todo.completed = !flag;
      }
      return todo;
    }));
  }

  // Preserving todos in Local Storage
  // Loading
  useEffect(()=>{
    let storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos && storedTodos.length > 0)
      setTodos(storedTodos);
  },[]);

  // Uploading
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return(
    <TodoContext.Provider value={{todos,addTodo,editTodo,deleteTodo,toggleTodo}}>
      <TodoForm/>
      <hr />
      <div id="todo-items" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5vmax",
        padding: "1vmax 0"
      }}>
        {
          todos.map(todo => (<TodoItem key={todo.id} todo={todo}/>))
        }
      </div>
    </TodoContext.Provider>
  )
}