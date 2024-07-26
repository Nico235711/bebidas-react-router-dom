import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

const IndexView = () => {

  const { drinks } = useAppStore()
  const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {drinks.drinks.map(drink => (
            <DrinkCard drink={drink} key={drink.idDrink} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">No hay resultados aún, utiliza el formulario para buscar recetas</p>
      )}
    </>
  )
}

export default IndexView