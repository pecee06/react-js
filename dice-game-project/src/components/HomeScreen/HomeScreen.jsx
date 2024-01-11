import styles from "./HomeScreen.module.css";
import Button from "../Button/Button"
import { useGameContext } from "../../contexts/game";

export default function HomeScreen() {
    const values = useGameContext();
    return(
        <div className={styles.HomeScreen}>
            <img src="/dices.png" alt="Dices" />
            <div>
                <h1>dice game</h1>
                <Button content={"Play Now"} dark functionality={values.playGame}/>
            </div>
        </div>
    )
}