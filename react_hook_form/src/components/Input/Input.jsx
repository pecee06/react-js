import "./style.css"

export default function Input({type="text", placeholder="", register, name="fieldName", icon, validations={}}) {
    return(
        <>
            {
                icon &&
                <label htmlFor={name}>
                    <img src={icon} alt={name} className="input-icon" />
                </label>
            }
            <input className="input" type={type} placeholder={placeholder} {...register(name,validations)} id={name} />
        </>
    )
}