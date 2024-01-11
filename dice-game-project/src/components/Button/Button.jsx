import styles from "./Button.module.css";

export default function Button({content, dark=false, functionality}) {
    return(
        <button className={styles.Button} style={(dark)?{backgroundColor: "black", color: "white"}:{backgroundColor: "white", color: "black"}} onClick={functionality}>{content}</button>
    )
}