import React from 'react'
import SpaceTravelApi from '../services/SpaceTravelApi'
import { useRevalidator } from 'react-router-dom'

export default function DeleteSpaceship({id}) {
  const revalidator = useRevalidator()
    const handleClick = async (e) => {
      await SpaceTravelApi.destroySpacecraftById({ id })
      revalidator.revalidate()
    }


  return (
      <button className='destroyButton' onClick={handleClick} type='submit'>Destroy Spaceship</button>
)
}
