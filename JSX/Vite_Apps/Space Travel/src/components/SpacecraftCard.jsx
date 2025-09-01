import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SpacecraftCard.module.css'

export default function SpacecraftCard({id, name, pictureUrl,capacity}) {
    return (
        <div className={styles.card}>
            <p>{name}</p>
            <div className={styles.container}>
                {pictureUrl && <img src={pictureUrl} alt='Image of Spacecraft' />}
            </div>
            <p>Capacity: {capacity}</p>
        </div>
  )
}
