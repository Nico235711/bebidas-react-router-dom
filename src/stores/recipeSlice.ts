import { StateCreator } from "zustand"

type Category = {}

export type RecipesSliceType = {
  categories: Category[]
}

// importo StateCreator para tener autocompletado
export const createRecipeSlice: StateCreator<RecipesSliceType> = () => ({
  categories: []
})