import { forwardRef, useId } from "react"

const Input = forwardRef(({label, type, ...props},ref=null)=>{
    const id = useId();
    return(
        <>
            {
                label &&
                <label htmlFor={id}>{label}</label>
            }
            <input type={type} id={id} ref={ref} {...props}/>
        </>
    )
})

export default Input