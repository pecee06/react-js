import { useCard } from "../../contexts/card"

export default function Desc(){
    const value = useCard();
    return(
        <p style={{fontSize: "1.2vmax", marginTop: "1vmax"}}>{value.desc}</p>
    )
}