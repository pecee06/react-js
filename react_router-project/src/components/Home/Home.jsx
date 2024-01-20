import "./style.css"
import Button from "../sub_components/Button/Button"
import { useNavigate } from "react-router-dom"
import { family } from "../../assets/assets"
import { useSelector } from "react-redux"
import authService from "../../appwrite_services/auth.service"

export default function Home(){
    const loggedIn = useSelector(state => state.auth.loggedIn)
    const user = useSelector(state => state.auth.currUserInfo)

    const navigate = useNavigate()
    if (!loggedIn){
        return (
            <div className="home-container">
                <div className="left">
                    <h1>Wherever you are, you're better together.</h1>
                    <p>Virtual office for remote teams</p>
                    <Button content="Sign up for free" styles={{
                        textTransform: "uppercase",
                        width: "fit-content",
                        padding: "1vmax",
                        fontWeight: 500,
                        fontSize: "1.3vmax",
                        backgroundColor: "black",
                        color: "white"
                    }} functionality={()=>{
                        navigate("/signup")
                    }}/>
                </div>
                <img src={family} alt="family-pic" />
            </div>
        )
    }
    return (
        <div className="home-container flex-col gap">
            <h1>Hi {user.name}</h1>
            <Button content="Change your password" styles={{
                textTransform: "uppercase",
                width: "fit-content",
                padding: "1vmax",
                fontWeight: 500,
                fontSize: "1.3vmax",
                backgroundColor: "black",
                color: "white"
            }} functionality={()=>{
                const newPass = prompt("New password: ")
                authService.changePassword(newPass).then(()=>{
                    alert("Password successfully changed")
                })
            }}/>
        </div>
    )
}