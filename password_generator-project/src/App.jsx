import "./App.css"
import { useEffect, useRef, useState } from "react"
import Input from "./components/Input/Input"

export default function App() {
  const passwordRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const [password, setPassword] = useState("")
  let minLength = 10
  let maxLength = 30
  const [passLen, setPassLen] = useState(minLength)
  const [numsAllowed, setNumsAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false)

  const generatePassword = ()=>{
    let domain = "";
    let i = 65
    while (i<=122){
      domain += String.fromCharCode(i);
      i++;
      if (i == 91) i = 97
    }

    let nums = "0123456789"
    if (numsAllowed)
      domain += nums

    let specialChars = "~!@#$%^&*"
    if (specialAllowed)
      domain += specialChars

    i=0
    let pass = ""
    while (i<passLen){
      let randIndex = Math.floor(Math.random()*passLen)
      pass += domain[randIndex]
    }

    setPassword(pass)
  }

  useEffect(generatePassword,[passLen, numsAllowed, specialAllowed])  // some issue in here

  return(
    <div id="app-container">
      <div className="main">
        <h1>Password Generator</h1>
        <div className="display">
          <Input ref={passwordRef} type="text" value={password} readOnly style={{
            border: "none",
            outline: "none",
            padding: "0.5vmax 1vmax",
            fontSize: "1.1vmax",
            borderRadius: "7px",
            width: "70%"
          }} />
          
          <button onClick={()=>{
            window.navigator.clipboard.writeText(password)
            setCopied(true)
            passwordRef.current.select()
          }}>{(copied)?"copied":"copy"}</button>
        </div>

        <div className="generator">
          <div>
            <Input label={`Length: ${passLen}`} type="range" min={minLength} max={maxLength} value={passLen} onChange={e => setPassLen(e.target.value)}/>
          </div>

          <div>
            <Input label="Numbers" type="checkbox" checked={numsAllowed} onChange={() => setNumsAllowed(prev => !prev)}/>
          </div>

          <div>
            <Input label="Special Characters" type="checkbox" checked={specialAllowed} onChange={() => setSpecialAllowed(prev => !prev)}/>
          </div>
        </div>
      </div>
    </div>
  )
}