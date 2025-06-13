import "./MissionCard.css"

function MissionCard({ name, status, crew }) {
    return (
        <div className="missionCard">
            <h3 className="missionCard-title">{name}</h3>
            <p className="missionCard-status">Status: {status}</p>
            <p className="missionCard-crew">Crew: {crew.toString()}</p>
        </div>
    )
}

export default MissionCard
