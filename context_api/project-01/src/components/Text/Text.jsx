import Desc from "../Desc/Desc"
import { useCard } from "../../contexts/card"

export default function Text(){
    const value = useCard();
    return(
        <div className="text-container">
            <h3 style={{fontSize: "2vmax"}}>{value.title}</h3>
            <Desc/>
        </div>
    )
}