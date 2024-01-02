import { useState } from 'react'
import './App.css'
import Btn from './components/Btn';
import Task from './components/Task';

export default function App() {
  const [task,setTask] = useState("");
  const [tasks,setTasks] = useState([]);
  return (
    <div id="main">
      <div id='controller'>
        <h1>Todo List</h1>

        <input type="text" placeholder='add item...' value={task} onChange={e=>{
          setTask(e.target.value);
        }}/>

        <Btn text="Add" styleObj={{backgroundColor: "darkolivegreen", letterSpacing: "1px", color: "white", alignSelf: "center", width: "50%", borderRadius: "10px", fontWeight: "bold"}} functionality={()=>{
          setTasks([...tasks, task]);
          setTask("");
        }}/>
      </div>

      <div id="tasks">
        {
          tasks.map((elem,index) => {
            return <Task key={index} index={index} task={elem} tasks={tasks} setTasks={setTasks}/>
          })
        }
      </div>
    </div>
  )
}