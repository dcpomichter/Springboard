import styles from "./RootLayout.module.css"
import React from 'react'
import { NavLink, Outlet, useNavigation } from "react-router-dom"
import SpinnerLoader from "../components/SpinnerLoader"

export default function RootLayout() {

  const navigation = useNavigation()
  return (
    <div className={styles.root_layout}>
      <header>
        <nav>
          <h1>Space Travel</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="spacecrafts">Spacecrafts</NavLink>
          <NavLink to="planets">Planets</NavLink>
        </nav>
      </header>
      {navigation.state === 'loading' ? <SpinnerLoader /> :
      <main>
        <Outlet />
      </main>
      }

    </div>
  )
}
