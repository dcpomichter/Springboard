import reactLogo from './assets/react.svg'
import './App.css'
import SpacecraftBuilder from './SpacecraftBuilder'

function App() {

  return (
    <>
      <div>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <SpacecraftBuilder />
    </>
  )
}

export default App
