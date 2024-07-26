import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import IndexView from "./views/IndexView";
import FavouritesView from "./views/FavouritesView";

const AppRouter = () => {

  return (
    // principal
    <BrowserRouter>
      {/* grupo de rutas */}
      <Routes>
        {/* creo las diferentes rutas */}
        <Route element={<Layout />}>
          {/* tanto IndexPage y FavouritesPage usarán Layout */}
          <Route path="/" element={<IndexView />} index />
          <Route path="/favoritos" element={<FavouritesView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter