import "./style.css"
import { useForm } from "react-hook-form"
import Input from "../Input/Input"
import { userIcon, mailIcon, phoneIcon } from "../../assets/svgs/svgs"

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        }
    })

    const contact = "333-33-33"
    return(
        <>
            <div id="form-container">
                <div className="text">
                    <h1>Contact Us</h1>
                    <p>We'll get back to you ASAP</p>
                </div>
                <form onSubmit={handleSubmit(data => console.log(data))}>
                    <div className="name">
                        <Input placeholder="First Name" name="firstName" register={register} icon={userIcon} validations={{
                            required: {
                                value: true,
                                message: "Your first name is mandatory"
                            }
                        }} />

                        {
                            errors.firstName &&
                            <p className="errMsg">{errors.firstName.message}</p>
                        }

                        <Input placeholder="Last Name" name="lastName" register={register} />
                    </div>

                    <div>
                        <Input type="email" placeholder="Email" name="email" register={register} icon={mailIcon} validations={{
                            required: {
                                value: true,
                                message: "Your email is mandatory"
                            },
                            pattern: {
                                value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
                                message: "Enter a valid Email. For example - xyz@mailprovider.com"
                            }
                        }} />

                        {
                            errors.email &&
                            <p className="errMsg">{errors.email.message}</p>
                        }

                    </div>

                    <div>
                        <Input type="tel" placeholder="Phone" name="phone" register={register} icon={phoneIcon} />
                    </div>

                    <input type="submit" value="Send" className="btn" />
                </form>
                <p>You may also call us at {contact}</p>
            </div>
        </>
    )
}