import MissionCard from "./MissionCard"
import MissionAction from "./MissionAction"
import MissionFilter from "./MissionFilter"

function MissionControl({ missions }) {
    return (
        <>
            {missions.map(({ name, status, crew, id }) => (
                <MissionCard key={id} name={name} status={status} crew={crew}>
                    <MissionAction status={status} />
                </ MissionCard>
            ))
            }
        </>
    )
}

export default MissionControl
