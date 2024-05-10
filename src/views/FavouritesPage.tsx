import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

const FavouritesPage = () => {

  const { favourites } = useAppStore()
  const hasFavourites = useMemo(() => favourites.length, [favourites])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>
      {hasFavourites ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {favourites.map(drink => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </div>
        </>
      ) : (
        <p className="my-10 text-center text-2xl">Los favoritos se mostrarán aquí</p>
      )}
    </>
  )
}

export default FavouritesPage