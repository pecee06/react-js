import { useState } from "react";
import "./App.css"
import Btn from "./Components/Button"

function App() {
  const [screenClr, setScreenClr] = useState("white");
  return(
    <div id="main">
      <div className="screen" style={{backgroundColor: screenClr}}></div>
      <div className="buttons">
        <Btn content="red" clrChanger={setScreenClr}/>
        <Btn content="green" clrChanger={setScreenClr}/>
        <Btn content="blue" clrChanger={setScreenClr}/>
        <Btn content="olive" clrChanger={setScreenClr}/>
        <Btn content="gray" clrChanger={setScreenClr}/>
        <Btn content="yellowgreen" clrChanger={setScreenClr}/>
        <Btn content="crimson" clrChanger={setScreenClr}/>
        <Btn content="purple" clrChanger={setScreenClr}/>
        <Btn content="rebeccapurple" clrChanger={setScreenClr}/>
        <Btn content="black" clrChanger={setScreenClr}/>
      </div>
    </div>
  )
}

export default App;