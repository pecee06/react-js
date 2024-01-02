import "./Input.css"

export default function Input({label, amount, setAmount, currencyCodes=[], currencyCode, setCurrencyCode, isdisabled=false}){
    return(
        <div className="container">
            <div className="left">
                <label htmlFor="amount">{label}</label>
                <input type="number" id="amount" disabled={isdisabled} value={amount} onChange={(e)=>{
                    let val = Number(e.target.value);
                    (val>=0)?setAmount(val):setAmount(0);
                }}/>
            </div>
            <div className="right">
                <label htmlFor="code">Currency Code</label>
                <select id="code" value={currencyCode} onChange={(e)=>{
                    setCurrencyCode(e.target.value);
                }}>
                    {
                        currencyCodes.map((elem)=>{
                            return(
                                <option key={elem} value={elem}>{elem.toUpperCase()}</option>
                                // key uniquely identifies an option
                            )
                        })
                        // Though map() returns an array, still we haven't destuctured the result
                    }
                </select>
            </div>
        </div>
    )
}