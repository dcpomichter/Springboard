import React, { useEffect, useState } from 'react'
import SpaceTravelApi from '../services/SpaceTravelApi'
import { useLoaderData, Link, useNavigate } from 'react-router-dom'
import DeleteSpaceship from '../components/DeleteSpaceship'
import { nanoid } from 'nanoid'
import SpacecraftCard from '../components/SpacecraftCard'
import styles from './Spacecrafts.module.css'

export default function Spacecrafts() {
  const spacecrafts = useLoaderData();
  const navigate = useNavigate();


  return (
    <div className={styles.spacecrafts}>
      <button className={styles.newShip} onClick={() => navigate("new")}>Create New Ship</button>
      {spacecrafts.map( spacecraft => (
        <div key={nanoid()} className={styles.spacecraft}>
          <Link to={spacecraft.id.toString()}>
            <SpacecraftCard id={spacecraft.id} name={spacecraft.name} pictureUrl={spacecraft.pictureUrl} capacity={spacecraft.capacity}/>
          </Link>
          <DeleteSpaceship id={spacecraft.id} />
        </div>
      ))}
    </div>
  )
}

//loader function
export const spacecraftLoader = async () => {
  const res = await SpaceTravelApi.getSpacecrafts()

  if (res.isError === true) {
    throw Error(`${res.data}`);

  }
  return res.data
}
