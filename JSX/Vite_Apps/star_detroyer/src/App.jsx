import Space from './Space'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const logoDestroyer = () => {
    alert("You do not have the Power to destroy the center of this Universe!")
  }
  return (
    <>
      <div>
        <button>
          <img src={reactLogo} className="logo react" alt="React logo" onClick={logoDestroyer} />
        </button>
        <Space />
      </div>
    </>
  )
}

export default App
