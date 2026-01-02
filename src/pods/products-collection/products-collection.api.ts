import client from "#lib/client.ts";
import type { Product } from "./products-collection.model";


export const getAllProducts = async () =>
    await client.getContentList<Product>({
        contentType: 'Product',
        includeRelatedContent: true,
        sort: {'fields.title': 'asc'},
    })