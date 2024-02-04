import { useId, useState } from "react"
import { add } from "../assets/assets"
import useTodoStore from "../store"

const AddTodo = () => {
  const id = useId()
  const [todo, setTodo] = useState("")
  const addTodo = useTodoStore(state => state.add)

  return (
    <div id="add-todo-container" className="flex justify-center py-10">
      <input type="text" placeholder="Add Todo ..." value={todo} onChange={e => setTodo(e.target.value)} className="rounded-l-lg px-4 w-80 focus:outline-none bg-gray-200 focus:bg-white"/>
      <button onClick={() => {
        addTodo(id+Math.random(), todo)
        setTodo("")
      }} className="bg-green-500 rounded-r-lg hover:bg-green-600">
        <img src={add} alt="add todo" width={50} height={50} className="invert"/>
      </button>
    </div>
  )
}

export default AddTodo