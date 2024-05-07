import { StateCreator } from "zustand"
import { getCategories } from "../apis/RecipeApi"
import { Categories, SearchFilter } from "../types"

export type RecipesSliceType = {
  categories: Categories,
  fetchCategories: () => Promise<void>
  searchRecipes: (searchRecipes: SearchFilter) => Promise<void>
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
  },
  searchRecipes: async (searchRecipes) => {
    
  }
})