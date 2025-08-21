import styles from "./RootLayout.module.css"
import React from 'react'
import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Space Travel</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="spacecrafts">Spacecrafts</NavLink>
          <NavLink to="planets">Planets</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
