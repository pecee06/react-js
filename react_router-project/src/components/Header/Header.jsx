import "./style.css"
import Logo from "../Logo/Logo"
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <>
            <header>
                <Logo/>
                <div className="tabs">
                    <NavLink to="" style={({isActive}) => ((isActive)?{color: "#0394d6"}:{color: "black"})}>
                        Home
                    </NavLink>

                    <NavLink to="about" style={({isActive}) => ((isActive)?{color: "#0394d6"}:{color: "black"})}>
                        About
                    </NavLink>

                    <NavLink to="contact" style={({isActive}) => ((isActive)?{color: "#0394d6"}:{color: "black"})}>
                        Contact
                    </NavLink>
                </div>
            </header>
            <hr />
        </>
    )
}