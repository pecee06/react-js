// Copied from Context API codebase
import {TodoForm, TodoItem} from "./components/index";
import { useSelector } from "react-redux";

export default function App(){
    const todos = useSelector(state => state.app.todos);

  return(
    <>
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
    </>
  )
}