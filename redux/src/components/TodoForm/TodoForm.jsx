import "./style.css";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../appSlice";

export default function TodoForm(){
    const [input,setInput] = useState("");
    const dispatch = useDispatch();

    return (
        <div id="todo-form">
            <h1>Manage Your Todos</h1>
            <div>
                <input type="text" id="task" placeholder="Write todo here" value={input} onChange={e => {
                    setInput(e.target.value);
                }}/>

                <button onClick={()=>{
                    (input)?dispatch(addTodo(input)):false;
                    setInput("");
                }}>Add</button>
            </div>
        </div>
    )
}