import { useState } from "react"
import { gameContext } from "./contexts/game";
import { HomeScreen, Game } from "./components/index";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  function playGame() {
    setGameStarted(!gameStarted);
  }
  
  function updateScore(newScore) {
    setScore(newScore);
  }
  function selectNumber() {
    
  }
  function resetScore() {
    setScore(0);
  }

  return(
    <gameContext.Provider value={{playGame, score:score, updateScore, selectNumber, resetScore}}>
      {
        (gameStarted)?<Game/>:<HomeScreen/>
      }
    </gameContext.Provider>
  )
}