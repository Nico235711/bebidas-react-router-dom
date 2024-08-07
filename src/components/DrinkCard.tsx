import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
  drink: Drink
}

const DrinkCard = ({ drink }: DrinkCardProps) => {

  const { fecthIdRecipe, getIdDrink } = useAppStore()

  return (
    <div className="shadow-lg border">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`} 
          className="hover:scale-105 transition-all"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
      </div>

      <button type="button" className="m-3 p-2 rounded-lg bg-orange-600 w-60 text-xl text-white cursor-pointer hover:bg-orange-700 transition-all" onClick={() => {
        fecthIdRecipe(drink.idDrink)
        getIdDrink(drink.idDrink)
      }}>Ver Receta</button>
    </div>
  )
}

export default DrinkCard