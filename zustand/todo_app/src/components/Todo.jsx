import { edit, del, save } from "../assets/assets"
import useTodoStore from "../store"
import { useState } from "react"

const Todo = ({id, todo}) => {
    const [editTodo, deleteTodo]  = useTodoStore(state => ([
        state.edit,
        state.delete
    ]))
    const [editable, setEditable] = useState(false)
    const [task, setTask] = useState(todo)

  return (
    <div id="todo-container" className="flex flex-col items-center p-3 w-fit rounded-md border border-solid border-yellow-300">
        <textarea rows={8} cols={20} contentEditable={editable} onInput={e => setTask(e.target.value)} value={task} className="bg-white disabled:bg-gray-200 rounded-md focus:outline-none text-lg font-bold p-3"/>
        
        <div>
            <button className="btn" onClick={()=>{
                setEditable(prev => !prev)
            }}>
                {editable?
                    <img src={save} alt="save todo" width={50} height={50} className="bg-gray-500 hover:bg-gray-600 rounded-md" onClick={() => editTodo(id, task)}/>:
                    <img src={edit} alt="edit todo" width={50} height={50} className="bg-violet-500 hover:bg-violet-600 rounded-md"/>
                }
            </button>

            <button onClick={() => deleteTodo(id)}>
                <img src={del} alt="delete todo" width={50} height={50} className="bg-red-600 hover:bg-red-700 rounded-md"/>
            </button>
        </div>
    </div>
  )
}

export default Todo