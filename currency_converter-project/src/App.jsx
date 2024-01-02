import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import useConversionRates from "./hooks/useConversionRates"

function App() {
  const [inputAmount,setInputAmount] = useState(0);
  const [fromCode,setFromCode] = useState("usd");

  const [outputAmount,setOutputAmount] = useState(0);
  const [toCode,setToCode] = useState("inr");

  let data = useConversionRates(fromCode);  // fetched from API using custom hook

  const currencyCodes = [];
  for (const key in data) {
    currencyCodes.push(key);
  }
  return (
    <div id="main">
      <Input label="From" amount={inputAmount} setAmount={setInputAmount} currencyCode={fromCode} setCurrencyCode={setFromCode} currencyCodes={currencyCodes}/>

      <button id="swap-btn" onClick={()=>{
        let temp = fromCode;
        setFromCode(toCode);
        setToCode(temp);

        temp = inputAmount;
        setInputAmount(outputAmount);
        setOutputAmount(temp);
      }}>Swap</button>

      <Input label="To" amount={outputAmount} setAmount={setOutputAmount} currencyCode={toCode} setCurrencyCode={setToCode} currencyCodes={currencyCodes} isdisabled/>

      <button id="convert" onClick={()=>{
        let conversionFactor = data[toCode];
        let amt = Math.floor(inputAmount*conversionFactor);
        setOutputAmount(amt);
      }}>Convert</button>
    </div>
  )
}

export default App;
