import styles from "./App.module.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

//pages
import Home from "./pages/Home";
import Spacecrafts from "./pages/Spacecrafts";
import Spacecraft from "./pages/Spacecraft";
import Planets from "./pages/Planets";

//layouts
import RootLayout from "./layouts/RootLayout";
import SpacecraftsLayout from "./layouts/SpacecraftsLayout";
import PlanetsLayout from "./layouts/PlanetsLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="spacecrafts" element={<SpacecraftsLayout />}>
        <Route index element={<Spacecrafts />} />
        <Route path=":id" element={<Spacecraft />} />
      </Route>
      <Route path="planets" element={<PlanetsLayout />}>
        <Route index element={<Planets />} />
      </Route>

      <Route path='*' element={<Home />} />
    </Route>
  )
)
function App ()
{
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
