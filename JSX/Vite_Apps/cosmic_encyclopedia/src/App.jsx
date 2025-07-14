import reactLogo from './assets/react.svg'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  NavLink,
  RouterProvider
} from 'react-router-dom'

//pages
import HomePage from './pages/HomePage'

//layouts
import NavBar from './layouts/NavBar'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route to="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  )

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
