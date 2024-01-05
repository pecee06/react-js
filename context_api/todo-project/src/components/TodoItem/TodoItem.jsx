import "./style.css"
import { useTodo } from "../../contexts/todo"
import { useState } from "react";

export default function TodoItem({todo}){
    const {editTodo, toggleTodo, deleteTodo} = useTodo();
    const [isEditable, setIsEditable] = useState(false);
    const [task,setTask] = useState(todo.task);
    const [taskDone,setTaskDone] = useState(todo.completed);

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
                <input type="checkbox" id="completed" value={taskDone} onChange={()=>{
                    setTaskDone(!taskDone);
                    toggleTodo(todo.id);
                }}/>

                <input type="text" id="todo-task" value={task}
                style = {conditionalStyle()} onChange={e => {
                    setTask(e.target.value);
                }} disabled={!isEditable}/>
            </div>

            <div>
                <button onClick={()=>{
                    if (isEditable) editTodo(task);
                    setIsEditable(!isEditable);
                }} className="edit-btn" disabled={taskDone}>{
                    (isEditable)?"Save":"Edit"
                }</button>

                <button onClick={()=>{
                    deleteTodo(todo.id);
                }} className="delete-btn">Delete</button>
            </div>

        </div>
    )
}