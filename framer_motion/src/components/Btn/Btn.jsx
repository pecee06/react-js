import { motion } from "framer-motion";

export default function Btn({content="", functionality=()=>{}, customStyles={}, hoverGestures={}}) {
    const stylePreset = {
        fontSize: "1.3vmax",
        border: "none",
        outline: "none",
        backgroundColor: "rgb(255,255,255)",
        color: "rgb(0,0,0)",
        fontWeight: "bold",
        borderRadius: "10px",
        cursor: "pointer"
    };

    return(
        <motion.button style={{
            ...stylePreset, ...customStyles
        }} onClick={functionality} whileHover={hoverGestures} transition={{
            duration: 0.2,
            type: "ease"
        }}>{content}</motion.button>
    );
}