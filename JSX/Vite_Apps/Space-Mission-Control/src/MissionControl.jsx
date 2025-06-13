import { useState } from "react"
import MissionCard from "./MissionCard"
import MissionAction from "./MissionAction"
import MissionFilter from "./MissionFilter"

function MissionControl({ initialMissions }) {
    const initialFilter = "All";

    const [missions, setMissions] = useState(initialMissions);
    const [filter, setFilter] = useState(initialFilter);

    function updateMissionStatus(id, newStatus) {
        setMissions(prevMissions => prevMissions.map(mission => mission.id === id ? { ...mission, status: newStatus } : mission));
    }

    const filteredMissions = missions.filter(mission => filter === "All" || mission.status === filter);

    return (
        <>
            <MissionFilter setFilter={setFilter} />
            {filteredMissions.map(({ id, name, status, crew }) => (
                <div key={id}>
                    <MissionCard name={name} status={status} crew={crew} />
                    <MissionAction missionId={id} updateMissionStatus={updateMissionStatus} />
                </div>
            ))
            }
        </>
    )
}

export default MissionControl
