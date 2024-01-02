import "./style.css"

export default function Card({url,heading,bullets,bottomLine=false,revOrder=false,imgStyle}){
    return (
        <>
            <div className="card-container">
                <img src={url} alt="" style={(revOrder)?{order:2,...imgStyle}:{order:-1,...imgStyle}}/>
                <div className="text" style={(revOrder)?{alignItems: "flex-end"}:{alignItems: "flex-start"}}>
                    <h1>{heading}</h1>
                    <ul>
                        {
                            bullets.map((e,index) => {
                                return (
                                    <li key={index}>{e}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {
                (bottomLine)?<hr />:false
            }
        </>
    )
}