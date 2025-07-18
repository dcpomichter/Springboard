import reactLogo from './assets/react.svg'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

//pages
import HomePage from './pages/HomePage'
import Planets from './pages/Planets'
import Stars from './pages/Stars'
import Galaxies from './pages/Galaxies'
import ContentPage from './pages/ContentPage'

//layouts
import NavBar from './layouts/NavBar'

const data = {
  "galaxies": [
    {
      "id": 1,
      "name": "Milky Way",
      "content": "Spatial coordinate: 2658.2568, Type: Spiral"

    },
    {
      "id": 2,
      "name": "Andromeda",
      "content": "Spatial coordinate: 4021.247, Type: Lenticular"
    },
    {
      "id": 3,
      "name": "Alpha-Centuri",
      "content": "Spatial coordinate: 1000.9874, Type: Irregular"
    }
  ],
  "stars": [
    {
      "id": 4,
      "name": "Omegor",
      "content": "Galaxy: Alpha-Centuri, Rating: Red Dwarf"
    },
    {
      "id": 5,
      "name": "Terran",
      "content": "Galaxy: Milky Way, Rating: Protostar"
    },
    {
      "id": 6,
      "name": "Tressum",
      "content": "Galaxy: Andromeda, Rating: Brown Dwarf"
    },
    {
      "id": 7,
      "name": "GX-375",
      "content": "Galaxy: Alpha-Centuri, Rating: White Dwarf"
    },
    {
      "id": 8,
      "name": "Sentur",
      "content": "Galaxy: Milky Way, Rating: Super Giant"
    },
    {
      "id": 9,
      "name": "BZ-456",
      "content": "Galaxy: Andromeda, Rating: Neutron Star"
    }
  ],
  "planets": [
    {
      "id": 10,
      "name": "Earth",
      "content": "Star: Terran, Galaxy: Milky Way"
    },
    {
      "id": 11,
      "name": "Centuri Prime",
      "content": "Star: GX-375, Galaxy: Alpha-Centuri"
    },
    {
      "id": 12,
      "name": "Finzgar",
      "content": "Star: Tressum, Galaxy: Andromedai"
    }
  ]
}

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path={`/${data.galaxies[0].name}`} element={<ContentPage data={data.galaxies[0]} />} />
    <Route path="/" element={<NavBar />}>
      <Route index element={<HomePage />} />
      <Route path="planets" element={<Planets planets={data.planets} />}>
        {data.planets.map(planet => (
          <Route key={planet.id} path={planet.name} element={<ContentPage data={planet} />} />
        ))}
      </Route>
      <Route path="stars" element={<Stars stars={data.stars} />}>
        {data.stars.map(star => (
          <Route key={star.id} path={star.name} element={<ContentPage data={star} />} />
        ))}
      </Route>
      <Route path="galaxies" element={<Galaxies galaxies={data.galaxies} />}>
        {data.galaxies.map(galaxy => (
          <Route key={galaxy.id} path={galaxy.name} element={<ContentPage data={galaxy} />} />
        ))}
      </Route>
    </Route>
  )
)

function App() {

  return (
    <>
      <div>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
