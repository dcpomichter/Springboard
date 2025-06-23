import "./Card.css"
import { useState } from "react"

function Card({ value, suit, img }) {

    const [rotation, setRotation] = useState(Math.floor(Math.random() * 45 - 10))

    return (
        <div className="Card">
            <img alt={`${value} of ${suit}`} src={img} style={{ rotate: `${rotation}deg` }} />
        </div >
    )
}

export default Card
