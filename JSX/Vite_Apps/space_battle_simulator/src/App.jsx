import { useState } from 'react'
import './App.css'
import GameButton from './GameButton'
import HealthBar from './HealthBar'
import Status from './Status'

function App() {
  const initialHealth = 100;
  const [playerHealth, setPlayerHealth] = useState(initialHealth);
  const [enemyHealth, setEnemyHealth] = useState(initialHealth);

  const [status, setGameStatus] = useState("active");

  function attack({ min = 0, max = 50 }) {
    const playerAttack = Math.floor(Math.random() * (max - min + 1)) + min;
    const enemyAttack = Math.floor(Math.random() * (max - min + 1)) + min;

    const newPlayerHealth = Math.max(playerHealth - enemyAttack, 0);
    const newEnemyHealth = Math.max(enemyHealth - playerAttack, 0)

    setEnemyHealth(newEnemyHealth);
    setPlayerHealth(newPlayerHealth);

    if (newEnemyHealth === 0 && newPlayerHealth === 0) {
      setGameStatus("draw")
    } else if (newEnemyHealth === 0) {
      setGameStatus("win")
    } else if (newPlayerHealth === 0) {
      setGameStatus("lose")
    }
  }

  function restart() {
    setEnemyHealth(initialHealth)
    setPlayerHealth(initialHealth)
    setGameStatus("active")
  }

  return (
    <div>
      <h1>Space Battle Simulator</h1>
      <HealthBar name="Player" health={playerHealth} />
      <GameButton status={status} attack={attack} restart={restart} />
      <HealthBar name="Enemy" health={enemyHealth} />
      <Status status={status} />
    </div>
  )
}

export default App
