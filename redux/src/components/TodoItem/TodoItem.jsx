import "./style.css"
import { useState } from "react";
import {useDispatch} from "react-redux";
import { updateTodo, removeTodo } from "../../appSlice";

export default function TodoItem({todo}){
    const dispatch = useDispatch();

    const [isEditable, setIsEditable] = useState(false);
    const [task,setTask] = useState(todo.task);

    function conditionalStyle(){
        if (todo.completed){
            return {
                backgroundColor: "lightgreen",
                textDecoration: "line-through"
            }
        }
        else{
            if (isEditable){
                return {
                    backgroundColor: "rgb(203, 191, 252)",
                    fontWeight: "400"
                }
            }
            else{
                return {
                    backgroundColor: "rosybrown"
                }
            }
        }
    }

    return (
        <div id="todo-item">
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>

                <input type="text" id="todo-task" value={task}
                style = {conditionalStyle()} onChange={e => {
                    setTask(e.target.value);
                }} disabled={!isEditable}/>
            </div>

            <div>
                <button onClick={()=>{
                    if (isEditable){
                        dispatch(updateTodo({id: todo.id, task: todo.task}));
                    }
                    setIsEditable(!isEditable);
                }} className="edit-btn">{
                    (isEditable)?"Save":"Edit"
                }</button>

                <button onClick={()=>{
                    dispatch(removeTodo(todo.id));
                }} className="delete-btn">Delete</button>
            </div>

        </div>
    )
}