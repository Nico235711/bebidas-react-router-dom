import axios from "axios"
import { CategoriesApiSchema, SearchFilterSchema } from "../utils/recipe-schema"
import { SearchFilter } from "../types"

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  const { data } = await axios(url)
  const result = CategoriesApiSchema.safeParse(data)
  if (result.success) return result.data
}

export async function getRecipes(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
  const { data } = await axios(url)
  
  const result = SearchFilterSchema.safeParse(data)
  console.log(result);
  
  if (result.success) return result.data  
}