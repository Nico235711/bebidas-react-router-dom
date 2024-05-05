import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import IndexPage from "./views/IndexPage";
import FavouritesPage from "./views/FavouritesPage";

const AppRouter = () => {

  return (
    // principal
    <BrowserRouter>
      {/* grupo de rutas */}
      <Routes>
        {/* creo las diferentes rutas */}
        <Route path="/" element={<IndexPage />} />
        <Route path="/favoritos" element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter