import "./style.css"

export default function Button({content="",styles,functionality=()=>{}}){
    return(
        <button id="Btn" style={styles} onClick={functionality}>{content}</button>
    )
}