import React, { useEffect } from 'react'
import eclipse from '../assets/Eclipse.gif'

export default function SpinnerLoader() {
  return (
    <img src={eclipse} alt='Loading...'/>
  )
}
