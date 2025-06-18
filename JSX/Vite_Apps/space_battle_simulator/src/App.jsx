import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button style={{ textAlign: "center" }}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </button>
        <h3>Fire!</h3>
      </div>
    </>
  )
}

export default App
