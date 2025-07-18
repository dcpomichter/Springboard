import { NavLink, Outlet } from "react-router-dom";
import NavigateBackButton from "../components/NavigateBackButton";

export default function NavBar() {
    return (
        <div className="navbar">
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="planets">Planets</NavLink>
                    <NavLink to="stars">Stars</NavLink>
                    <NavLink to="galaxies">Galaxies</NavLink>
                </nav>
                <NavigateBackButton />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
