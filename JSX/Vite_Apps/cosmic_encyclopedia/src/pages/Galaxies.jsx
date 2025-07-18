import { NavLink, Outlet } from "react-router-dom"

export default function Galaxies(galaxies) {
    return (
        <div>
            <h2>Galaxies</h2>
            <p>Galaxies are a collection of stars, planets, and other celestial bodies moving about the same axis in space. Several tpes of galxies exist and have been discovered.</p>
            <nav className="galaxy-list">
                {galaxies.galaxies.map(galaxy => (
                    <NavLink key={galaxy.id} to={galaxy.name}>{galaxy.name}</NavLink>
                ))}
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
