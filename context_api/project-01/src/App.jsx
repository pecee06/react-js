import "./App.css"
import {CardContext} from "./contexts/card"
import Card from "./components/Card/Card"
import { useState } from "react";

export default function App(){
  const cards = [
    {
      url: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhbmQlMjBjYW55b258ZW58MHx8MHx8fDA%3D",
      title: "Grand Canyon",
      desc: "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States"
    },
    {
      url: "https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwZm9yZXN0fGVufDB8fDB8fHww",
      title: "Amazon Forest",
      desc: "The Amazon rainforest, covering much of northwestern Brazil and extending into Colombia, Peru and other South American countries, is the world's largest tropical rainforest, famed for its biodiversity"
    },
    {
      url: "https://images.unsplash.com/photo-1488904522966-31c76bc83279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NyUyMHdvbmRlcnMlMjBvZiUyMHRoZSUyMHdvcmxkfGVufDB8fDB8fHww",
      title: "Colosseum of Rome",
      desc: "The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy"
    },
    {
      url: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NyUyMHdvbmRlcnMlMjBvZiUyMHRoZSUyMHdvcmxkfGVufDB8fDB8fHww",
      title: "Taj Mahal",
      desc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India"
    }
  ];

  const [round, setRound] = useState(false);

  return(
    <>
      <button onClick={()=>{
        setRound(!round);
      }}>{
        (round)?"Back to default":"Round Image"
      }</button>

      {
        cards.map((e,index) => {
          return (
            <CardContext.Provider value={{...e, roundImg: round}} key={index}>
              <Card/>
            </CardContext.Provider>
          )
        })
      }
    </>
  )
}