import reactLogo from './assets/react.svg'
import "./GameButton.css"

function GameButton({ status, attack, restart }) {
    if (status === "active") {
        return (
            <button onClick={attack} style={{ textAlign: "center" }}>
                Fire!
                <br />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </button>
        )
    } else {
        return (
            <button onClick={restart} style={{ textAlign: "center" }}>
                RESTART
            </button>
        )
    }
}

export default GameButton
