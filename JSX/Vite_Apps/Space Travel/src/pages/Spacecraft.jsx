import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import SpaceTravelApi from '../services/SpaceTravelApi'
import NavigateBackButton from '../components/NavigateBackButton'
import styles from './Spacecraft.module.css'

export default function Spacecraft() {
  const { id } = useParams()
  const spacecraft = useLoaderData()

  return (
    <div className="spacecraft-details">
      <div className={styles.container}>
        {spacecraft.pictureUrl ? <img src={spacecraft.pictureUrl} alt='Image of Spacecraft' /> : <div></div>}
      </div>
      <h2>Name: {spacecraft.name}</h2>
      <p>Capacity:{spacecraft.capacity}</p>
      <div className="description">
        <p>Description:</p>
        <p>{spacecraft.description}</p>
      </div>
      <NavigateBackButton />
    </div>
  )
}

export const spacecraftDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await SpaceTravelApi.getSpacecraftById({id});

  if (res.isError === true) {
    throw Error(`${res.data}`)
  }

  return res.data
}
