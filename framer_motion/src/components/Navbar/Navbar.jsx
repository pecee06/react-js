import Btn from "../Btn/Btn";
import "./style.css";
import { motion } from "framer-motion";

export default function Navbar({brandName}) {
    return(
        <motion.div id="navbar-container" initial={{
            y: "-100%"
        }} animate={{
            y: 0
        }} transition={{
            duration: 1,
            type: "spring"
        }}>
            <div className="left">{brandName}</div>
            <div className="right">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <Btn content="Signup" customStyles={{
                    borderRadius: 0,
                    padding: "0 2.5vmax",
                    borderTopLeftRadius: "25%",
                    borderBottomLeftRadius: "50%"
                }} hoverGestures={{
                    backgroundColor: "rgb(167, 44, 112)",
                    color: "rgb(255,255,255)",
                    borderLeft: "1px solid white"
                }}/>
            </div>
        </motion.div>
    )
}