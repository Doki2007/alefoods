import client from "#lib/client.ts";
import type { Product } from "./products-collection.model";


export const getAllProducts = async () =>
    await client.getContentList<Product>({
        contentType: 'Product',
        includeRelatedContent: true,
        sort: {'fields.title': 'asc'},
    })

export const getBestSellers = async () => {
    const allProducts = await getAllProducts();
    const bestSellerSlugs = [
        "quinua-roja-cocida", 
        "quinua-blanca-cocida",
        "cafe-exportacion"
    ];
    return allProducts.filter(p => bestSellerSlugs.includes(p.slug));
    };