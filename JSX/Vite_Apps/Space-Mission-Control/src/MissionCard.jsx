import "./MissionCard.css"

function MissionCard(props) {

    return (
        <div className="missionCard">
            <h3 className="missionCard-title">{props.name}</h3>
            <p className="missionCard-status">Status: {props.children.status}</p>
            <p className="missionCard-crew">Crew: {props.crew.toString()}</p>
            <>
                {props.children}
            </>
        </div>
    )
}

export default MissionCard
