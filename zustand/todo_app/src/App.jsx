import {AddTodo, Todo} from "./components/components"
import useTodoStore from "./store"

const App = () => {
  const todos = useTodoStore(state => state.todos)

  return (
    <div id="app-container" className="min-h-screen bg-slate-900 flex flex-col">
      <AddTodo/>
      <hr />
      <div className="grid grid-cols-3 justify-items-center gap-4 p-4">
        {
          todos.map(elem => (
            <Todo key={elem.id} id={elem.id} todo={elem.todo}/>
          ))
        }
      </div>
    </div>
  )
}

export default App