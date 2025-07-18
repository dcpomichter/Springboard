import { NavLink, Outlet } from "react-router-dom"

export default function Stars(stars) {
    return (
        <div>
            <h2>Stars</h2>
            <p>Info about Stars</p>
            <nav className="star-list">
                {stars.stars.map(star => (
                    <NavLink key={star.id} to={star.name}>{star.name}</NavLink>
                ))}
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
