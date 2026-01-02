import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
// z es zod schema

const recipesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        time: z.string(),
        dificulty: z.string(),
        ration: z.string(),
    })
})

export const collections = { recipesCollection }