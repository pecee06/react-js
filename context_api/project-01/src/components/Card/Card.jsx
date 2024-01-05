import "./style.css"
import Text from "../Text/Text"
import { useCard } from "../../contexts/card"

export default function Card(){
    const value = useCard();
    let style = {};
    if (value.roundImg){
        style = {
            width: "20vmax",
            height: "20vmax",
            borderRadius: "50%"
        }
    }
    return(
        <div className="card-container">
            <img src={value.url} alt="" style={style}/>
            <Text/>
        </div>
    )
}