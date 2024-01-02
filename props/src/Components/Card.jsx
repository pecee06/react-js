import "./card.css"

function Card({url,title,desc}) {
    // We have passed a destructred object (prop) as parameter to this function
    // This means, this can be used as a template for generating cards by changing the arguments
    return(
        <div className="card">
            <img src={url}/>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Card;