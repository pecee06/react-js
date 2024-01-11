import styles from "./Box.module.css"

export default function Box({content, isSelected, functionality}) {
    return(
        <div className={styles.Box} style={(isSelected)?{backgroundColor: "black", color: "white"}:{backgroundColor: "white", color: "black"}} onClick={functionality}>{content}</div>
    )
}