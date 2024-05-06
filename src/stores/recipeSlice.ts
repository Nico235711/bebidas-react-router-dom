import { StateCreator } from "zustand"
import { getCategories } from "../apis/RecipeApi"
import { Categories } from "../types"

export type RecipesSliceType = {
  categories: Categories,
  fetchCategories: () => Promise<void>
}

// importo StateCreator para tener autocompletado
export const createRecipeSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories()
    set({
      categories
    })
  }
})