import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SpacecraftsLayout() {
  return (
    <main className='spacecraft-layout'>
      <Outlet />
    </main>
  )
}
