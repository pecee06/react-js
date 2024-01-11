import "./Rule.css"

export default function Rule() {
    const rules = ["Select any number", "Click on dice image", "If selected number is same as dice number, you'll get same points as on dice","On wrong guess, 2 points will be deducted"];
    return(
        <div id="rule-container">
            <h2>How to play dice game</h2>
            <div>
                {
                    rules.map((rule, index)=>(
                        <p key={index}>{rule}</p>
                    ))
                }
            </div>
        </div>
    )
}