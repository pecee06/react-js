import "./Game.css";
import { useGameContext } from "../../contexts/game";
import Box from "../Box/Box";
import Rule from "../Rule/Rule"
import { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function Game() {
    const values = useGameContext();

    const numbers = [1,2,3,4,5,6];

    const [diceVal, setDiceVal] = useState(1);
    const [selected, setSelected] = useState(0);
    const [showRule, setShowRule] = useState(false);

    return(
        <div id="game-container">
            <header>
                <div className="left">
                    <input type="text" value={values.score} readOnly/>
                    <p>Total Score</p>
                </div>
                <div className="right">
                    {
                        numbers.map((num, index)=>(
                            <Box key={index} content={num} isSelected={selected==num} functionality={()=>{
                                setSelected(num);
                            }}/>
                        ))
                    }
                </div>
            </header>
            <div className="main">
                    <img src={`/dice_${diceVal}.png`} alt="" onClick={()=>{
                        let n = Math.ceil(Math.random()*6);
                        setDiceVal(n);
                        if (selected == n)
                            values.updateScore(values.score+n);
                        else{
                            values.updateScore(values.score-2);
                        }
                    }}/>
                    <p>Click on Dice to roll</p>
                    <Button content={"Reset Score"} functionality={values.resetScore}/>
                    <Button content={"Show Rules"} dark functionality={()=>{
                        setShowRule(!showRule);
                    }}/>
            </div>
            {
                (showRule)?<Rule/>:<div></div>
            }
        </div>
    )
}