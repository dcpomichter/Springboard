import { useState, useEffect, useRef } from "react";
import Star from "./Star";

function Space() {
    const [stars, setStars] = useState([])

    function getRandom(min = 0, max = 100) {
        return Math.random() * (max - min) + min;
    }

    const addStar = () => {
        setStars(stars => [...stars, { x: getRandom(), y: getRandom(), id: getRandom(0, 1000) }])
    }

    const destroyStar = (id) => {
        setStars(stars => stars.filter(star => star.id !== id))
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            addStar()
        }, 2500)

        return () => clearInterval(intervalId)
    }, [])
    return (
        <>
            {stars.map(({ x, y, id }) => (
                <Star
                    key={id}
                    x={x}
                    y={y}
                    id={id}
                    destroyStar={destroyStar}
                />
            ))}
        </>
    )
}

export default Space
