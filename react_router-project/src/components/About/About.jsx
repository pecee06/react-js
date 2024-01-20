import Card from "../sub_components/Card/Card"
import { videoCall, avatar, onlineMeet } from "../../assets/assets"

export default function About(){
    return (
        <>
            <Card url={videoCall} heading="One click to talk" bottomLine bullets={[
                "Jump into audio rooms with single click",
                "Securely encrypted & transmitted using WebRTC"
            ]} imgStyle={{width: "55%"}}/>

            <Card url={avatar} heading="Build your avatar" bottomLine bullets={[
                "Choose whether you door is open or closed",
                "See the rooms in your office",
                "Join the #water-cooler room to chat about personal life"
            ]} imgStyle={{width: "45%"}} revOrder/>

            <Card url={onlineMeet} heading="Supports video & screen share" bullets={[
                "Optionally move from audio to HD videos",
                "Share your designs, features & slides",
                "Securely encrypted & transmitted using WebRTC"
            ]} imgStyle={{width: "40%"}}/>
        </>
    )
}