import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PlanetsLayout() {
  return (
    <main className='planets-layout'>
      <Outlet />
    </main>
  )
}
