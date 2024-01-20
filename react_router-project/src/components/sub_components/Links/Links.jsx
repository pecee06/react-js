import "./style.css"

export default function Links({heading,links}){
    return(
        <div className="links-card">
            <h5>{heading}</h5>
            <ul>
                {
                    links.map((e,index) => {
                        return (
                            <li key={index}>{e}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}