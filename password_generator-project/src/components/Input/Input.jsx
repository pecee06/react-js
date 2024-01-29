import { forwardRef, useId } from "react"

const Input = forwardRef(({label, type, ...props},ref)=>{
    const id = useId();
    return(
        <>
            {
                label &&
                <label htmlFor={id} style={{
                    marginRight: "0.5vmax"
                }}>{label}</label>
            }
            <input type={type} id={id} ref={ref} {...props}/>
        </>
    )
})

export default Input