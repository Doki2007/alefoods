import client from "#lib/client.ts";
import type { Recipe } from "./recipe-collection.model";

export const getAllRecipes = async () => 
    await client.getContentList<Recipe>({
        contentType: 'Recipe',
        sort: {'fields.title': 'asc'},
        pagination: { take: 14 },
    })

export const getIndexRecipes = async () => {
    const allRecipes = await getAllRecipes();
    const indexRecipes = allRecipes.slice(0, 3);
    return indexRecipes
}