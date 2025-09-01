import styles from "./App.module.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

//pages
import Home from "./pages/Home";
import Spacecrafts, { spacecraftLoader } from "./pages/Spacecrafts";
import Spacecraft, { spacecraftDetailsLoader } from "./pages/Spacecraft";
import Planets, { planetLoader } from "./pages/Planets";
import ErrorPage from "./pages/ErrorPage";
import Construction, { constructionAction } from "./pages/Construction";

//layouts
import RootLayout from "./layouts/RootLayout";
import SpacecraftsLayout from "./layouts/SpacecraftsLayout";
import PlanetsLayout from "./layouts/PlanetsLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="spacecrafts" element={<SpacecraftsLayout />}>
        <Route
          index
          element={<Spacecrafts />}
          loader={spacecraftLoader}
        />
        <Route
          path=":id"
          element={<Spacecraft />}
          loader={spacecraftDetailsLoader}
          errorElement={<ErrorPage />}
        />
        <Route
          path="new"
          element={<Construction />}
          action={constructionAction}
        />
      </Route>
      <Route path="planets" element={<PlanetsLayout />}>
        <Route
          index
          element={<Planets />}
          loader={planetLoader}
          errorElement={<ErrorPage />} />
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
