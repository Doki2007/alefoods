import type { Media } from '@content-island/api-client';

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  serving: number;
  ingredientCollection: string[];
  image: Media[];
  instruction: string;
  difficulty: string;
  description: string;
  prepTime: number;
}