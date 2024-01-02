import "./Task.css"
import Btn from "./Btn"

export default function Task({index, task="", tasks=[], setTasks}){
    return(
        <div className="container">
            <div className="circle">
                <img src="../../book.svg" alt="" />
            </div>
            <p>{task}</p>
            <div>
                <Btn text="Edit" styleObj={{backgroundColor: "seagreen", color: "white"}} functionality={()=>{
                    let temp = tasks;
                    let promptAnswer = prompt("New task");
                    temp[index] = promptAnswer;
                    setTasks([...temp]);
                }}/>

                <Btn text="Delete" styleObj={{backgroundColor: "darkred", color: "white"}} functionality={()=>{
                    let temp = tasks;
                    temp.splice(index,1);
                    setTasks([...temp]);
                }}/>
            </div>
        </div>
    )
}