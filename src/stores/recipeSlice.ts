import { StateCreator } from "zustand"
import { getCategories, getDrinkDetails, getRecipes } from "../apis/RecipeApi"
import { Categories, Drink, DrinkDetails, Drinks, SearchFilter } from "../types"

export type RecipesSliceType = {
  categories: Categories
  drinks: Drinks,
  drinkDetails: DrinkDetails
  fetchCategories: () => Promise<void>
  searchRecipes: (searchRecipes: SearchFilter) => Promise<void>
  fecthIdRecipe: (id: Drink["idDrink"]) => Promise<void>
}

// importo StateCreator para tener autocompletado
export const createRecipeSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  drinkDetails: {} as DrinkDetails,
  fetchCategories: async () => {
    const categories = await getCategories()
    set({
      categories
    })
  },
  searchRecipes: async (searchRecipes) => {
    const drinks = await getRecipes(searchRecipes)
    set({
      drinks
    })
  },
  fecthIdRecipe: async (id) => {
    const drinkDetails = await getDrinkDetails(id)
    set({
      drinkDetails
    })
  }
})