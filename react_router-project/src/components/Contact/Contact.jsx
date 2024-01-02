import "./style.css"
import Button from "../Button/Button"
import { useState } from "react"

export default function Contact(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    return (
        <div className="contact-container">
            <div className="form">
                <h2>Contact Us</h2>
                <div className="input-fields">
                    <input type="text" id="name" placeholder="Name" value={name} onChange={e => {
                        setName(e.target.value);
                    }}/>
                    <input type="email" id="email" placeholder="Email" value={email} onChange={e => {
                        setEmail(e.target.value);
                    }}/>
                    <input type="tel" id="phone" placeholder="Phone" value={phone} onChange={e => {
                        setPhone(e.target.value);
                    }}/>
                </div>
                <Button content="Submit" styles={{width: "fit-content", padding: "0.5vmax 1vmax", fontWeight: 500, fontSize: "1.2vmax", backgroundColor: "#03608b"}} functionality={()=>{
                    console.log({name:name,email:email,phone:phone});
                    setName("");
                    setEmail("");
                    setPhone("");
                }}/>
            </div>
        </div>
    )
}