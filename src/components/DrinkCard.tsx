import { Drink } from "../types"

type DrinkCardProps = {
  drink: Drink
}

const DrinkCard = ({ drink }: DrinkCardProps) => {

  return (
    <div className="flex">
      <div className="">
        imagen bebida
      </div>
      <div className="">
        <p>Nombre de la Bebida: {drink.strDrink}</p>
      </div>
    </div>
  )
}

export default DrinkCard