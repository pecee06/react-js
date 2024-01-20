import "./style.css"
import Logo from "../Logo/Logo"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {login, logout} from "../../../features/authSlice"
import authService from "../../../appwrite_services/auth.service";
import { useEffect } from "react";

export default function Header(){
    const dispatch = useDispatch()

    useEffect(()=>{
        authService.getCurrUser().then(user => {
            if (user) dispatch(login(user))
            else dispatch(logout())
        })
    },[])

    const loggedIn = useSelector(state => state.auth.loggedIn)

    return (
        <>
            <header>
                <Logo/>
                <div className="tabs">
                    <NavLink to="" style={({isActive}) => (isActive) ? {color: "#0394d6"}:{color: "black"}}>
                        Home
                    </NavLink>

                    <NavLink to="about" style={({isActive}) => (isActive) ? {color: "#0394d6"}:{color: "black"}}>
                        About
                    </NavLink>

                    {
                        !loggedIn &&
                        <NavLink to="login" style={({isActive}) => (isActive) ? {color: "#0394d6"}:{color: "black"}}>
                            Login
                        </NavLink>
                    }

                    {
                        loggedIn &&
                        <NavLink to="" style={{color: "black"}} onClick={async ()=>{
                            const res = confirm("Logout from all devices?")
                            if (res) await authService.globalLogout()
                            else await authService.logoutFromThisDevice()
                            dispatch(logout())
                        }}>
                            Logout
                        </NavLink>
                    }
                </div>
            </header>
            <hr />
        </>
    )
}