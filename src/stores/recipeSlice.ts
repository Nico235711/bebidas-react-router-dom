import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../apis/RecipeApi"
import { Categories, Drinks, SearchFilter } from "../types"

export type RecipesSliceType = {
  categories: Categories
  drinks: Drinks
  fetchCategories: () => Promise<void>
  searchRecipes: (searchRecipes: SearchFilter) => Promise<void>
}

// importo StateCreator para tener autocompletado
export const createRecipeSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
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
  }
})