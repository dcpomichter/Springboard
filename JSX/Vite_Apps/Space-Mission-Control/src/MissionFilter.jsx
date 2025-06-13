import "./MissionFilter.css"

function MissionFilter({ setFilter }) {

    function handleClick(e) {
        if (e.target.classList.contains("missionFilter-all")) {
            setFilter("All")
        }
        if (e.target.classList.contains("missionFilter-pending")) {
            setFilter("Planned")
        }
        if (e.target.classList.contains("missionFilter-active")) {
            setFilter("Active")
        }
        if (e.target.classList.contains("missionFilter-completed")) {
            setFilter("Completed")
        }
    }
    return (
        <div className="missionFilter">
            <button type="button" className="missionFilter-all" onClick={handleClick}>All</button>
            <button type="button" className="missionFilter-pending" onClick={handleClick}>Pending</button>
            <button type="button" className="missionFilter-active" onClick={handleClick}>Active</button>
            <button type="button" className="missionFilter-completed" onClick={handleClick}>Completed</button>
        </div>
    )
}

export default MissionFilter
