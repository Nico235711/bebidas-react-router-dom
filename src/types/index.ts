import { z } from "zod";
import { CategoriesApiSchema, DrinkApiSchema, DrinksApiSchema, SearchFilterSchema } from "../utils/recipe-schema";

export type Categories = z.infer<typeof CategoriesApiSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksApiSchema>
export type Drink = z.infer<typeof DrinkApiSchema>