import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { login } from "../../features/authSlice"
import Button from "../sub_components/Button/Button"
import "./style.css"
import authService from "../../appwrite_services/auth.service"

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {register, handleSubmit, formState} = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const {errors} = formState

    return (
        <div id="login-container">
            <form onSubmit={handleSubmit(data => {
                authService.loginToAccount(data).then(value => {
                    if (value){
                        authService.getCurrUser().then(user => {
                            dispatch(login({...data, name: user.name}))
                            navigate("/")
                        })
                    }
                    else{
                        alert("Invalid Login credentials")
                        navigate("/signup")
                    }
                }).catch(reason => {
                    alert(reason)
                })
            })}>
                
                <div className="form-control">
                    <input type="email" placeholder="Email" {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Enter a valid Email address"
                        }
                    })} />
                    <p className="error">{errors.email?.message}</p>
                </div>

                <div className="form-control">
                    <input type="password" placeholder="Password" {...register("password", {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "Password should atleast be 8 characters"
                        }
                    })} />
                    <p className="error">{errors.password?.message}</p>
                </div>
                
                <Button content="Login" styles={{
                    textTransform: "uppercase",
                    padding: "1vmax",
                    fontWeight: 500,
                    fontSize: "1.3vmax",
                    backgroundColor: "#f2ac30",
                    color: "black"
                }} />
            </form>
            <div>
                <p>Don't have an account yet?</p>
                <Link to={"/signup"}>Click here to signup</Link>
            </div>
        </div>
    )
}