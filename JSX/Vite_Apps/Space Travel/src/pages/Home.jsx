import React from 'react'
import styles from "./Home.module.css"

export default function Home() {
  return (
    <main className='homepage'>
      <h2>Home</h2>
      <div className='homepage-intro'>
        <h3><b>The world has changed</b></h3>
        <p>Once the cradle of humanity, Earth has become a shadow of its former self due to centuries of neglect and environmental degradation. As a result, the focus of humankind has shifted beyond Earth's boundaries, and the key to their interplanetary exploration lay in a cutting-edge web application called "Space Travel."</p>
      </div>
      <div className='homepage-spacecrafts'>
        <h3><b>Space Travel, today!</b></h3>
        <p>Here at Space Travel you can design and build your own space faring vehicles to traverse the galaxy. You can design these spacecrafts to your own unique specifications with ease. Head into the Spacecraft Hangar to begin.</p>
      </div>
      <div className='homepage-planets'>
        <h3><b>Your planet of choice.</b></h3>
        <p>With the ability to travel the stars we have spent a great deal of time investigating the conditions of each planet so as to better learn how to make them more habitable to the peoples of Earth. Now you can select your destination with just the click of a button. And check the location of any ship in the armada. Just head over to the Planetarium to start.</p>
      </div>
    </main>
  )
}
