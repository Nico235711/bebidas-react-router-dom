import { StateCreator } from "zustand"
import { getCategories } from "../apis/RecipeApi"

type Category = {}

export type RecipesSliceType = {
  categories: Category[],
  fetchCategories: () => Promise<void>
}

// importo StateCreator para tener autocompletado
export const createRecipeSlice: StateCreator<RecipesSliceType> = () => ({
  categories: [],
  fetchCategories: async () => {
    await getCategories()
  }
})