import { NavLink, Outlet } from "react-router-dom"

export default function Planets(planets) {
    return (
        <div>
            <h2>Planets</h2>
            <p>Info about Planets</p>
            <nav className="planet-list">
                {planets.planets.map(planet => (
                    <NavLink key={planet.id} to={planet.name}>{planet.name}</NavLink>
                ))}
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
