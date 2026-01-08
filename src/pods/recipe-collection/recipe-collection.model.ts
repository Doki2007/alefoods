import type { Media } from '@content-island/api-client';

export interface Recipe {
  id: string;
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  slug: string;
  serving: number;
  ingredientCollection: string[];
  image: Media;
  instruction: string;
  difficulty: string;
  description: string;
  prepTime: number;
  category: string[];
}