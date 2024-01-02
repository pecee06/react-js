import { useState } from 'react'
import "./style.css"

// Hooks are used to define states in React
// Though variables can be defined like usual JS, but these hooks provide us with an additional feature
// Whenever the state of a variable changes, that'll be reflected in the entire DOM (wherever it's used)
// With JS, we would need to explicitely do that

function App() {
  let [num,setNum] = useState(1);
  // useState() returns a an array containing 2 things - the variable and a function to change its state (the value as well as all its DOM occurences)
  return(
    <>
      <div className="screen">{num}</div>

      <button onClick={()=>{
        if (num < 20)
          setNum(num+1);
      }}>Increment</button>
      
      <button onClick={()=>{
        if (num > 0)
          setNum(num-1);
      }}>Decrement</button>
    </>
  )
}

export default App;