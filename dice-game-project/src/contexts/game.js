import { createContext, useContext } from "react";

const gameContext = createContext({
    playGame: ()=>{},
    score: 0,
    updateScore: ()=>{},
    selectNumber: ()=>{},
    resetScore: ()=>{}
});

const useGameContext = ()=>{
    return useContext(gameContext);
}

export {gameContext,useGameContext};