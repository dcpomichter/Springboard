import "./HealthBar.css"

function HealthBar({ name, health }) {
    let status = ""
    if (health === 100) {
        status = "💖"
    } else if (health > 0) {
        status = "❤"
    } else {
        status = "☠"
    }
    return (
        <>
            <p>{name}'s Health: {health} {status}</p>
            <div className="HealthBar">
                <div className="HealthBar-progress" style={{ width: health + '%' }}>
                    {health}%
                </div>
            </div>
        </>
    )
}

export default HealthBar
