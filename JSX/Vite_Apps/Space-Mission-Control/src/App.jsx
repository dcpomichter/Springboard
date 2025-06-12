import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={reactLogo} className="logo-react" alt="React logo" />
      </div>
      <h1>Space Mission Control</h1>
    </>
  )
}

export default App
