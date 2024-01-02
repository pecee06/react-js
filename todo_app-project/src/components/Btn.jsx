import "./Btn.css"

export default function Btn({text,functionality,styleObj}){
    return(
        <button style={styleObj} onClick={()=>{
            if(functionality) functionality();
        }}>
            {text}
        </button>
    )
}