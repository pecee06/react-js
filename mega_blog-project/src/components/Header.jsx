import { useNavigate, Link } from "react-router-dom"
import {menu, menuBook, community, person} from "../assets/assets"
import { useEffect, useState } from "react"
import {authService} from "../api/api"
import { useDispatch, useSelector } from "react-redux"
import { logout, login } from "../features/auth_slice"

export default function Header() {
    const dispatch = useDispatch()
    useEffect(()=>{
        (async ()=>{
            let user = await authService.currentUser()
            if (user) dispatch(login(user))
        })()
    }, [])

    const loggedIn = useSelector(state => state.auth.loggedIn)
    const userData = useSelector(state => state.auth.userData)
    const navigate = useNavigate()

    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className="flex justify-between text-white px-3 py-2 themeBg">
            <Link to="/" className="text-lg font-bold uppercase cursor-pointer">Megablog</Link>

            <div className="relative">
                <img src={menu} alt="menu" className="invert cursor-pointer" onClick={() => setToggleMenu(prev => !prev)} />

                {toggleMenu &&
                    <div className="bg-white absolute text-black right-6 top-6 px-5 py-3 w-48 rounded-md space-y-3 shadow-2xl flex flex-col">
                        <Link to="/about" className="flex gap-3 items-center custom_border py-1 px-2 hover:bg-gray-100 themeTxt font-bold text-sm" onClick={()=>{
                            setToggleMenu(false)
                        }}>
                            <img src={community} alt="community" />
                            <span>About Us</span>
                        </Link>
                        {(loggedIn)?
                        <>
                        <div>
                            <img src={person} alt="person" />
                            <span>{userData.name}</span>
                        </div>
                            <Link to="/change-password" className="flex gap-3 items-center custom_border py-1 px-2 hover:bg-gray-100 themeTxt font-bold text-sm" onClick={() => setToggleMenu(false)}>
                            <img src={menuBook} alt="menu-book" />
                            <span>Change Password</span>
                        </Link>
                            <button className="btn" onClick={()=>{
                                authService.logout().then(res => {
                                    if (res){
                                        dispatch(logout())
                                        navigate("/")
                                    }
                                    
                                }).catch(reason => console.log(reason))
                            }}>Logout</button>
                        </>
                        :
                        <button className="btn" onClick={()=>{
                            setToggleMenu(false)
                            navigate("/login")
                        }}>Login</button>
                    }
                    </div>
                }
            </div>
        </nav>
    )
}