import client from "#lib/client.ts";
import type { Recipe } from "./recipe-collection.model";

export const getAllRecipes = async () => 
    await client.getContentList<Recipe>({
        contentType: 'Recipe',
        sort: {'fields.title': 'asc'},
    })