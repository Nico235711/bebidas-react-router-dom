import { z } from "zod";
import { CategoriesApiSchema } from "../utils/recipe-schema";

export type Categories = z.infer<typeof CategoriesApiSchema>