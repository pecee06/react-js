import "./style.css"
import Button from "../sub_components/Button/Button"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import {login} from "../../features/authSlice"
import { useNavigate, Link } from "react-router-dom"
import authService from "../../appwrite_services/auth.service"

export default function Signup(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState} = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phone: ""
        }
    })
    const {errors} = formState
    
    return (
        <div id="signup-container">
            <form onSubmit={handleSubmit(data => {
                authService.createAccount(data).then(()=>{
                    dispatch(login(data))
                    navigate("/")
                }).catch(reason => {
                    alert(reason)
                })
            })}>
                <div className="form-control">
                    <input type="text" {...register("name", {
                        required: {
                            value: true,
                            message: "Name is a required field"
                        }
                    })} placeholder="Name"/>
                    <p className="error">{errors.name?.message}</p>
                </div>

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

                <div className="form-control">
                    <input type="tel" placeholder="Contact number" {...register("phone", {
                        minLength: {
                            value: 10,
                            message: "Phone number has to be 10 digits"
                        },
                        maxLength: {
                            value: 10,
                            message: "Phone number has to be 10 digits"
                        }
                    })} />
                    <p className="error">{errors.phone?.message}</p>
                </div>

                <Button content="Signup" styles={{
                    textTransform: "uppercase",
                    padding: "1vmax",
                    fontWeight: 500,
                    fontSize: "1.3vmax",
                    backgroundColor: "#f2ac30",
                    color: "black"
                }} />
            </form>
            <div>
                <p>Already have an account?</p>
                <Link to={"/login"}>Click here to login</Link>
            </div>
        </div>
    )
}