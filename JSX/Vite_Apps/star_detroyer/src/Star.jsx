import { useEffect, useRef } from "react";
import "./Star.css"

function Star({ x, y, id, destroyStar }) {
    const focus = useRef()
    useEffect(() => {
        focus.current.focus()
    }, [])
    return (
        <div
            className="Star"
            ref={focus}
            onClick={() => destroyStar(id)}
            tabIndex="0"
            style={{
                position: 'absolute',
                top: `${y}vh`,
                left: `${x}vw`
            }}
        >
        </div>
    )
}

export default Star
