import "./MissionAction.css"

function MissionAction({ missionId, updateMissionStatus }) {

    function handleClick(e) {
        if (e.target.classList.contains("missionAction-launch")) {
            updateMissionStatus(missionId, "Active")
        }
        if (e.target.classList.contains("missionAction-complete")) {
            updateMissionStatus(missionId, "Completed")
        }
    }

    return (
        <div className="missionAction">
            <button className="missionAction-launch" onClick={handleClick}>Launch!</button>
            <br />
            <button className="missionAction-complete" onClick={handleClick} >Complete</button>
        </div>
    )
}

export default MissionAction
