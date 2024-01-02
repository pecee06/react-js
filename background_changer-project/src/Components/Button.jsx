import "./Button.css"

function Button({content,clrChanger}) {
    return(
        <button style={{backgroundColor: content}} onClick={()=>clrChanger(content)}>{content}</button>
    )
}

export default Button;