import "./style.css"
import { useState } from "react";
import { useTodo } from "../../contexts/todo";

export default function TodoForm(){
    const [input,setInput] = useState("");
    const {addTodo} = useTodo();

    return (
        <div id="todo-form">
            <h1>Manage Your Todos</h1>
            <div>
                <input type="text" id="task" placeholder="Write todo here" value={input} onChange={e => {
                    setInput(e.target.value);
                }}/>

                <button onClick={()=>{
                    (input)?addTodo(input):false;
                    setInput("");
                }}>Add</button>
            </div>
        </div>
    )
}