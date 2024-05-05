import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import IndexPage from "./views/IndexPage";
import FavouritesPage from "./views/FavouritesPage";
import Layout from "./layouts/Layout";

const AppRouter = () => {

  return (
    // principal
    <BrowserRouter>
      {/* grupo de rutas */}
      <Routes>
        {/* creo las diferentes rutas */}
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter