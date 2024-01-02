import "./style.css"
import Button from "../Button/Button"

export default function Home(){
    return (
        <div className="home-container">
            <div className="left">
                <h1>Wherever you are, you're better together.</h1>
                <p>Virtual office for remote teams</p>
                <Button content="Sign up for free" styles={{textTransform: "uppercase", width: "fit-content", padding: "1vmax", fontWeight: 500, fontSize: "1.3vmax", backgroundColor: "black"}}/>
            </div>
            <img src="../../family.svg" alt="family-pic" />
        </div>
    )
}