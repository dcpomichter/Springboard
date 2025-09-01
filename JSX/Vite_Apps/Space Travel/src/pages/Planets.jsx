import React, { useEffect, useState } from 'react'
import SpaceTravelApi from '../services/SpaceTravelApi'
import { useLoaderData, Link, useRevalidator } from 'react-router-dom'
import { nanoid } from 'nanoid'
import Planet from '../components/Planet'

export default function Planets() {
  const { planets, spacecrafts } = useLoaderData()
  const [selectedShip, setSelectedShip] = useState('')
  const [selectedPlanet, setSelectedPlanet] = useState('')
  const revalidate = useRevalidator()

  useEffect(() => {
    const targetPlanetId = selectedPlanet
    const spacecraftId = selectedShip
    if (selectedPlanet && selectedShip) {
      SpaceTravelApi.sendSpacecraftToPlanet({ spacecraftId, targetPlanetId })
      revalidate.revalidate()
      setSelectedPlanet('')
      setSelectedShip('')
    }
  },[selectedPlanet, selectedShip])

  const planetSelector = (id) => {
    setSelectedPlanet(id)
  }

  const shipSelector = (id) => {
    setSelectedShip(id)
  }

  return (
    <div className='planets'>
      {planets.map(planet => {
        const stationed = spacecrafts.filter(spacecraft => spacecraft.currentLocation === planet.id)
      return (
        <div key={nanoid()} className='planet'>
          <Planet id={planet.id} name={planet.name} currentPopulation={planet.currentPopulation} pictureUrl={planet.pictureUrl} stationed={stationed} planetSelector={planetSelector} shipSelector={shipSelector}/>
        </div>
      )})}
    </div>
  )
}

//loader function
export const planetLoader = async () => {
  const planets = await SpaceTravelApi.getPlanets()
  const spacecrafts = await SpaceTravelApi.getSpacecrafts()


  if (planets.isError === true) {
    throw Error(`${planets.data}`);

  }
  if (spacecrafts.isError === true) {
    throw Error(`${spacecrafts.data}`);

  }
  return {
    planets: planets.data,
    spacecrafts: spacecrafts.data
  }
}
