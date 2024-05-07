import { z } from "zod";
import { CategoriesApiSchema, SearchFilterSchema } from "../utils/recipe-schema";

export type Categories = z.infer<typeof CategoriesApiSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>