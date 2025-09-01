import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Planet.module.css'

export default function Planet({ id, name, currentPopulation, pictureUrl, stationed, planetSelector, shipSelector }) {
    const handlePlanetClick = (e) => {
        planetSelector(id)
    }
    const handleShipClick = (e) => {
        shipSelector(e.target.dataset.id)
    }
    return (
        <div className={styles.planet} >
            <div className={styles.container} onClick={handlePlanetClick}>
                <img src={pictureUrl} alt='Image of Spacecraft' />
            </div>
            <p>{name}</p>
            <p>Population: {currentPopulation}</p>
            {stationed.map((spacecraft) => (
                <div className={styles.spacecraft} key={spacecraft.id} data-id={spacecraft.id} onClick={handleShipClick}>
                    <div className={styles.spaceContainer}>
                        {spacecraft.pictureUrl && <img src={spacecraft.pictureUrl}/>}
                    </div>
                    {spacecraft.name}
                </div>
            ))}
        </div>
    )
}
