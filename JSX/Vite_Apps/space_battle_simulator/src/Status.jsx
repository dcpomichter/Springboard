import "./Status.css"

function Status({ status }) {
    let message;
    if (status === "active") {
        message = "Enemy Approaches, Fire when ready! 💥"
    } else if (status === "win") {
        message = "You have Destroyed the Enemy. Congratulations! 🎉"
    } else if (status === "lose") {
        message = "You Lost the Battle. Try again! 💀"
    } else {
        message = "You were evenly matched. Better luck next time."
    }
    return (
        <div className="Status">
            {message}
        </div>
    )
}

export default Status
