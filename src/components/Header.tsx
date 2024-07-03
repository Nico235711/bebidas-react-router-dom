import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

const initialState = {
  ingredient: "",
  category: ""
}

const Header = () => {

  const [searchFilters, setSearchFilters] = useState(initialState)
  const [error, setError] = useState("")
  const { pathname } = useLocation()
  const isHome = useMemo(() => pathname === "/", [pathname])
  const { categories: { drinks }, fetchCategories, searchRecipes } = useAppStore()
  
  const handleSearch = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault()

    // validar
    if (Object.values(searchFilters).includes("")) {
      setError("Todos los campos son obligatorios")
      return
    }

    // consultar recetas
    searchRecipes(searchFilters)
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  return (
    <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>
      <div className="mx-auto px-5 py-16 container">
        <div className="flex justify-between items-center">
          <div className="w-32">
            <img src="/logo.svg" alt="logotipo" />
          </div>
          <nav className="flex gap-5">
            {/* mejora de performance */}
            <NavLink
              to="/"
              className={({ isActive }) => 
                isActive ? "text-orange-600 text-xl" : "text-white text-xl"}
            >Inicio</NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) => 
                isActive ? "text-orange-600 text-xl" : "text-white text-xl"}
            >Favoritos</NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="my-5 md:w-1/2 2xl:1/3 bg-orange-400 rounded-lg p-10 shadow space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="ingredient"
                className="block text-white"
              >Nombre de la Bebida o Ingredientes</label>
              <input
                type="text"
                name="ingredient"
                id="ingredient" 
                className="mt-3 p-1 rounded-lg outline-none w-full"
                placeholder="Nombre o Ingrediente. Ej: Vodka, Tequila, Café"
                value={searchFilters.ingredient}
                onChange={handleSearch}
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-white"
              >Categoría</label>
              <select name="category" id="category" className="mt-3 p-1 rounded-lg outline-none w-full" onChange={handleSearch}>
                <option value="">-- Seleccione una Categoría --</option>
                {drinks.map(drink => (
                  <option value={drink.strCategory} key={drink.strCategory}>{drink.strCategory}</option>
                ))}
              </select>
            </div>

            <input
              type="submit"
              value="Buscar Bebida" 
              className="mt-3 p-1 rounded-lg bg-orange-600 w-60 text-xl text-white cursor-pointer hover:bg-orange-700 transition-all"
            />
          </form>
        )}
      </div>
    </header>
  )
}

export default Header